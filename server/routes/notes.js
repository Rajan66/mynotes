const express = require("express")
const { getNotes, createNote, deleteNote, updateNote } = require("../controllers/notes")

const router = express.Router()

router.use((req, res, next) => {
    console.log('Time: ', Date.now())
    next()
})

router.get('/', getNotes)
router.post('/', createNote)
router.delete('/:id', deleteNote)
router.patch('/:id', updateNote)


module.exports = router;
