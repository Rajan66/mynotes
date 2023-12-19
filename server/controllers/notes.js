const Notes = require('../models').Notes

const getNotes = async (req, res) => {
    try {
        const notes = await Notes.findAll()
        console.log(notes)
        res.status(200).json(notes)
    } catch (error) {
        res.status(404).json({ message: error.message })
    }
}

const createNote = async (req, res) => {
    const { id, body } = req.body
    try {
        const note = await Notes.create({ id, body })
        console.log(body)
        res.status(201).json(note)
    } catch (error) {
        res.status(404).json({ message: error.message })
    }
}

const deleteNote = async (req, res) => {
    const { id } = req.params
    try {
        const note = await Notes.findByPk(id)
        await note.destroy()
        res.status(200).json(`${id} successfully removed!`)
    } catch (error) {
        res.status(404).json({ message: error.message })
    }
}

const updateNote = async (req, res) => {
    const { id } = req.params
    const { body } = req.body
    try {
        const note = await Notes.findByPk(id)
        await note.update({ body: body })
        res.status(200).json(note)
    } catch (error) {
        res.status(404).json({ message: error.message })
    }
}



module.exports = {
    getNotes,
    createNote,
    deleteNote,
    updateNote
}