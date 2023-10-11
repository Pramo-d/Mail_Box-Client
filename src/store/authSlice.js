import { createSlice } from "@reduxjs/toolkit";

const initialToken =localStorage.getItem('idToken');
 const authSlice=createSlice({
    name:'auth',
    initialState:  {
        idToken:initialToken,
        isLoggedin:!!initialToken
    },
    reducers:{
        login(state,action){
            state.idToken=action.payload;
        state.isLoggedin=true;
        },
        logout(state,action){
        state.idToken=action.payload
        state.isLoggedin=false;
        }
    }
})
export const  authAction=authSlice.actions;
export default authSlice;