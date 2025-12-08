import React from 'react'
import Child1 from './Child1'
import { createContext } from 'react'

export const postman= createContext();

const App = () => {
  let data = {
    fname: "Vikas",
    lname: "thakur",
    age: 25,
  };
  return (
    <postman.Provider value={data}>

    <div>
      <Child1 />
    </div>
    </postman.Provider>
  )
}

export default App;