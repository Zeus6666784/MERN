
const express = require('express');
const app = express();

app.get('/', (req, res) => {
    res.send('Welcome to Home Page');
});

app.get('/about', (req, res) => {
    res.send('This is About Page');
});

app.get('/contact', (req, res) => {
    res.send('This is Contact Page');
});

app.get('/student', (req, res) => {
    res.send('This is Student Page');
});

app.listen(3000, () => {
    console.log('Server running at http://localhost:3000');
});
