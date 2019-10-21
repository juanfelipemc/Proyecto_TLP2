
const MongoLib = require('../lib/mongo');

class ProductsService {
    constructor(){
        this.collection = 'products';
        this.mongoDB= new MongoLib();
    }

    async getProducts ( {tags} ){
        const query = tags && {$in : {tags}};
        const products = await this.mongoDB.getAll(this.collection, query);
        return products || []
    }

    async getProductsFilter ( {productFilter} ){
        const product = await this.mongoDB.getFilter(this.collection, productFilter);
        return product || {};
    }

    async createProduct( {product}){
        const createdProduct = await this.mongoDB.create(this.collection, product);
        return createdProduct;
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