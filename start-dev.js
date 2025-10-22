const { exec } = require('child_process');
const process = require('process');

// Start Next.js dev server using local installation
const nextServer = exec('node node_modules/next/dist/bin/next dev', (error) => {
  if (error) {
    console.error(`Error: ${error}`);
    return;
  }
});

// Log Next.js output
nextServer.stdout.on('data', (data) => {
  console.log(data);
  // When Next.js server is ready, open Chrome
  if (data.includes('Ready')) {
    // Open Chrome based on platform
    const start = process.platform === 'win32' ? 'start chrome' : 'google-chrome';
    exec(`${start} http://localhost:3000`);
  }
});

nextServer.stderr.on('data', (data) => {
  console.error(data);
});