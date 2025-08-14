// server.js

// Import necessary packages
const express = require('express');
const path = require('path');

// Initialize the Express application
const app = express();
const PORT = 4000;

// Serve static files from the 'public' directory
// This will serve our index.html file and any other assets (like CSS, JS)
app.use(express.static(path.join(__dirname, 'public')));

// A simple route to confirm the server is running
app.get('/', (req, res) => {
    res.sendFile(path.join(__dirname, 'public', 'index.html'));
});

// Start the server and listen on the specified port
app.listen(PORT,'0.0.0.0', () => {
    console.log(`Frontend server is running on http://localhost:${PORT}`);
});
