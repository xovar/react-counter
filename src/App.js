import { useState } from "react";
import "./App.css";

function App() {

  return (
    <div className="d-flex justify-content-center">
      <div class="card mt-5" style={{width: "18rem"}}>
        <div class="card-body">
          <h5 class="card-title text-center">0</h5>
            <hr/>
          <div className="mt-5">
            <button class="btn btn-danger">Decrement</button>
            <button class="btn btn-primary ms-5">Increment</button>
          </div>
        </div>
      </div>
    </div>
  );
}

export default App;

/* 
 . component
 . props
 . notun ekta react app init
*/
