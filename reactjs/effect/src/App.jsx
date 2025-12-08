import React, { useEffect } from 'react'

const App = () => {
  useEffect(()=>{
    async function datafetch(){

      const response = await fetch("https://dummyjson.com/products");
      const data= await response.json();
      console.log(data);
    }
    datafetch();
  },[URL])
  return (
    <div>
      App
    </div>
  )
}

export default App
