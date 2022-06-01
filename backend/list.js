const { ObjectId } = require('mongodb')
const { DATABASE_NAME, COLLECTION_LIST, getMongoCollection } = require("./db")

async function createList(userId) {
    if (ObjectId.isValid(userId)) {
        const collection = await getMongoCollection(DATABASE_NAME, COLLECTION_LIST)
        const insert = {
            userId: userId
        }
        return await collection.insertOne(insert)
    }
}

async function findListByUserId(userId) {
    if (ObjectId.isValid(userId)) {
        const collection = await getMongoCollection(DATABASE_NAME, COLLECTION_LIST)
        return await collection.findOne({ 
            userId: new ObjectId(userId)
        }) 
    }
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