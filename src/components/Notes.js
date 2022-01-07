import React from 'react'
import { useContext } from 'react'
import noteContext from '../context/notes/NoteContext';
import NoteItem from './NoteItem';
import AddNote from './AddNote';
const Notes = () => {
    const context=useContext(noteContext);
    const {notes}=context;
    return (<>
        <AddNote />
        <div className='row my-3' >
             <h1>Your notes</h1>
            {notes.map((notes)=>{return <NoteItem key={notes._id} note={notes}/>})}
        </div>
        </>)
}

export default Notes
