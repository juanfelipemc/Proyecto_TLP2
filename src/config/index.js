require('dotenv').config();

const config = {
    dev : process.env.NODE_ENV !== "production",
    port : process.env.PORT || 3000,
    cors : process.env.CORS,
    dbUser : "admin_db",
    dbPassword : "poli123",
    dbHost : "clusterpoli-1wmgy.mongodb.net",
    dbName : process.env.DB_NAME
}

module.exports = { config };