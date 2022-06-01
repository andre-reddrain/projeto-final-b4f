const { ObjectId } = require('mongodb')
const { DATABASE_NAME, COLLECTION_PROGRESS, getMongoCollection, COLLECTION_LIST } = require("./db")

async function createProgress(data) {
    const collection = await getMongoCollection(DATABASE_NAME, COLLECTION_PROGRESS)
    return await collection.insertOne(data)
}
async function findProgressById(id) {
    if (ObjectId.isValid(id)) {
        const collection = await getMongoCollection(DATABASE_NAME, COLLECTION_PROGRESS)
        return await collection.findOne({ _id: new ObjectId(id) })
    }
}

async function deleteBySku(sku) {
    const collection = await getMongoCollection("test-bc3", "products")
    const result = await collection.deleteOne({ sku: sku })
    return result.deletedCount
}

//deleteBySku("ABCD").then((count) => console.log(count, "documents eliminados"))

module.exports = { 
    findProgressById,
    createProgress
}