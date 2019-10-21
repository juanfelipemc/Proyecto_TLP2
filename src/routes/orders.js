// routes > orders.js
const express = require('express');
const OrdersService = require('../services/order');

function ordersApi(app){
    const router = express.Router();

    app.use('/api/orders', router);

    const ordersService = new OrdersService();
    router.get('/', async (req,res, next)=>{
        try{
            const {tags} = req.query;
            const orders= await ordersService.getOrders({tags});
            res.send({
                data : orders,
                message : "Orders retrieved"
            });
        }catch(err){
            next(err);
        }
        
    });

    //Obteniendo un filtro en particular
    router.get("/:orderFilter", async function (req, res, next){
        //en este caso el filtro viene como parámetro en la URL
        const { orderFilter } = req.params;
        try{
            const orders = await ordersService.getOrdersFilter({ orderFilter });

            res.status(200).json({
                data: orders,
                message: 'Orders retrieved'
            })
        }catch(err){
            next(err);
        }
    });

    //Creando las orders
    router.post("/", async function (req, res, next){
        //sacamos del cuerpo (body) de la petición el order.
        const { body : order } = req;
        try{
            const createdOrder = await ordersService.createOrder( { order });

            res.status(200).json({
                data: createdOrder,
                message: 'order created'
            })
        }catch(err){
            next(err);
        }
    });

    //Actualizando un order
    router.put("/:orderId", async function (req, res, next){
        //con el put recibo dos aspectos, el cuerpo y el parametro (id de ordero a actualizar)
        const { body : order } = req;
        const { orderId } = req.params;

        try{
            const updatedOrderId = await ordersService.udpateOrder({ orderId , order });
            res.status(200).json({
                data: updatedOrderId,
                message: 'order updated'
            })
        }catch(err){
            next(err);
        }
    });

    //Eliminar order
    router.delete("/:orderId", async function (req, res, next){
        const { orderId } = req.params;
        try{
            const deletedOrderId = await ordersService.deleteOrder({ orderId });

            res.status(200).json({
                data: deletedOrderId,
                message: 'order deleted'
            })
        }catch(err){
            next(err);
        }
    });
}
module.exports = ordersApi;