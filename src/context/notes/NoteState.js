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
    // here in value modern js is used which wraps the object instead of writing {state:state, update:update}
    return (<NoteContext.Provider value={{notes,setNotes}}>  
        {props.children}
    </NoteContext.Provider>)
}
export default NoteState;