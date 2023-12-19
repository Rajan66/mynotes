const express = require("express")
const { getNotes, createNote, deleteNote } = require("../controllers/notes")

const router = express.Router()

router.use((req, res, next) => {
    console.log('Time: ', Date.now())
    next()
})

router.get('/', getNotes)
router.post('/', createNote)
router.delete('/:id', deleteNote)


module.exports = router;
