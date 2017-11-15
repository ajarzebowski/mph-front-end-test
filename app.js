const express = require('express')
const app = express()
const path = require('path')
const propertiesData = require('./data/properties.json');

app.use(express.static(path.join(__dirname, '/public')));

app.get('/', (req, res) => res.sendFile('index.html'))

// app.get('/requirements', (req, res) => res.sendFile('requirements.html'))

app.get('/api/properties', (req, res) => res.send(propertiesData))

app.listen(3000, () => console.log('Michael Paul Holidays technical test app is listening on port 3000'))