const { MongoClient, ObjectId } = require('mongodb');
const { config } = require('../config');

const USER = encodeURIComponent(config.dbUser);
const PASSWORD = encodeURIComponent(config.dbPassword);
//const DB_NAME = config.dbName;
const DB_NAME = "db_blackTechnoMarket";

//========== url de conexion ================
const MONGO_URI = `mongodb+srv://${USER}:${PASSWORD}@${config.dbHost}/${DB_NAME}?retryWrites=true&w=majority`;

class MongoLib {
    constructor(){
        this.client = new MongoClient(MONGO_URI, {useNewUrlParser: true, useUnifiedTopology: true});
        //this.dbName = DB_NAME;
    }

    connect(){
        if(!MongoLib.connection){
            MongoLib.connection = new Promise((resolve,reject) =>{
                this.client.connect(err =>{
                    if(err){
                        reject(err);
                    }
                    console.log(MONGO_URI);
                    console.log('Connected succesfully to mongo');
                    resolve(this.client.db(this.dbName));
                });
            });
        }
        return MongoLib.connection;
    }

    getAll(collection, query) {
        return this.connect().then(db => {
          return db
            .collection(collection)
            .find(query)
            .sort({price : 1, dateorder : 1})
            .toArray()
            ;
        });
      }

    getId(collection, id) {
        return this.connect().then(db => {
            return db.collection(collection).find({ _id: ObjectId(id)}).toArray();
        });
    }

    getFilter(collection, filter) {
        
        if(filter.length===24){
            return this.connect().then(db => {
                return db.collection(collection).findOne({ _id: ObjectId(filter) });
            });
        }
        else{
            switch(collection){
                case 'products':
                    return this.connect().then(db => {
                        return db.collection(collection).find({$or:[{ category: filter }, { brand: filter } ]})
                        .sort({price : 1})
                        .toArray();
                    }); 
                    break;
                case 'order':
                    return this.connect().then(db => {
                        return db.collection(collection)
                        .find({$or:[{ "dateOrder.year": new Date(filter).getFullYear(), "dateOrder.month": new Date(filter).getMonth()+1, "dateOrder.day": new Date(filter).getDate()+1 },
                                    { "user.documentId": filter }, { "user.username": filter },{ "user.cellphone": filter }]})
                        .sort({price : 1, dateorder : 1})
                        .toArray();
                    });
                    break;
                case 'users':
                    return this.connect().then(db => {
                        return db.collection(collection)
                        .find({$or:[{ username: filter },  { cellphone: filter } ,  { documentId: filter }]})
                        .toArray();
                    });
                    break;
                case 'shoppingCart':
                        return this.connect().then(db => {
                            return db.collection(collection)
                            .find({ username: filter })
                            .toArray();
                        });
                        break;
            }
        }
    }
    
    
    create(collection, data) {
      return this.connect()
        .then(db => {
          return db.collection(collection).insertOne(data);
        })
        .then(result => result.insertedId);
    }
    
    update(collection, id, data) {
      return this.connect()
        .then(db => {
          return db
            .collection(collection)
            .updateOne({ _id: ObjectId(id) }, { $set: data }, { upsert: true });
        })
        .then(result => result.upsertedId || id);
    }
    
    delete(collection, id) {
      return this.connect()
        .then(db => {
          return db.collection(collection).deleteOne({ _id: ObjectId(id) });
        })
        .then(() => id);
    }
}

module.exports = MongoLib;