const MongoLib = require('../lib/mongo');

class OrderService {
    constructor(){
        this.collection = 'order';
        this.mongoDB= new MongoLib();
    }

    async getOrder( {tags} ){
        const query = tags && {$in : {tags}};
        const order = await this.mongoDB.getAll(this.collection, query);
        return order || []
    }

    async getOrdersFilter ( {ordersFilter} ){
        const order = await this.mongoDB.getFilter(this.collection, ordersFilter);
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

    async deleteOrder({ orderId }){
        const deletedOrderId = await this.mongoDB.delete(this.collection, orderId);
        return deletedOrderId;
    }  
}
module.exports = OrderService;