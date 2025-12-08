 import { createSlice, nanoid } from '@reduxjs/toolkit'

 const  todoSlice = craeteSlcie({
    name: "todos",
    initialState: [],
    reducers: {
        addtodo: (state,action)=>{
            const newTodo ={
                id: nanoid(),
                text: action.payload.text,
                conpleted: false,
            };
            state.push(newTodo);
        },
    },
 });

 export const {addtodo} = todoSlice.actions;
 export default todoSlice.reducer;