const http = require('http');
const fs = require('fs');
const path = require('path');
const url = require('url');

const PORT = 3005;

// Define MIME types
const mimeTypes = {
    '.html': 'text/html',
    '.css': 'text/css',
    '.js': 'application/javascript',
    '.json': 'application/json',
    '.png': 'image/png',
    '.jpg': 'image/jpeg',
    '.jpeg': 'image/jpeg',
    '.gif': 'image/gif',
    '.svg': 'image/svg+xml',
    '.ico': 'image/x-icon'
};

const server = http.createServer((req, res) => {
    let filePath = req.url === '/' ? '/index.html' : req.url;
    
    // Remove query parameters
    filePath = filePath.split('?')[0];
    
    // Decode URL-encoded characters (like %20 for spaces)
    filePath = decodeURIComponent(filePath);
    
    // Handle external CDN requests by serving fallback images
    if (filePath.includes('d1aeya7jd2fyco.cloudfront.net')) {
        filePath = '/assets/images/default-course-icon.svg';
    }
    
    const fullPath = path.join(__dirname, filePath);
    const ext = path.extname(filePath);
    const contentType = mimeTypes[ext] || 'text/plain';

    // Add CORS headers
    res.setHeader('Access-Control-Allow-Origin', '*');
    res.setHeader('Access-Control-Allow-Methods', 'GET, POST, OPTIONS');
    res.setHeader('Access-Control-Allow-Headers', 'Content-Type');

    console.log(`📡 Request: ${req.url}`);

    fs.readFile(fullPath, (err, data) => {
        if (err) {
            res.writeHead(404, { 'Content-Type': 'text/html' });
            res.end(`<!DOCTYPE html><html><head><title>404 - Not Found</title></head><body><h1>404 - File Not Found</h1><p>The requested file <code>${filePath}</code> was not found.</p></body></html>`);
            console.log(`❌ 404: ${fullPath}`);
        } else {
            res.writeHead(200, { 'Content-Type': contentType });
            res.end(data);
            console.log(`✅ Served: ${filePath} (${data.length} bytes)`);
        }
    });
});

server.listen(PORT, () => {
    console.log('🎓 Educonnect Development Server');
    console.log(`🚀 Server running at http://localhost:${PORT}/`);
    console.log(`📁 Serving files from: ${__dirname}`);
    console.log('Press Ctrl+C to stop the server');
    
    // Try to open browser
    const { exec } = require('child_process');
    const url = `http://localhost:${PORT}`;
    
    exec(`start chrome "${url}"`, (err) => {
        if (err) {
            console.log(`💡 Manual: Open ${url} in your browser`);
        } else {
            console.log('🌐 Chrome opened automatically!');
        }
    });
});

process.on('SIGINT', () => {
    console.log('\n🛑 Shutting down server...');
    process.exit(0);
});