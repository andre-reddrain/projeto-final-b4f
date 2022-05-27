//const { ObjectId } = require('mongodb')
const { DATABASE_NAME, COLLECTION_USER, getMongoCollection } = require("./db")

async function findUserByEmail(email) {
    const collection = await getMongoCollection(DATABASE_NAME, COLLECTION_USER)
    return await collection.findOne({ email: email })
}
async function findUserByUsername(username) {
    const collection = await getMongoCollection(DATABASE_NAME, COLLECTION_USER)
    return await collection.findOne({ username: username }) 
}
async function createUser(data) {
    const collection = await getMongoCollection(DATABASE_NAME, COLLECTION_USER)
    return await collection.insertOne(data)
}
async function findUserByEmailPassword(email, password) {
    const collection = await getMongoCollection(DATABASE_NAME, COLLECTION_USER)
    return await collection.findOne({ 
        email: email,
        password: password
    }) 
}



module.exports = { 
    createUser,
    findUserByEmail,
    findUserByUsername,
    findUserByEmailPassword
}