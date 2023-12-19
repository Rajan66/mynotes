import React, { useState, useEffect } from 'react'
// import notes from '../assets/data'
import ListItem from '../components/ListItem'
import AddButton from '../components/AddButton'

const NotesListPage = () => {
    let [notes, setNotes] = useState([])

    useEffect(() => {
        getNotes()
    }, [])

    let getNotes = async () => {
        try {
            let response = await fetch('http://localhost:5000/notes');
            let data = await response.json();
            setNotes(data);
        } catch (error) {
            console.error('Error fetching data:', error);
        }
    }

    return (
        <div className='notes'>
            <div className='notes-list'>
                <div className='notes-header'>
                    <h2 className='notes-title'>&#9782; Notes</h2>
                    <p className='notes-count'>{notes.length}</p>
                </div>

                {notes.map((note, index) => (

                    <ListItem key={index} note={note} />

                ))}
            </div>
            <AddButton />
        </div>
    )
}

export default NotesListPage