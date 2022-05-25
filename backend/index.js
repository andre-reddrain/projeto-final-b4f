const { } = require("./db")

const express = require('express')
const app = express()
app.use(express.json())
const port = process.env.PORT ?? 3090

app.listen(port, () => {
    console.log(`À escuta em http://localhost:${port}`)
})