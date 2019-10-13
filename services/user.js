
const MongoLib = require('../lib/mongo');

class UserService {
    constructor(){
        this.collection = 'user';
        this.mongoDB= new MongoLib();
    }

    async getUser ( {tags} ){
        const query = tags && {$in : {tags}};
        const user = await this.mongoDB(this.collection, query);
        return user || []
    }

    async getUser ( {userId} ){
        const user = await this.mongoDB.get(this.collection, userId);
        return user || {};
    }

    async getUser ( {userPassword} ){
        const user = await this.mongoDB.get(this.collection, userPassword);
        return user || {};
    }

    async getUser ( {userType} ){
        const user = await this.mongoDB.get(this.collection, userType);
        return user || {};
    }

    async createUser( {user}){
        const createdUser = await this.mongoDB.create(this.collection, user);
        return createdUser;
    }

    async udpateUser({ puserId, user } = { }){
        const updatedUser = await this.mongoDB.update(this.collection, userId, user);
        return updatedUser;
    }

    async deleteUser({ userId }){
        const deletedUser = await this.mongoDB.delete(this.collection, userId);
        return deletedUser;
    }

    
}
module.exports = UserService;