import React from 'react'

const Notes = () => {
    return (
        <div className='container my-3' >
             <h1>Your notes</h1>
            {notes.map((notes)=>{return notes.title})}
        </div>
    )
}

export default Notes
