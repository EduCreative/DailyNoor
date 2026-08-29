const { execSync } = require('child_process');
const path = require('path');

console.log('Running 365 Unique Dataset Compiler...');
try {
  execSync('python3 scripts/compile_365_dataset.py', { stdio: 'inherit' });
  console.log('365 Dataset compiled successfully.');
} catch (e) {
  console.error('Error generating 365 dataset:', e);
  process.exit(1);
}
