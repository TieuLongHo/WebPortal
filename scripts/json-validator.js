import fs from 'fs';
import path from 'path';
import Ajv from 'ajv';


function validateJSON(json) {
    const valid = validate(json);
    if (!valid) {
        console.error('Validation errors:');
        console.error(validate.errors);
        return false;
    }
    return true;
}

async function validateDirectory(dirPath) {
    try {
        const files = await fs.promises.readdir(dirPath);

        for (const file of files) {
            if (path.extname(file) === '.json') {
                const filePath = path.join(dirPath, file);
                try {
                    const data = await fs.promises.readFile(filePath, 'utf8');
                    const json = JSON.parse(data);

                    if (!validateJSON(json)) {
                        console.error(`Validation failed for file: ${file}`);
                        process.exitCode = 1;
                    } else {
                        console.log(`Validation passed for file: ${file}`);
                    }
                } catch (e) {
                    console.error(`Error reading/parsing JSON in file ${file}: ${e}`);
                    process.exitCode = 1;
                }
            }
        }
    } catch (err) {
        console.error(`Error reading directory: ${err}`);
        process.exitCode = 1;
    }
}

const mode = process.argv[2];

var dirPath = '';
var schemaPath = '';
if (mode === 'tutorial'){
    dirPath = path.resolve('src/lib/data/Tutorials');
    schemaPath = path.resolve('scripts/tutorial-schema.json');
}else if (mode === 'component'){
    dirPath = path.resolve('src/lib/data/Components');
    schemaPath = path.resolve('scripts/component-schema.json');
}else{
    console.error('Invalid mode. Please specify either "tutorial" or "component"');
    process.exitCode = 1;
}


const schemaData = fs.readFileSync(schemaPath, 'utf8');
const schema = JSON.parse(schemaData);

const ajv = new Ajv({ allErrors: true });
const validate = ajv.compile(schema);


validateDirectory(dirPath).catch(err => {
    console.error(`Error validating directory: ${err}`);
    process.exitCode = 1;
});
