import React from "react";
import Learner from "./student";
import { useState } from "react";
// import Child from "./Child"

const App = () =>{

  const [count, setCount] = useState(0);

  return (

    <div>
      <p>Value of Count is: {count}</p>
      <button onClick={()=>{setCount(count+1)}}>Increase</button>
    <Learner Myname="Vikas" age="18" salary="1234235" address="palam"/>
    <Learner Myname="krishan" age="34" salary="435435346" address="Delhi" />
    <Learner Myname="Sahil" age="41" salary="5346" address="Delhi-NCR" />
    <Learner Myname="Vinay" age="24" salary="9867346" address="Gurugram" />

  </div>
  )
}

export default App;