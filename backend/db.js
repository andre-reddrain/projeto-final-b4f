const { MongoClient, ObjectId } = require('mongodb')
const URL = process.env.MONGO_URL ?? "mongodb://localhost:27017"
const DATABASE_NAME = "projetofinal"
const COLLECTION_USER = "user"

/**
 * Connection to the MongoDB Database
 * @returns Connection to the database
 */
async function connectToMongo() {
    try {
        return await MongoClient.connect(URL)
    } catch (err) {
        console.log(err)
    }
}

/**
 * Collects a collection from the database
 * @param {*} dbName Name of the Database 
 * @param {*} collectionName Name of the collection
 * @returns Collection
 */
async function getMongoCollection(dbName, collectionName) {
    const client = await connectToMongo()
    return client.db(dbName).collection(collectionName)
}

async function getCollection(collectionName) {
    const client = await connectToMongo()
    return client.db("projetofinal").collection(collectionName)
}

module.exports = {
    DATABASE_NAME,
    COLLECTION_USER,
    getMongoCollection
}