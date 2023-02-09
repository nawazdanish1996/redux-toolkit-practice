import { createSlice } from "@reduxjs/toolkit";
import { deleteAllUsers } from "../actions";

const userSlice = createSlice({
    name: "users",
    initialState: [],
    reducers:{
        addUser(state, action){
            // console.log(action.payload);
            state.push(action.payload);
        },
        removeUser(state,  action){
            // console.log(action.payload)
            // let userIndexNum =  state.indexOf(action.payload);
            // state.splice(userIndexNum, 1)
            state.splice(action.payload, 1);
        },
        // deleteAllUsers(state, action){
        //     // console.log("Deleted All the Users")
        //     // console.log(action.payload)
        //     return state =  [];
        // },
    },

    // Delete All users using extraReducer in Redux-toolkit
    extraReducers(builder){
        builder.addCase(deleteAllUsers, ()=>{
            return [];
        })
    }
});

// console.log(userSlice);

export const { addUser, removeUser } = userSlice.actions;
export default userSlice;