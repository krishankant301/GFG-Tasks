import React, { useEffect, useLayoutEffect } from 'react'
import {useState,useRef} from 'react';

const App = () => {
  const [count, setCount] = useState(0);
  const ref = useRef();
  const handleIncrement = ()=>{
    setCount(count+1);
    // ref.current = ref.current+1;
    // console.log(ref.current);
  }
  useEffect(()=>{
    ref.current.style.color="red";
    ref.current.style.backgroundColor="yellow";
  },[count]);

  // console.log(ref)
  return (
    <div>
      <p ref={ref}>Count is: {count}</p>
      {/* {ref.current.style.color="green"} */}
      {/* {(ref.current.style.backgroundColor="green")} */}
      <button  ref={ref} onClick={handleIncrement}>Increase</button>
    </div>
  )
}

export default App
