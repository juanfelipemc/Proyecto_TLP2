


const MongoLib = require('../lib/mongo');

class UserService {
    constructor(){
        this.collection = 'users';
        this.mongoDB= new MongoLib();
    }

    async getUsers ( {tags} ){
        const query = tags && {$in : {tags}};
        const user = await this.mongoDB.getAll(this.collection, query);
        return user || []
    }

    async getUser ( {userId} ){
        const user = await this.mongoDB.getId(this.collection, userId);
        return user || {};
    }

    async createUser( {user}){
        const createdUser = await this.mongoDB.create(this.collection, user);
        return createdUser;
    }

    async udpateUser({ userId, user } = { }){
        const updatedUser = await this.mongoDB.update(this.collection, userId, user);
        return updatedUser;
    }

    async deleteUser({ userId }){
        const deletedUser = await this.mongoDB.delete(this.collection, userId);
        return deletedUser;
    }

    
}
module.exports = UserService;