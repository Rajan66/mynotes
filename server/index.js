const express = require("express")
const dotenv = require("dotenv")

const app = express()

// Middleware that helps parse json bodies in the request object
app.use(express.json())

const PORT = process.env.PORT || 5000

app.use('/', (req, res) => {
    res.send('Server is running')
})

app.listen(PORT, () => console.log(`Server is running on port : ${PORT}`))