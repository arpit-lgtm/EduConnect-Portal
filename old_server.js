const express = require('express');
const path = require('path');
const app = express();
const PORT = 3000;

// Serve static files from the current directory
app.use(express.static(__dirname));

// Serve assets from the assets directory if it exists
app.use('/assets', express.static(path.join(__dirname, 'assets')));

// Route for the main page
app.get('/', (req, res) => {
    res.sendFile(path.join(__dirname, 'index.html'));
});

// API route to serve unified database (universities + courses)
app.get('/api/unified-database', (req, res) => {
    res.sendFile(path.join(__dirname, 'public/assets/js/comprehensive-unified-database-COMPLETE.js'));
});

// Legacy routes (redirect to unified database)
app.get('/api/universities', (req, res) => {
    res.sendFile(path.join(__dirname, 'public/assets/js/comprehensive-unified-database-COMPLETE.js'));
});

app.get('/api/courses', (req, res) => {
    res.sendFile(path.join(__dirname, 'public/assets/js/comprehensive-unified-database-COMPLETE.js'));
});

// Start the server
app.listen(PORT, () => {
    console.log(`🚀 Educonnect server is running at http://localhost:${PORT}`);
    console.log(`📁 Serving files from: ${__dirname}`);
    console.log(`🎓 University database: Available at /api/universities`);
    console.log(`📚 Courses database: Available at /api/courses`);
    console.log('Press Ctrl+C to stop the server');
    
    // Auto-open Chrome browser
    const { exec } = require('child_process');
    const url = `http://localhost:${PORT}`;
    
    // For Windows, use start chrome command
    const openCommand = `start chrome "${url}"`;
    
    exec(openCommand, (err) => {
        if (err) {
            console.log(`💡 Manual: Open ${url} in your browser`);
        } else {
            console.log('🌐 Chrome opened automatically!');
        }
    });
});

// Handle server shutdown gracefully
process.on('SIGINT', () => {
    console.log('\n Shutting down Educonnect server...');
    process.exit(0);
});
