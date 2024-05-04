import fs from 'fs/promises';
import path from 'path';

async function combineJsonFiles(directoryPath, outputFilePath, mode) {
    try {
        const files = await fs.readdir(directoryPath);

        if (mode === 'tutorial') {
            const tutorials = [];
            const componentData = JSON.parse(await fs.readFile('src/lib/data/combined-components.json', 'utf-8'));

            for (const file of files) {
                if (path.extname(file) === '.json') {
                    const filePath = path.join(directoryPath, file);
                    const jsonData = await fs.readFile(filePath, 'utf-8');
                    let tutorial = JSON.parse(jsonData);

                    tutorial.components = tutorial.components.map(component => {
                        const foundComponent = componentData.components.find(c => c.name === component.name);
                        if (foundComponent) {
                            return foundComponent;
                        }
                        return component;
                    });

                    tutorials.push(tutorial);
                }
            }

            const combinedData = { tutorials };
            const outputData = JSON.stringify(combinedData, null, 2);
            await fs.writeFile(outputFilePath, outputData, 'utf-8');
            console.log(`Combined JSON data written to ${outputFilePath}`);
        }else if (mode === 'component'){
            const components = [];
    
            for (const file of files) {
                if (path.extname(file) === '.json') {
                    const filePath = path.join(directoryPath, file);
                    const jsonData = await fs.readFile(filePath, 'utf-8');
                    const component = JSON.parse(jsonData);
                    components.push(component);
                }
            }
    
            const combinedData = { components };
            const outputData = JSON.stringify(combinedData, null, 2);
            await fs.writeFile(outputFilePath, outputData, 'utf-8');
            console.log(`Combined JSON data written to ${outputFilePath}`);
        } else {
            console.error('Invalid mode. Please specify "tutorial" mode.');
            process.exitCode = 1;
        }
    } catch (err) {
        console.error('Error combining JSON files:', err);
    }
}

const mode = process.argv[2];

var outputFilePath = '';
var dirPath = '';

if (mode === 'tutorial'){
    dirPath = path.resolve('src/lib/data/Tutorials');
    outputFilePath = path.resolve('src/lib/data/combined-tutorials.json');
}else if (mode === 'component'){
    dirPath = path.resolve('src/lib/data/Components');
    outputFilePath = path.resolve('src/lib/data/combined-components.json');
}else{
    console.error('Invalid mode. Please specify either "tutorial" or "component"');
    process.exitCode = 1;
}

combineJsonFiles(dirPath , outputFilePath, mode);
