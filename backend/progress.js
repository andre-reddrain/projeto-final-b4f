const { ObjectId } = require('mongodb')
const { DATABASE_NAME, COLLECTION_PROGRESS, getMongoCollection, COLLECTION_LIST } = require("./db")

async function createProgress(data) {
    const collection = await getMongoCollection(DATABASE_NAME, COLLECTION_PROGRESS)
    return await collection.insertOne(data)
}
async function updateProgressByUserId(userId, data) {
    const collection = await getMongoCollection(DATABASE_NAME, COLLECTION_PROGRESS)
    const result = await collection.updateOne(
        { userId: new ObjectId(userId)},
        { $set: data }
    )    
    return result.upsertedId
}
async function findProgressById(id) {
    if (ObjectId.isValid(id)) {
        const collection = await getMongoCollection(DATABASE_NAME, COLLECTION_PROGRESS)
        return await collection.findOne({ _id: new ObjectId(id) })
    }
}
//10.12.113.42
async function findProgressByContentAndUser(userId, contentId) {
    const collection = await getMongoCollection(DATABASE_NAME, COLLECTION_PROGRESS)
    return await collection.findOne({ 
        $and: [
            {userId: new ObjectId(userId)},
            {contentId: new ObjectId(contentId)},
        ]
    })
}

async function findProgressesAgregation(userId) {
    const collection = await getMongoCollection(DATABASE_NAME, COLLECTION_PROGRESS)
    return await collection.aggregate([
        {
            '$match': {
            'userId': userId
            }
        }, {
            '$lookup': {
            'from': 'content', 
            'localField': 'contentId', 
            'foreignField': '_id', 
            'as': 'content'
            }
        }, {
            '$unwind': {
            'path': '$content'
            }
        }
    ]).toArray()
}

async function findProgressesAgregationEpisode(userId, contentId) {
    const collection = await getMongoCollection(DATABASE_NAME, COLLECTION_PROGRESS)
    return await collection.aggregate([
        {
            '$match': { 
            $and: [
                {userId: new ObjectId(userId)},
                {contentId: new ObjectId(contentId)},
            ]
         }
        }, {
            '$lookup': {
            'from': 'episode', 
            'localField': 'episodeId', 
            'foreignField': '_id', 
            'as': 'content'
            }
        }, {
            '$unwind': {
            'path': '$content'
            }
        }
    ]).toArray()
}

async function deleteBySku(sku) {
    const collection = await getMongoCollection(DATABASE_NAME, COLLECTION_PROGRESS)
    const result = await collection.deleteOne({ sku: sku })
    return result.deletedCount
}

//deleteBySku("ABCD").then((count) => console.log(count, "documents eliminados"))

module.exports = { 
    findProgressById,
    createProgress,
    updateProgressByUserId,
    findProgressesAgregation,
    findProgressByContentAndUser,
    findProgressesAgregationEpisode                                                                                                                                                                                                                                                  
}