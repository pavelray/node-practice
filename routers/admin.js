const express = require('express');

const routers = express.Router();

routers.get('/add-product', (req, res,next)=>{
    res.send("<form action='/product' method='POST'><input type='text' name='title' /><button type='submit'>Add</button></form>");
})

routers.post('/product', (req, res,next)=>{
    console.log(req.body);
    res.redirect('/');
})


module.exports = routers;