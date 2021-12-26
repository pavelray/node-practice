const express = require('express');
const path = require('path');

const dirName = require('../utils/path');

const routers = express.Router();

routers.get('/add-product', (req, res,next)=>{
    res.sendFile(path.join(dirName, 'views', 'add-product.html'));
    // res.send("<form action='/product' method='POST'><input type='text' name='title' /><button type='submit'>Add</button></form>");
})

routers.post('/add-product', (req, res,next)=>{
    console.log(req.body);
    res.redirect('/');
})


module.exports = routers;