import { useState } from "react";
import NoteContext from "./NoteContext";
const NoteState=(props)=>{
    const notesInitial=[
        {
          "_id": "61d5d05b5b2ab47792eb209b",
          "user": "61d407d85076e4f2ffcb4166",
          "title": "My title",
          "description": " Please wake up early",
          "tag": "personal",
          "date": "2022-01-05T17:07:39.522Z",
          "__v": 0
        },
        {
          "_id": "61d5d05b5b2ab47792eb209b",
          "user": "61d407d85076e4f2ffcb4166",
          "title": "My title",
          "description": " Please wake up early",
          "tag": "personal",
          "date": "2022-01-05T17:07:39.522Z",
          "__v": 0
        },
        {
          "_id": "61d5d05b5b2ab47792eb209b",
          "user": "61d407d85076e4f2ffcb4166",
          "title": "My title",
          "description": " Please wake up early",
          "tag": "personal",
          "date": "2022-01-05T17:07:39.522Z",
          "__v": 0
        },
        {
          "_id": "61d5d05b5b2ab47792eb209b",
          "user": "61d407d85076e4f2ffcb4166",
          "title": "My title",
          "description": " Please wake up early",
          "tag": "personal",
          "date": "2022-01-05T17:07:39.522Z",
          "__v": 0
        },
        {
          "_id": "61d5d05b5b2ab47792eb209b",
          "user": "61d407d85076e4f2ffcb4166",
          "title": "My title",
          "description": " Please wake up early",
          "tag": "personal",
          "date": "2022-01-05T17:07:39.522Z",
          "__v": 0
        },
      ]
      
      const [notes, setNotes] = useState(notesInitial)
      //add a note
      const addNote=(title, description, tag)=>{
        //todo api call
        const note={
          "_id": "61d5d05b5b2ab47792ebdfd209b",
          "user": "61d407d85076e4f2ffcb4166",
          "title":title,
          "description": description,
          "tag": tag,
          "date": "2022-01-05T17:07:39.522Z",
          "__v": 0
        };
        setNotes(notes.concat(note))
      }
      // delete a node
      const deleteNote=(_id)=>{
        console.log(`deleting the node with id ${_id}`)
        const newnotes=notes.filter((note)=>{return notes._id==_id})
        setNotes(newnotes)
      }
      // edit a note
      const editNote=(id, title, description, tag)=>{

      }


    // here in value modern js is used which wraps the object instead of writing {state:state, update:update}
      
      
        return (<NoteContext.Provider value={{notes,addNote,deleteNote,editNote}}>  
        {props.children}
    </NoteContext.Provider>)
}
export default NoteState;