import React from 'react'
import { useContext,useState } from 'react'
import noteContext from '../context/notes/NoteContext';
const AddNote = (props) => {
    const context=useContext(noteContext);
    const { addNote}=context;
    const [note, setnote] = useState({title:"", description:"", tag:""})
    const handleCLick=(e)=>{
        e.preventDefault();
        addNote(note.title, note.description, note.tag);
        setnote({title:"", description:"", tag:""})
        props.showAlert("added successfully ", "success")
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
                        <input type="text" className="form-control" value={note.title} id="title" name="title" aria-describedby="emailHelp" onChange={onChange} minLength={5}
                    required/>
                        
                    </div>
                    <div className="mb-3">
                        <label htmlFor="desc" className="form-label">Description</label>
                        <input type="text" className="form-control" value={note.description} name="description" id="description"onChange={onChange} minLength={5}
                    required />
                    </div>
                    <div className="mb-3">
                        <label htmlFor="tag" className="form-label">Tag</label>
                        <input type="text" className="form-control" value={note.tag} name="tag" id="tag"onChange={onChange} minLength={5}
                    required/>
                    </div>
                     
                    <button disabled={note.title.length<5 || note.description.length<5} type="submit" className="btn btn-primary" onClick={handleCLick}>Add a Note</button>
                    </form>    
        </div>
    )
}

export default AddNote
