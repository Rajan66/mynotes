const express = require("express")
const dotenv = require("dotenv")
const bodyParser = require("body-parser")
const cors = require("cors")
const db = require("./models")
const notesRoutes = require("./routes/notes")

const app = express()
dotenv.config
// Middleware that helps parse json bodies in the request object
app.use(cors())
app.use(bodyParser.json({ limit: "30mb", extended: true }));


const PORT = process.env.PORT || 5000
app.use('/notes', notesRoutes)

app.use('/', (req, res) => {
    res.send('Server is running')
})

db.sequelize.sync()
    .then((req) => {
        app.listen(PORT, () => console.log(`Server is running on port : ${PORT}`))
    })
    .catch((error) => console.log(error))
