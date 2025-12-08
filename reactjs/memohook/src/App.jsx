import React from 'react'
import { useState, useMemo } from 'react'
import Child from './Child';
import { useCallback } from 'react';

const App = () => {
  const [count, setCount] = useState(0);
  const [count1,setCount1] = useState(0);
function sum(){
  console.log("function called")
  let sum = 0;
  for(let i=0; i<1000000000; i++){
    sum+=i;
  }
  return sum;
}
// function sayHi(){
//   console.log("HI");
// }
const sayHi = useCallback(()=>{
  console.log("SayHi");
},[])
const res = useMemo(()=>sum(),[])
  return (
    <div>
      <p>value of sum is: {res}</p>
      <p>Count is: {count}</p>
      <button onClick={()=>{setCount(count+1)}}>Increase</button>
      <br /><br />
      <p>Value of Count1 : {count1}</p>
      <button onClick={()=>{setCount1(count1+1)}}>Increase1</button>
      <br /><br />
      <Child count1={count1} sayHi={sayHi}/>
    </div>
  )
}

export default App
