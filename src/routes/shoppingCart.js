// routes > shoppingCarts.js
const express = require('express');
const ShoppingCartService = require('../services/shoppingCart');

function shoppingCartApi(app){
    const router = express.Router();

    app.use('/api/shoppingCart', router);

    const shoppingCarts = new ShoppingCartService();
    router.get('/', async (req,res, next)=>{
        try{
            const {tags} = req.query;
            const shoppingCart= await shoppingCarts.getShoppingCart({tags});
            res.send({
                data : shoppingCart,
                message : "shoppingCart retrieved"
            });
        }catch(err){
            next(err);
        }
        
    });

    //Obteniendo un filtro en particular
    router.get("/:shoppingCartFilter", async function (req, res, next){
        //en este caso el filtro viene como parámetro en la URL
        const { shoppingCartFilter } = req.params;
        try{
            const shoppingCart = await shoppingCarts.getShoppingCartFilter({ shoppingCartFilter });

            res.status(200).json({
                data: shoppingCart,
                message: 'shoppingCart retrieved'
            })
        }catch(err){
            next(err);
        }
    });

    //Creando las shoppingCart
    router.post("/", async function (req, res, next){
        //sacamos del cuerpo (body) de la petición el shoppingCarts.
        const { body : shoppingCart } = req;
        try{
            const createdshoppingCart = await shoppingCarts.createShoppingCart( { shoppingCart });

            res.status(201).json({
                data: createdshoppingCart,
                message: 'shoppingCart created'
            })
        }catch(err){
            next(err);
        }
    });

    //Actualizando un shoppingCart
    router.put("/:shoppingCartId", async function (req, res, next){
        //con el put recibo dos aspectos, el cuerpo y el parametro (id de shoppingCart a actualizar)
        const { body : shoppingCart } = req;
        const { shoppingCartId } = req.params;

        try{
            const updatedshoppingCartId = await shoppingCarts.udpateShoppingCart({ shoppingCartId , shoppingCart });
            res.status(200).json({
                data: updatedshoppingCartId,
                message: 'shoppingCart updated'
            })
        }catch(err){
            next(err);
        }
    });

    //Eliminar shoppingCart
    router.delete("/:shoppingCartId", async function (req, res, next){
        const { shoppingCartId } = req.params;
        try{
            const deletedshoppingCartId = await shoppingCarts.deleteShoppingCart({ shoppingCartId });

            res.status(200).json({
                data: deletedshoppingCartId,
                message: 'shoppingCart deleted'
            })
        }catch(err){
            next(err);
        }
    });
}
module.exports = shoppingCartApi;