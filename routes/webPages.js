// routes > webPages.js
const express = require('express');
const WebPagesService = require('../services/webPages');
function webPagesServices(app){
    const router = express.Router();

    app.use('/api/webPages', router);
    
    const webPages= new WebPagesService();
    router.get('/', async (req,res, next)=>{
        try{
            const {tags} = req.query;
            const webPages1= await webPages.getWebPages({tags});
            res.send({
                data : webPages1,
                message : "Web Pages retrieved"
            });
        }catch(err){
            next(err);
        }
        
    });

    //Obteniendo un Id en particular
    router.get("/:webPageId", async function (req, res, next){
        //en este caso el Id viene como parámetro en la URL
        const { webPageId } = req.params;
        try{
            const webPage = await webPages.getWebPage({ webPageId });

            res.status(200).json({
                data: webPage,
                message: 'webPages retrieved'
            })
        }catch(err){
            next(err);
        }
    });

    //Creando las paginas web
    router.post("/", async function (req, res, next){
        //sacamos del cuerpo (body) de la petición la pagina web.
        const { body : webPage } = req;
        try{
            const createdwebPageId = await webPages.createdwebPage( { webPage });

            res.status(201).json({
                data: createdwebPageId,
                message: 'webPage created'
            })
        }catch(err){
            next(err);
        }
    });
    //Actualizando una pagina web
    router.put("/:webPageId", async function (req, res, next){
        //con el put recibo dos aspectos, el cuerpo y el parametro (id de pagina web a actualizar)
        const { body : webPage } = req;
        const { webPageId } = req.params;

        try{
            const updatedwebPageId = await webPages.udpatewebPage({ webPageId , webPage });
            res.status(200).json({
                data: updatedwebPageId,
                message: 'webPage updated'
            })
        }catch(err){
            next(err);
        }
    });

    //Eliminar pagina web
    router.delete("/:webPageId", async function (req, res, next){
        const { webPageId } = req.params;
        try{
            const deletedwebPageId = await webPages.deletewebPage({ webPageId });

            res.status(200).json({
                data: deletedwebPageId,
                message: 'webPage deleted'
            })
        }catch(err){
            next(err);
        }
    });
}
module.exports = webPagesServices;