const { ObjectId } = require('mongodb')
const { DATABASE_NAME, COLLECTION_CONTENT, getMongoCollection } = require("./db")

async function findAllContent() {
    const collection = await getMongoCollection(DATABASE_NAME, COLLECTION_CONTENT)
    return await collection.find().toArray() 
}
async function findContentById(id) {
    if (ObjectId.isValid(id)) {
        const collection = await getMongoCollection(DATABASE_NAME, COLLECTION_CONTENT)
        return await collection.findOne({ _id: new ObjectId(id) })
    }
}

module.exports = { 
    findAllContent,
    findContentById
}