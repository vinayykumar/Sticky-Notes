import React from "react";
// import ReactDOM from "react-dom";
import Header from "./Header";
import Footer from "./Footer";
import Notes from "./notes";
import Content from "../src/Content";



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
      <div>{Notes.map(createNote)}</div>
      <Notes/>
      <Footer/> 
  </div>
}

export default App;