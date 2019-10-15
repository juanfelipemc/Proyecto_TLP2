// routes > products.js
const express = require('express');
const ProductsService = require('../services/products');
const WebPagesService = require('../services/webPages');
function productsApi(app){
    const router = express.Router();

    app.use('/api/products', router);

    const productsService = new ProductsService();
 //   const webPages= new WebPagesService();
    router.get('/', async (req,res, next)=>{
        try{
            const {tags} = req.query;
            const products= await productsService.getProducts({tags});
            res.send({
                data : products,
                message : "products retrieved"
            });

            /*const page = await webPages.getWebPages({id : products[0].webPage});
            
            res.status(200).json({
                name : products[0].name,
                category : products[0].category,
                brand : products[0].brand,
                webPage : page,
                message: 'products listed'
            });*/

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
            const createdproductFilter = await productsService.createdProduct( { product});

            res.status(201).json({
                data: createdproductFilter,
                message: 'product created'
            })
        }catch(err){
            next(err);
        }
    });
    //Actualizando un producto
    router.put("/:productFilter", async function (req, res, next){
        //con el put recibo dos aspectos, el cuerpo y el parametro (id de producto a actualizar)
        const { body : product } = req;
        const { productFilter } = req.params;

        try{
            const updatedproductFilter = await productsService.udpateProduct({ productFilter , product });
            res.status(200).json({
                data: updatedproductFilter,
                message: 'product updated'
            })
        }catch(err){
            next(err);
        }
    });

    //Eliminar producto
    router.delete("/:productFilter", async function (req, res, next){
        const { productFilter } = req.params;
        try{
            const deletedproductFilter = await productsService.deleteProduct({ productFilter });

            res.status(200).json({
                data: deletedproductFilter,
                message: 'product deleted'
            })
        }catch(err){
            next(err);
        }
    });
}
module.exports = productsApi;