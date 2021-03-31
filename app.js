const express = require('express');
const path = require("path");
const bodyParser = require('body-parser');

const server = express ();

server.use(bodyParser.urlencoded({extended: false}))

server.get('/', (req, res) => {
   res.sendFile(path.join(__dirname, '/index.html'))
})

server.post('/hello', (req, res) => {
    console.log(req.body)
    res.status(200).json(`Hello ${req.body.name}`)
})

const PORT = process.env.PORT || 8000;
server.listen(PORT, ()=>{
    console.log(`Server listening on port ${PORT}`)
})

module.exports = server;