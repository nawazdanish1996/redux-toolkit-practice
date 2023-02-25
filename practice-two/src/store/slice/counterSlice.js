import {createSlice} from "@reduxjs/toolkit";

const initialState = {
    value: 1,
}

const counterSlice = createSlice({
    name: 'counter',
    initialState,
    reducers:{
        increment:(state, action)=>{
            state.value += 1
        },
        decrement:(state, action)=>{
            state.value -= 1
        }
    }

})

export const { increment, decrement } = counterSlice.actions;

export default counterSlice.reducer;