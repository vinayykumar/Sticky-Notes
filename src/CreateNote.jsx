import React, { useState } from "react"

function CreateNote(props){
    const [note, setNote] = useState({
        title : "",
        content : ""
    });
    function handleChange(event){   
            const {name , value} = event.target;
            setNote(prevNote => {
                return {
                    ...prevNote,
                    [name] : value
                };
            });
    }

    function submitNote(event){
        props.onAdd(note);
        event.preventDefault();
    }

    return(
        <div className="CreateNote">
            <form>
                <input name="title" placeholder="Title" onChange={handleChange} value={note.title}/>
            <textarea name="content" placeholder="Stick some Notes" rows="3" onChange={handleChange} value={note.content}></textarea>
            <button onClick={submitNote}>Add</button>
            </form>
        </div>
    )
}

export default CreateNote;