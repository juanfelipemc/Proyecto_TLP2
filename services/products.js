const MongoLib = require('../lib/mongo');

class ProductsService {
    constructor(){
        this.collection = 'products';
        this.mongoDB= new MongoLib();
    }

    async getProducts ( {tags} ){
        const query = tags && {$in : {tags}};
        const products = await this.mongoDB(this.collection, query);
        return products || []
    }

    async getProducts ( {productId} ){
        const product = await this.mongoDB.get(this.collection, productId);
        return product || {};
    }

    async getProducts ( {productCategory} ){
        const product = await this.mongoDB.get(this.collection, productCategory);
        return product || {};
    }

    async getProducts ( {productBrand} ){
        const product = await this.mongoDB.get(this.collection, productBrand);
        return product || {};
    }

    async createProduct( {product}){
        const createdProductId = await this.mongoDB.create(this.collection, product);
        return createdProductId;
    }

    async udpateProducts({ productId, product } = { }){
        const updatedProductId = await this.mongoDB.update(this.collection, productId, product);
        return updatedProductId;
    }

    async deleteProducts({ productId }){
        const deletedProductId = await this.mongoDB.delete(this.collection, productId);
        return deletedProductId;
    }
}
module.exports = ProductsService;