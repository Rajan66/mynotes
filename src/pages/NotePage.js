import React from 'react'
import notes from '../assets/data'
import { useParams } from 'react-router-dom'
import { Link } from 'react-router-dom'

const NotePage = ({ match }) => {
    let { id } = useParams()
    console.log(id)
    let note = notes.find(note => note.id === Number(id))

    return (
        <div className='note'>
            <div className='note-header'>
                <h3>
                    <Link>
                    </Link>
                </h3>
            </div>
            <p>{note?.body}</p>
        </div>
    )
}

export default NotePage