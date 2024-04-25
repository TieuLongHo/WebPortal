import fs from 'fs';
import path from 'path';
import Ajv from 'ajv';

const schemaPath = path.resolve('src/lib/scripts/schema.json');
const schemaData = fs.readFileSync(schemaPath, 'utf8');
const schema = JSON.parse(schemaData);

const ajv = new Ajv({ allErrors: true });

const validate = ajv.compile(schema);

function validateJSON(json) {
    const valid = validate(json);
    if (!valid) {
        console.error(validate.errors);
        return false;
    }
    return true;
}

// Function to validate all JSON files in a directory
async function validateDirectory(dirPath) {
    try {
        const files = await fs.promises.readdir(dirPath);

        for (const file of files) {
            if (path.extname(file) === '.json') {
                const filePath = path.join(dirPath, file);
                const data = await fs.promises.readFile(filePath, 'utf8');

                try {
                    const json = JSON.parse(data);
                    if (!validateJSON(json)) {
                        console.error(`Validation failed for file: ${file}`);
                        process.exitCode = 1;
                    } else {
                        console.log(`Validation passed for file: ${file}`);
                    }
                } catch (e) {
                    console.error(`Error parsing JSON in file ${file}: ${e}`);
                    process.exitCode = 1; 
                }
            }
        }
    } catch (err) {
        console.error(`Error reading directory: ${err}`);
        process.exitCode = 1; 
}

// Check if directory path argument is provided
const dirPath = process.argv[2];
if (!dirPath) {
    console.error('Usage: node json-validator.js <directory_path>');
    process.exit(1); // Set exit code to 1 if directory path is not provided
}

// Validate the specified directory
validateDirectory(dirPath);

// import fs from 'fs';

// import path from 'path';
// import Ajv from 'ajv';

// // Read the JSON schema file synchronously
// const schemaPath = path.resolve('src/lib/scripts/schema.json'); 
// const schemaData = fs.readFileSync(schemaPath, 'utf8');
// const schema = JSON.parse(schemaData);

// // Create an Ajv instance
// const ajv = new Ajv({ allErrors: true });

// // Compile the JSON schema
// const validate = ajv.compile(schema);

// // Function to validate a single JSON object against the schema
// function validateJSON(json) {
//     const valid = validate(json);
//     if (!valid) {
//         console.error(validate.errors);
//         return false;
//     }
//     return true;
// }

// // Function to validate all JSON files in a directory
// async function validateDirectory(dirPath) {
//     try {
//         const files = await fs.promises.readdir(dirPath);
        
//         for (const file of files) {
//             if (path.extname(file) === '.json') {
//                 const filePath = path.join(dirPath, file);
//                 const data = await fs.promises.readFile(filePath, 'utf8');
                
//                 try {
//                     const json = JSON.parse(data);
//                     if (!validateJSON(json)) {
//                         console.error(`Validation failed for file: ${file}`);
//                     } else {
//                         console.log(`Validation passed for file: ${file}`);
//                     }
//                 } catch (e) {
//                     console.error(`Error parsing JSON in file ${file}: ${e}`);
//                 }
//             }
//         }
//     } catch (err) {
//         console.error(`Error reading directory: ${err}`);
//     }
// }
// validateDirectory('src/lib/data/Tutorial');
