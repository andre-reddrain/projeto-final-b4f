const express = require("express")
const {
    testEmail,
    testUsername,
    testPassword,
    testPasswordConfirmation,
    testBirthday,
    emailPasswordLogin
} = require("./auth");
const {
    createUser,
    findUserByEmailPassword,
    findUserId
} = require("./user")
const {
    createSession,
    findToken
} = require("./session")
const {
    findAllContent,
    findContentById
} = require("./content")
const {
    findListByUserId,
    createList,
    updateListByUserId
} = require("./list")
const {
    findProgressById,
    createProgress
} = require("./progress")
const aplication = express.Router()
const api = express.Router()

aplication.use(express.json())
aplication.post(`/signup`, async (req, res) => {
    const {
        confirmPassword,
        ...signupData
    }  = req.body
    
    const {
        email,
        username,
        password,
        birthday,
    } = signupData

    const errors = {
        ...await testEmail(email),
        ...await testUsername(username),
        ...testPassword(password),
        ...testPasswordConfirmation(password, confirmPassword),
        ...testBirthday(birthday)
    }
    console.log(errors)
    //separar resposta de sucesso e resposta de erro
    if (Object.keys(errors).length > 0) {
        return res.status(400).json({ message: "Os dados introduzidos não são válidos.", errors })
    }
    const result = {
        ...signupData, 
        birthday: new Date(birthday),
        creationDate: new Date(),
        lastLogin: new Date()
    }
    const user = await createUser(result)
    //console.log("USEEEEEEEEEEEER: " + Object.getOwnPropertyNames(user))
    if(user){
        createSession(user.insertedId).then(token => {
            res.status(200).json({token: token.insertedId})             
        })
    }
    //res.status(200).json({ message: "Utilizador Criado com Sucesso!", _id: id.insertedId })
})

aplication.post(`/login`, async (req, res) => {
    const { email, password }  = req.body

    const errors = {
        ...await emailPasswordLogin(email, password)
    }
    //separar resposta de sucesso e resposta de erro
    if (Object.keys(errors).length > 0) {
        //Erro quando há login
        return res.status(400).json({ message: "Os dados introduzidos não são válidos.", errors })
    }
    const user = await findUserByEmailPassword(email, password)

    if(user){
        createSession(user._id).then(token => {
            res.status(200).json({ token: token.insertedId })         
        })
    }
})

aplication.get("/get-user", authenticateNULL, (req, res) => {
    const user = req.user
    res.status(200).json(user)
})

aplication.get("/list", authenticate, async (req, res) => {
    const list = await findList()
    res.status(200).json(list)
})

aplication.get("/list/progress/:id", authenticate, async (req, res) => {
    const id = req.params.id
    const progress = await findProgressById(id)
    res.status(200).json(progress)
})

aplication.get("/catalog", authenticateNULL, async (req, res) => {
    const catalog = await findAllContent()
    res.status(200).json(catalog)
})

aplication.get("/catalog/content/:id", authenticateNULL, async (req, res) => {
    const id = req.params.id
    const content = await findContentById(id)
    res.status(200).json(content)
})

aplication.post("/catalog/content/:id", authenticateNULL, async (req, res) => {
    const id = req.params.id
    //console.log(req.body)
    const { userId, contentId } = req.body

    const progressInsert = {
        userId: userId,
        contentId: contentId,
        creationDate: new Date(),
        lastLogin: new Date()
    }
    const progress = await createProgress(progressInsert)
    const list = await findListByUserId(userId)
    if(list){
        updateListByUserId(userId, {
            progresses: "..."
        }).then(list => {
            res.status(200).json(list)         
        })
    } else{
        const listInsert = {
            progresses: [
                {progressID: progress.insertedId}
            ]
        }
        createList(listInsert).then(list => {
            res.status(200).json(list)         
        })
    }
    res.sendStatus(200)
})

async function authenticateNULL(req, res, next) {
    const gotToken = req.headers.authenticate//é o token que vem do frontend
    //console.log("CATALOG TOKEN: " + typeof gotToken)
    if (gotToken !== "null" && gotToken !== undefined) {
        const result = await findToken(gotToken) //verifica se o token existe na sessao
        //console.log("RESULT: " + result.userId)
        if (!result) return res.sendStatus(404) //se nao exister, xau
        const user = await findUserId(result.userId) //se existir, obtermos o utilizador 
        //console.log(user)
        req.user = user //e guardamos no pedido
        // salta para o proxim0o
    }
    next()
}

async function authenticate(req, res, next) {
    const gotToken = req.headers.authenticate //é o token que vem do frontend
    //console.log("TOKENNNNNN: " + gotToken)
    if (!gotToken) return res.sendStatus(404)
    const result = await findToken(gotToken) //verifica se o token existe na sessao
    //console.log("RESULT: " + result.userId)
    if (!result) return res.sendStatus(404) //se nao exister, xau
    const user = await findUserId(result.userId) //se existir, obtermos o utilizador 
    //console.log(user)
    req.user = user //e guardamos no pedido
    next() // salta para o proxim0o
}

// Export
module.exports = {
    aplication,
    api
}