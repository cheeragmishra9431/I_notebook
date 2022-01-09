import { useState } from "react";
import NoteContext from "./NoteContext";
const NoteState = (props) => {
  const host = "http://localhost:5000";
  const notesInitial = [];

  const [notes, setNotes] = useState(notesInitial);
  //get all notes

  const getNotes = async () => {
    //todo api call
    const response = await fetch(`${host}/api/notes/fetchallnotes`, {
      method: "GET", // *GET, POST, PUT, DELETE, etc.

      headers: {
        "Content-Type": "application/json",
        "auth-token":
          "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJ1c2VyIjp7ImlkIjoiNjFkNDA3ZDg1MDc2ZTRmMmZmY2I0MTY2In0sImlhdCI6MTY0MTM5MTg5M30.ukfv0sxK4-x0bBOoDSmTjyN1mEY4OlqEFzPQ_1U9VGw",
        // 'Content-Type': 'application/x-www-form-urlencoded',
      },
    });
    const json = await response.json();
    console.log(json);
    setNotes(json);
  };

  //add a note
  const addNote = async (title, description, tag) => {
    //todo api call
    const response = await fetch(`${host}/api/notes/addnote`, {
      method: "POST", // *GET, POST, PUT, DELETE, etc.

      headers: {
        "Content-Type": "application/json",
        "auth-token":
          "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJ1c2VyIjp7ImlkIjoiNjFkNDA3ZDg1MDc2ZTRmMmZmY2I0MTY2In0sImlhdCI6MTY0MTM5MTg5M30.ukfv0sxK4-x0bBOoDSmTjyN1mEY4OlqEFzPQ_1U9VGw",
        // 'Content-Type': 'application/x-www-form-urlencoded',
      },
      body: JSON.stringify({ title, description, tag }), // body data type must match "Content-Type" header
    });
    const json=await response.json();
    console.log(json);
    // return response.json(); // parses JSON response into native JavaScript objects
    // const json=response.json();
    const note = {
      _id: "61d5d05b5b2ab47792ebdfd209b",
      user: "61d407d85076e4f2ffcb4166",
      title: title,
      description: description,
      tag: tag,
      date: "2022-01-05T17:07:39.522Z",
      __v: 0,
    };
    // setNotes(notes.concat(note));
  };
  // delete a node
  const deleteNote = async (id) => {
    //api call
    const response = await fetch(`${host}/api/notes/deletenote/${id}`, {
      method: "DELETE", // *GET, POST, PUT, DELETE, etc.

      headers: {
        "Content-Type": "application/json",
        "auth-token":
          "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJ1c2VyIjp7ImlkIjoiNjFkNDA3ZDg1MDc2ZTRmMmZmY2I0MTY2In0sImlhdCI6MTY0MTM5MTg5M30.ukfv0sxK4-x0bBOoDSmTjyN1mEY4OlqEFzPQ_1U9VGw",
        // 'Content-Type': 'application/x-www-form-urlencoded',
      },
      
    });
    // return response.json(); // parses JSON response into native JavaScript objects
    const json =await response.json();
    console.log(json);

    console.log(`deleting the node with id ${id}`);
    const newnotes = notes.filter((notes1) => {
      return notes1._id !== id;
    });
    setNotes(newnotes);
  };
  // edit a note
  const editNote = async (id, title, description, tag) => {
    //API call
    const response = await fetch(`${host}/api/notes/update/${id}`, {
      method: "PUT", // *GET, POST, PUT, DELETE, etc.

      headers: {
        "Content-Type": "application/json",
        "auth-token":
          "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJ1c2VyIjp7ImlkIjoiNjFkNDA3ZDg1MDc2ZTRmMmZmY2I0MTY2In0sImlhdCI6MTY0MTM5MTg5M30.ukfv0sxK4-x0bBOoDSmTjyN1mEY4OlqEFzPQ_1U9VGw",
        // 'Content-Type': 'application/x-www-form-urlencoded',
      },
      body: JSON.stringify({ title, description, tag }), // body data type must match "Content-Type" header
    });
    // return response.json(); // parses JSON response into native JavaScript objects
    const json =await  response.json();
    console.log(json);
    let newNotes=JSON.parse(JSON.stringify(notes));
    //Logic to edit client
    for (let index = 0; index < notes.length; index++) {
      const element = newNotes[index];
      if (element._id === id) {
        newNotes[index].title = title;
        newNotes[index].tag = tag;
        newNotes[index].description = description;
        break;
      }
    }
    setNotes(newNotes);
  };

  // here in value modern js is used which wraps the object instead of writing {state:state, update:update}

  return (
    <NoteContext.Provider
      value={{ notes, addNote, deleteNote, editNote, getNotes }}
    >
      {props.children}
    </NoteContext.Provider>
  );
};
export default NoteState;
