const { ObjectId } = require('mongodb')
const { DATABASE_NAME, COLLECTION_PROGRESS, getMongoCollection } = require("./db")

async function findProgressById(id) {
    if (ObjectId.isValid(id)) {
        const collection = await getMongoCollection(DATABASE_NAME, COLLECTION_PROGRESS)
        return await collection.findOne({ _id: new ObjectId(id) })
    }
}
module.exports = { 
    findProgressById
}