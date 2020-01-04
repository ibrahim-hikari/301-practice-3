`use strict`;

require('dotenv').config();
const express = require('express');

const app = express();
const PORT = process.env.PORT || 2020;

/// taken from https://support.oneskyapp.com/hc/en-us/articles/208047697-JSON-sample-files
let sample = ['naem', 'hello', 'bye']


app.get('/', (req, res) => {
    res.status(200).send('Home Page')
})

app.get('/data', (req, res) => {
    res.status(200).json(sample)
})

app.use('*', (req,res) =>{
    res.status(404).send('Not Found')
})

app.listen(PORT, () => {
    console.log(`Listening to PORT Number ${PORT}`)
})