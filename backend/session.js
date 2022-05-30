const { ObjectId } = require('mongodb')
const { DATABASE_NAME, COLLECTION_SESSION, getMongoCollection } = require("./db")

async function createSession(userId) {
    const collection = await getMongoCollection(DATABASE_NAME, COLLECTION_SESSION)
    const insert = {
        userId: userId
    }
    return await collection.insertOne(insert)
}
async function findToken(gotToken) {
    if (ObjectId.isValid(gotToken)) {
        const collection = await getMongoCollection(DATABASE_NAME, COLLECTION_SESSION)
        return await collection.findOne({ 
            _id: new ObjectId(gotToken)
        }) 
    }
}

module.exports = { 
    createSession,
    findToken
}