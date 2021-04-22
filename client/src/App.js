import React, { useState } from "react";
import "./App.css"

function App() {

  return (
    
      <div className="App"> <h4>
        CRUD
      </h4>
      <div className="form">
        
        <label> name</label>
        <input type="text" name="name"/>
        <label> complaint</label>
        <input type="text" name="complaint"/>

        <button>Submit</button>
      </div>
        
      </div>

  );
}

export default App;
