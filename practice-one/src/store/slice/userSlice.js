import { createSlice } from "@reduxjs/toolkit";

const userSlice = createSlice({
    name: "users",
    initialState: [],
    reducers:{
        addUser(state, action){
            console.log(action.payload)
            state.push(action.payload)
        },
        removeUser(state,  action){
            console.log(action.payload)
            // state.value -= action.payload
            state.splice(action.payload, 1)
        },
        deleteAllUsers(state, action){
            console.log(action.payload)
            // state.remove(action.payload)
        },
    },
});

// console.log(userSlice);

export const { addUser, removeUser, deleteAllUsers } = userSlice.actions;
export default userSlice;