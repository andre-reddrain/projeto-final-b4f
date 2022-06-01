const { ObjectId } = require('mongodb')
const { DATABASE_NAME, COLLECTION_LIST, getMongoCollection } = require("./db")

async function createList(data) {
    const collection = await getMongoCollection(DATABASE_NAME, COLLECTION_LIST)
    return await collection.insertOne(data)
}

async function findListByUserId(userId) {
    const collection = await getMongoCollection(DATABASE_NAME, COLLECTION_LIST)
    return await collection.findOne({ 
        userId: new ObjectId(userId)
    }) 
}

async function updateListByUserId(userId, data) {
    const collection = await getMongoCollection(DATABASE_NAME, COLLECTION_LIST)
    const result = await collection.updateOne(
        { userId: userId },
        { $set: data }
    )    
    return result.upsertedId
}

module.exports = { 
    findListByUserId,
    createList,
    updateListByUserId
}