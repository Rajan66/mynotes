const express = require("express")
const dotenv = require("dotenv")

const app = express()



app.use(express.json())

PORT = 5000

app.use('/', (req, res) => {
    res.send('Server is running')
})

app.listen(PORT, () => console.log(`Server is running on port : ${PORT}`))