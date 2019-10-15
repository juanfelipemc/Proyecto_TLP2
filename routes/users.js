// routes > user.js
const express = require('express');
const UserService = require('../services/user');
function userServices(app){
    const router = express.Router();

    app.use('/api/user', router);
    
    const userService= new UserService();
    router.get('/', async (req,res, next)=>{
        try{
            const {tags} = req.query;
            const users= await userService.getUsers({tags});
            res.send({
                data : users,
                message : "Users retrieved"
            });
        }catch(err){
            next(err);
        }
        
    });

    //Obteniendo un Id en particular
    router.get("/:userId", async function (req, res, next){
        //en este caso el Id viene como parámetro en la URL
        const { userId } = req.params;
        try{
            const user = await userService.getUser({ userId });

            res.status(200).json({
                data: user,
                message: 'user retrieved'
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
            const createduserId = await user.createdwebPage( { webPage });

            res.status(201).json({
                data: createduserId,
                message: 'webPage created'
            })
        }catch(err){
            next(err);
        }
    });
    //Actualizando una pagina web
    router.put("/:userId", async function (req, res, next){
        //con el put recibo dos aspectos, el cuerpo y el parametro (id de pagina web a actualizar)
        const { body : webPage } = req;
        const { userId } = req.params;

        try{
            const updateduserId = await user.udpatewebPage({ userId , webPage });
            res.status(200).json({
                data: updateduserId,
                message: 'webPage updated'
            })
        }catch(err){
            next(err);
        }
    });

    //Eliminar pagina web
    router.delete("/:userId", async function (req, res, next){
        const { userId } = req.params;
        try{
            const deleteduserId = await user.deletewebPage({ userId });

            res.status(200).json({
                data: deleteduserId,
                message: 'webPage deleted'
            })
        }catch(err){
            next(err);
        }
    });
}
module.exports = userServices;