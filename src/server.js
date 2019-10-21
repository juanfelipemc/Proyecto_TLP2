//server.js
const express = require('express');
const cors = require('cors');
const app = express();
const productsApi= require('./routes/products');
const ordersApi= require('./routes/orders');
const usersApi= require('./routes/users');
const shoppingCart= require('./routes/shoppingCart');
const { config } =require('./config/index');
//---->>> Body Parser <<<------------
app.use(express.json());
app.use(cors());
//---->>>> routes <<<----------
productsApi(app);
ordersApi(app);
usersApi(app);
shoppingCart(app);
//---->>> get de la ruta principal del back <<<--------
app.get('/',(req,res,next)=>{
    res.send("Informe dos de taller de lenguajes de programación 2");
});

app.listen(config.port, function(){
    console.log(`Escuchando en el puerto http://localhost:${config.port}`);
});