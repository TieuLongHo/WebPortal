import fs from 'fs/promises';
import path from 'path';

// Function to read all JSON files from a directory and combine them into a single JSON file
async function combineJsonFiles(directoryPath, outputFilePath) {
    try {
        const files = await fs.readdir(directoryPath);

        const tutorials = [];

        for (const file of files) {
            if (path.extname(file) === '.json') {
                const filePath = path.join(directoryPath, file);
                const jsonData = await fs.readFile(filePath, 'utf-8');
                const tutorial = JSON.parse(jsonData);
                tutorials.push(tutorial);
            }
        }

        const combinedData = { tutorials };
        const outputData = JSON.stringify(combinedData, null, 2);
        await fs.writeFile(outputFilePath, outputData, 'utf-8');
        console.log(`Combined JSON data written to ${outputFilePath}`);
    } catch (err) {
        console.error('Error combining JSON files:', err);
    }
}

const directoryPath = 'src/lib/data/Tutorial';
const outputFilePath = 'src/lib/data/combined-tutorials.json';

combineJsonFiles(directoryPath, outputFilePath);
