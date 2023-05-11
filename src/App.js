import { useState } from "react";
import "./App.css";

function App() {

  const [data, setData] = useState(0);

  const increment = () =>{
    setData(data + 1);
  }

  const decrement = () =>{
    setData(data - 1);
  }

  return (
    <div className="d-flex justify-content-center">
      <div class="card mt-5" style={{width: "18rem"}}>
        <div class="card-body">
          <h5 class="card-title text-center">{data}</h5>
            <hr/>
          <div className="mt-5">
            <button class="btn btn-danger" onClick={decrement}>Decrement</button>
            <button class="btn btn-primary ms-5" onClick={increment}>Increment</button>
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
