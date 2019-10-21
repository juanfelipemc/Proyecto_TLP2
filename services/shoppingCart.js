const MongoLib = require('../lib/mongo');

class ShoppingCartService {
    constructor(){
        this.collection = 'shoppingCart';
        this.mongoDB= new MongoLib();
    }

    async getShoppingCart ( {tags} ){
        const query = tags && {$in : {tags}};
        const shoppingCart = await this.mongoDB.getAll(this.collection, query);
        return shoppingCart || []
    }

    async getShoppingCartFilter ( {shoppingCartFilter} ){
        const shoppingCart = await this.mongoDB.getFilter(this.collection, shoppingCartFilter);
        return shoppingCart || {};
    }

    async createShoppingCart( {shoppingCart}){
        const createdshoppingCart = await this.mongoDB.create(this.collection, shoppingCart);
        return createdshoppingCart;
    }

    async udpateShoppingCart({ shoppingCartId, shoppingCart } = { }){
        const updatedshoppingCartId = await this.mongoDB.update(this.collection, shoppingCartId, shoppingCart);
        return updatedshoppingCartId;
    }

    async deleteShoppingCart({ shoppingCartId }){
        const deletedShoppingCartId = await this.mongoDB.delete(this.collection, shoppingCartId);
        return deletedShoppingCartId;
    }
}
module.exports = ShoppingCartService;