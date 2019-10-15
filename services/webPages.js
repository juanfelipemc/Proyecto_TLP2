const MongoLib = require('../lib/mongo');

class WebPagesService {
    constructor(){
        this.collection = 'webPages';
        this.mongoDB= new MongoLib();
    }

    async getWebPages ( {tags} ){
        const query = tags && {$in : {tags}};
        const webPages = await this.mongoDB.getAll(this.collection, query);
        return webPages || []
    }

    async getWebPage ( {webPageId} ){
        const webPage = await this.mongoDB.getId(this.collection, webPageId);
        return webPage || [];
    }

    async createWebPage( {webPage}){
        const createdwebPageId = await this.mongoDB.create(this.collection, webPage);
        return createdwebPageId;
    }

    async udpateWebPage({ webPageId, webPage } = { }){
        const updatedwebPageId = await this.mongoDB.update(this.collection, webPageId, webPage);
        return updatedwebPageId;
    }

    async deletewebPages({ webPageId }){
        const deletedwebPageId = await this.mongoDB.delete(this.collection, webPageId);
        return deletedwebPageId;
    }
}
module.exports = WebPagesService;