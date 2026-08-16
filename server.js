const express = require('express');
const app = express();

// connection to mongodb server.
const db = require('./db');

app.get('/', (req, res) => {
    res.send('Welcome to my E-Commerse Shop............ How can I help you  ?');
});

app.listen(3000, () => {
    console.log('Server is listening.........');
});