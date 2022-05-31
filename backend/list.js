const { ObjectId } = require('mongodb')
const { DATABASE_NAME, COLLECTION_LIST, getMongoCollection } = require("./db")

async function findList() {
    const collection = await getMongoCollection(DATABASE_NAME, COLLECTION_LIST)
    return await collection.find().toArray() 
}

module.exports = { 
    findList
}