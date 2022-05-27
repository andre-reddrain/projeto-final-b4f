const express = require("express")
const {
    testEmail,
    testUsername,
    testPassword,
    testPasswordConfirmation,
    testBirthday,
    emailPasswordLogin
} = require("./auth");
const aplication = express.Router()
const api = express.Router()
const {
    createUser,
    findUserByEmailPassword
} = require("./user")

aplication.use(express.json())
aplication.post(`/signup`, async (req, res) => {
    const {
        passwordConfirmation,
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
        ...testPasswordConfirmation(password, passwordConfirmation),
        ...testBirthday(birthday)
    }
    //separar resposta de sucesso e resposta de erro
    if (Object.keys(errors).length > 0) {
        return res.status(400).json({ message: "Os dados introduzidos não são válidos.", errors })
    }
    //const id = await createUser(signupData)
    const id = await createUser(signupData)
    res.status(200).json({ message: "Utilizador Criado com Sucesso!", _id: id.insertedId })
})

aplication.post(`/login`, async (req, res) => {
    const { email, password }  = req.body

    const errors = {
        ...await emailPasswordLogin(email, password)
    }
    //separar resposta de sucesso e resposta de erro
    if (Object.keys(errors).length > 0) {
        return res.status(400).json({ message: "Os dados introduzidos não são válidos.", errors })
    }
    const user = await findUserByEmailPassword(email, password)
    //LOGIN FEITO
    //res.status(200).json({ message: "Utilizador Criado com Sucesso!" })
})

// Export
module.exports = {
    aplication,
    api
}