import { useState } from "react";
import NoteContext from "./NoteContext";
const NoteState=(props)=>{
    const s1={
        "name": "harry",
        "class": "5b"
    }
    const [state, setState] = useState(s1);
    const update=()=>{
        setTimeout=()=>{
            setState({
                "name":"Larry",
                "class": " 10b"
            },1000)
        }
    }
    // here in value modern js is used which wraps the object instead of writing {state:state, update:update}
    return (<NoteContext.Provider value={{state, update}}>  
        {props.children}
    </NoteContext.Provider>)
}
export default NoteState;