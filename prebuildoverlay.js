import { execSync } from 'child_process';

console.log('Compiling Overlay typeScript files...');
execSync('tsc --project tsconfig.json', { stdio: 'inherit' });
console.log('Overlay typeScript compilation complete.');

