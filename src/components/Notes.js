import React, { useEffect, useRef , useState} from "react";
import { useContext } from "react";
import noteContext from "../context/notes/NoteContext";
import NoteItem from "./NoteItem";
import AddNote from "./AddNote";
const Notes = (props) => {
  const context = useContext(noteContext);
  const { notes, getNotes, editNote } = context;
  useEffect(() => {
    getNotes();
    //eslint-disable-next-line
  }, []);
  const ref = useRef(null);
  const refClose = useRef(null);
  const [note, setnote] = useState({id:"",etitle:"", edescription:"", etag:"dafault"})
  const updateNote = (currentNote) => {
    ref.current.click();
    setnote({id:currentNote._id ,etitle:currentNote.title,edescription:currentNote.description, etag:currentNote.tag});
    
  };
  const handleClick=(e)=>{
    editNote(note.id, note.etitle, note.edescription,note.etag )
    console.log("updating the note", note);
    props.showAlert("deleted successfully ", "success")
    

    refClose.current.click();
    // addNote(note.title, note.description, note.tag);
}
const onChange=(e)=>{
    setnote({...note,[e.target.name]:e.target.value})
}

  return (
    <>
      <AddNote showAlert={props.showAlert}/>
      <button
        ref={ref}
        type="button"
        className="btn btn-primary d-none"
        data-bs-toggle="modal"
        data-bs-target="#exampleModal"
      >
        Launch demo modal
      </button>

      <div
        className="modal fade"
        id="exampleModal"
        tabIndex="-1"
        role="dialog"
        aria-labelledby="exampleModalLabel"
        aria-hidden="true"
      >
        <div className="modal-dialog" role="document">
          <div className="modal-content">
            <div className="modal-header">
              <h5 className="modal-title" id="exampleModalLabel">
                Edit Note
              </h5>
              <button
                type="button"
                className="close"
                data-bs-dismiss="modal"
                aria-label="Close"
              >
                <span aria-hidden="true">&times;</span>
              </button>
            </div>
            <div className="modal-body">
              <form>
                <div className="mb-3">
                  <label htmlFor="exampleInputEmail1" className="form-label">
                    Title
                  </label>
                  <input
                    type="text"
                    value={note.etitle}
                    className="form-control"
                    id="etitle"
                    name="etitle"
                    aria-describedby="emailHelp"
                    onChange={onChange}
                    minLength={5}
                    required
                  />
                </div>
                <div className="mb-3">
                  <label htmlFor="desc" className="form-label">
                    Description
                  </label>
                  <input
                  value={note.edescription}
                    type="text"
                    className="form-control"
                    name="edescription"
                    id="edescription"
                    onChange={onChange}
                    minLength={5}
                    required
                  />
                </div>
                <div className="mb-3">
                  <label htmlFor="tag" className="form-label">
                    Tag
                  </label>
                  <input
                    value={note.etag}
                    type="text"
                    className="form-control"
                    name="etag"
                    id="etag"
                    onChange={onChange}
                    minLength={5}
                    required
                  />
                </div>

                
              </form>
            </div>
            <div className="modal-footer">
              <button
                ref={refClose}
                type="button"
                className="btn btn-secondary"
                data-bs-dismiss="modal"
              >
                Close
              </button>
              <button disabled={note.etitle.length<5 || note.edescription.length<5} type="button" onClick={handleClick} className="btn btn-primary">
                Update note
              </button>
            </div>
          </div>
        </div>
      </div>
      <div className="container row my-3">
        <h1>Your notes</h1>
        <div className="container">
        {notes.length===0 && '  No notes to display'  }
        </div>
        {notes.map((notes) => {
          return (
            <NoteItem key={notes._id} updateNote={updateNote} note={notes} showAlert={props.showAlert}/>
          );
        })}
      </div>
    </>
  );
};

export default Notes;
