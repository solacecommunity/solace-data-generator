import { readFile, writeFile, mkdir } from 'fs/promises';
import { dirname } from 'path';

async function ensureDirectoryExists(filePath) {
  await mkdir(dirname(filePath), { recursive: true });
}

async function convertToCJS() {
  try {
    // First ensure dist directory exists
    await ensureDirectoryExists('./dist/index.js');

    // 1. Copy generator.js to dist unchanged
    const esmSource = await readFile('./src/generator.js', 'utf8');
    await writeFile('./dist/generator.js', esmSource);

    // 2. Create ESM entry point
    await writeFile('./dist/index.js', `
import { generateEvent } from './generator.js';
export { generateEvent };
`);

    // 3. Create CJS version of generator
    const cjsSource = esmSource
      .replace(/import \{ faker \} from '@faker-js\/faker';/, 
               "const { faker } = require('@faker-js/faker');")
      .replace(/export const generateEvent = SolaceDataGenerator.generateEvent;/, 
              "module.exports = { generateEvent: SolaceDataGenerator.generateEvent };");
    
    await writeFile('./dist/generator.cjs', cjsSource);
    
    // 4. Create CJS entry point
    await writeFile('./dist/index.cjs', `
const { generateEvent } = require('./generator.cjs');
module.exports = { generateEvent };
`);

    console.log('Build completed successfully');
  } catch (error) {
    console.error('Build failed:', error);
    process.exit(1);
  }
}

convertToCJS().catch(console.error);