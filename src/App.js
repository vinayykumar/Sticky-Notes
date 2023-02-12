import React, { useState } from "react";
// import ReactDOM from "react-dom";
import Header from "./Header";
import Footer from "./Footer";
// import Notes from "./notes.js";
// import Cont from "./Notes.jsx"
import Content from "./Content"; 
import CreateNote from "./CreateNote";


function createNote(newnote){
  return (
    <Content
    key={newnote.id}
    title={newnote.title}
    content={newnote.content}
    />
  );
}

function App(){

    const [note, setNote]= useState([]);

    function addNote(newNote){
      setNote(prevNotes =>{
        return [...prevNotes, newNote];
      });
    }

  return <div>  
      <Header/>
      <CreateNote 
      onAdd={addNote}/>
      {/* <div className="Stickynotes">{Notes.map(createNote)}</div> */}
      {/* <Cont/> */}
      <div className="Stickynotes">{note.map(noteItem => {
        return <Content
        title = {noteItem.title}
        content={noteItem.content}
        />
      })}</div>
      <Footer/> 
  </div>
}

export default App;