const express = require('express');

const routers = express.Router();

routers.get('/', (req, res,next)=>{
    res.send("<h1>Welcome to my shop page </h1>");
})

module.exports = routers;