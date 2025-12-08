import React from 'react'
import { postman } from './App'
import { useContext } from 'react'

const Child3 = () => {
  const data = useContext(postman)
  return (
    <div>
      Child3
      <h1>{data.fname}</h1>
      <h2>{data.lname}</h2>
      <h3>{data.age}</h3>
    </div>
  )
}

export default Child3
