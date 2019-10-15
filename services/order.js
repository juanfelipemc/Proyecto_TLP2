const MongoLib = require('../lib/mongo');

class OrderService {
    constructor(){
        this.collection = 'order';
        this.mongoDB= new MongoLib();
    }

    async getOrder( {tags} ){
        const query = tags && {$in : {tags}};
        const order = await this.mongoDB(this.collection, query);
        return order || []
    }

    async getOrderId ( {orderId} ){
        const order = await this.mongoDB.get(this.collection, orderId);
        return order || {};
    }

    async getOrderDate ( {orderDate} ){
        const order = await this.mongoDB.get(this.collection, orderDate);
        return order || {};
    }

    async getOrderPId ( {productId} ){
        const product = await this.mongoDB.get(this.collection, productId);
        return product || {};
    }

    async getOrderPPrice ( {productPrice} ){
        const product = await this.mongoDB.get(this.collection, productPrice);
        return product || {};
    }

    async getOrderPrice ( {orderPrice} ){
        const order = await this.mongoDB.get(this.collection, orderPrice);
        return order || {};
    }

    async createOrder( {order}){
        const createOrdertId = await this.mongoDB.create(this.collection, order);
        return createdOrderId;
    }

    async udpateOrder({ orderId, order } = { }){
        const updatedOrderId = await this.mongoDB.update(this.collection, orderId, order);
        return updatedOrderId;
    }

    async deleteProducts({ orderId }){
        const deletedOrderId = await this.mongoDB.delete(this.collection, orderId);
        return deletedOrderId;
    }
    
}
module.exports = OrderService;