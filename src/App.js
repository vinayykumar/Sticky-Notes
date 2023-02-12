import React from "react";
// import ReactDOM from "react-dom";
import Header from "./Header";
import Footer from "./Footer";
import Notes from "./notes.js";
import Cont from "./Notes.jsx"
import Content from "./Content"; 



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
  return <div>  
      <Header/>
      <div className="Stickynotes">{Notes.map(createNote)}</div>
      <Cont/>
      <Footer/> 
  </div>
}

export default App;