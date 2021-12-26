const express = require('express');
const bodyParser = require('body-parser');

const adminRoute = require('./routers/admin');
const shopRoute = require('./routers/shop');

const app = express();

app.use(bodyParser.urlencoded({extended: false}));
app.use(adminRoute);
app.use(shopRoute);

app.use((req,res,next)=> {
    res.status(404).send("<h1>Page not found</h1>");
})

app.listen(5001);