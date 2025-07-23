import { createSlice } from "@reduxjs/toolkit";

const todoSlice=createSlice({
    name:"todo",
    initialState:{
        task:[]
    },
    reducers:{
        addTask:(state,actions)=>{
            state.task.push(actions.payload)
        },
        removeTask:(state,actions)=>{
            state.task=state.task.filter(key=>key.id!=actions.payload.id)
        }
    }
})
export const{addTask,removeTask}=todoSlice.actions;
export default todoSlice.reducer;