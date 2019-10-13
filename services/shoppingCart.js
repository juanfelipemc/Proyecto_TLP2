const MongoLib = require('../lib/mongo');

class ShoppingCartService {
    constructor(){
        this.collection = 'shoppingCart';
        this.mongoDB= new MongoLib();
    }

    async getShoppingCart ( {tags} ){
        const query = tags && {$in : {tags}};
        const shoppingCart = await this.mongoDB(this.collection, query);
        return shoppingCart || []
    }

    async getShoppingCart ( {userId} ){
        const user = await this.mongoDB.get(this.collection, userId);
        return user || {};
    }

    async getShoppingCart ( {productId} ){
        const product = await this.mongoDB.get(this.collection, productId);
        return product || {};
    }

    async getShoppingCart ( {productCant} ){
        const product = await this.mongoDB.get(this.collection, productCant);
        return product || {};
    }

    async createShoppingCart( {shoppingCart}){
        const createdShoppingCart = await this.mongoDB.create(this.collection, shoppingCart);
        return createdShoppingCart;
    }

    async udpateShoppingCart({ shoppingCart}){
       const updatedShoppingCart = await this.mongoDB.update(this.collection, shoppingCart);
       return updatedShoppingCart;
    }

    async deleteProducts({ shoppingCart }){
        const deletedShoppingCart = await this.mongoDB.delete(this.collection, shoppingCart);
        return deletedShoppingCart;
    }

    
}
module.exports = ShoppingCartService;