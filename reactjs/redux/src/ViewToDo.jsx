import React from 'react'
import { useSelector } from 'react-redux';

const ViewToDo = () => {
    const todos = useSelector((state)=>state.todos);
  return (
    <div>
      
    </div>
  )
}

export default ViewToDo
