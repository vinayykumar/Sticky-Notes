import React from "react";  

function Content(props) {
    return (
      <div className="card">
        <div>
          <h2>{props.title}</h2>
          <p>{props.content}</p>
        </div>
      </div>
    );
  }
  
  export default Content;
  