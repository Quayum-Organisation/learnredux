import  { createSlice } from "@reduxjs/toolkit";


export const CounterSlice=createSlice({
    name: "counters",
    initialState:{value:0},
    reducers:{
        increment:(state,action)=>{
            state.value++;
        },
        decrement:(state,action)=>{
            state.value--;
        },
        addNumber:(state,action)=>{
            state.value +=action.payload;
        }
    },
})

export const {increment,decrement,addNumber} = CounterSlice.actions;
export default CounterSlice.reducer;