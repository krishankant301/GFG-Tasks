import React from "react";
import { useState } from "react";

const App = () =>{
 
  const [count,setCount] = useState(0);
  let increment = () =>{
    setCount(count+1);
    console.log(count);
  };
  return (
    <div>
      <p> Value of a : {a}</p>
      <button onClick={increment}>Click</button>
    </div>
  );
};

export default App;