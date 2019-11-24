// routes > products.js
const express = require('express');
const ProductsService = require('../services/products');

function productsApi(app){
    const router = express.Router();

    app.use('/api/products', router);

    const productsService = new ProductsService();
    router.get('/', async (req,res, next)=>{
        try{
            const {tags} = req.query;
            const products= await productsService.getProducts({tags});
            res.send({
                data : products,
                message : "products retrieved"
            });
        }catch(err){
            next(err);
        }
        
    });

    //Obteniendo un filtro en particular
    router.get("/:productFilter", async function (req, res, next){
        //en este caso el filtro viene como parámetro en la URL
        const { productFilter } = req.params;
        try{
            const products = await productsService.getProductsFilter({ productFilter });

            res.status(200).json({
                data: products,
                message: 'products retrieved'
            })
        }catch(err){
            next(err);
        }
    });

    //Creando los productos
    router.post("/", async function (req, res, next){
        //sacamos del cuerpo (body) de la petición el producto.
        const { body : product } = req;
        try{
            const createdproduct = await productsService.createProduct( { product});

            res.status(201).json({
                data: createdproduct,
                message: 'product created'
            })
        }catch(err){
            next(err);
        }
    });

    //Actualizando un producto
    router.put("/:productId", async function (req, res, next){
        //con el put recibo dos aspectos, el cuerpo y el parametro (id de producto a actualizar)
        const { body : product } = req;
        const { productId } = req.params;

        try{
            const updatedproductId = await productsService.udpateProducts({ productId , product });
            res.status(200).json({
                data: updatedproductId,
                message: 'product updated'
            })
        }catch(err){
            next(err);
        }
    });

    //Eliminar producto
    router.delete("/:productId", async function (req, res, next){
        const { productId } = req.params;
        try{
            const deletedproductId = await productsService.deleteProduct({ productId });

            res.status(200).json({
                data: deletedproductId,
                message: 'product deleted'
            })
        }catch(err){
            next(err);
        }
    });
}
module.exports = productsApi;
