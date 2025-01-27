import { readFile, writeFile } from 'fs/promises';

async function convertToCJS() {
  // Read the ESM source file
  const esmSource = await readFile('./src/generator.js', 'utf8');
  
  // Convert ESM syntax to CJS
  const cjsSource = esmSource
    .replace(/import \{ faker \} from '@faker-js\/faker';/, 
             "const { faker } = require('@faker-js/faker');")
    .replace(/export const generateEvent = SolaceDataGenerator.generateEvent;/, 
             "module.exports = { generateEvent: SolaceDataGenerator.generateEvent };");
  
  // Write the CJS version
  await writeFile('./src/generator.cjs', cjsSource);
}

convertToCJS().catch(console.error);
