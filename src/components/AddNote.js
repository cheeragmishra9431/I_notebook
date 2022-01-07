import React from 'react'
import { useContext,useState } from 'react'
import noteContext from '../context/notes/NoteContext';
const AddNote = () => {
    const context=useContext(noteContext);
    const { addNote}=context;
    const [note, setnote] = useState({title:"", description:"", tag:"dafault"})
    const handleCLick=(e)=>{
        e.preventDefault();
        addNote(note.title, note.description, note.tag);
    }
    const onChange=(e)=>{
        setnote({...note,[e.target.name]:e.target.value})
    }

    return (
        <div className="container my-3">
            <h1>Add a note</h1>
                <form>
                    <div className="mb-3">
                        <label htmlFor="exampleInputEmail1" className="form-label">Title</label>
                        <input type="text" className="form-control" id="title" name="title" aria-describedby="emailHelp" onChange={onChange}/>
                        
                    </div>
                    <div className="mb-3">
                        <label htmlFor="desc" className="form-label">Description</label>
                        <input type="text" className="form-control" name="description" id="description"onChange={onChange} />
                    </div>
                    <div className="mb-3 form-check">
                        <input type="checkbox" className="form-check-input" id="exampleCheck1"/>
                        <label className="form-check-label" htmlFor="exampleCheck1">Check me out</label>
                    </div>
                    <button type="submit" className="btn btn-primary" onClick={handleCLick}>Add a Note</button>
                    </form>    
        </div>
    )
}

export default AddNote
