//server.js
const express = require('express');
const app = express();
const productsApi= require('./routes/products');
const webPagesApi= require('./routes/webPages');
const usersApi= require('./routes/users');
const { config } =require('./config/index');
//---->>> Body Parser <<<------------
app.use(express.json());

//---->>>> routes <<<----------
productsApi(app);
webPagesApi(app);
usersApi(app);
//---->>> get de la ruta principal del back <<<--------
app.get('/',(req,res,next)=>{
    res.send("Informe dos de taller de lenguajes de programación 2");
});

app.listen(config.port, function(){
    console.log(`Escuchando en el puerto http://localhost:${config.port}`);
});