const express = require('express');

const server = express ();

server.get('/', (req, res) => {
    res.status(200).json('Hello World')
})

const PORT = process.env.PORT || 8000;
server.listen(PORT, ()=>{
    console.log(`Server listening on port ${PORT}`)
})

module.exports = server;