const express = require('express')
const app = express()
const port = process.env.PORT ?? 3090
const { aplication, api } = require("./routes")

app.use("/api", aplication)
app.use("/api-test", api)


app.listen(port, () => {
    console.log(`À escuta em http://localhost:${port}`)
})