import React from 'react'
import { useState, useEffect } from 'react'

const App = () => {
  const [data,setData] = useState();
  useEffect(()=>{
    const fetchData = async ()=>{
      try{
        const response= await fetch("https://dummyjson.com/products");
        const data = await response.json();
        setData(data);
        console.log(data);
      }catch(err){
        console.log(err);
      };
      return [data];
    };
    fetchData();
  })
  return (
    <div>
      
    </div>
  )
}

export default App
