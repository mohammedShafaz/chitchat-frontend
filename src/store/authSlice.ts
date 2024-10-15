import { createSlice, PayloadAction } from "@reduxjs/toolkit";
import { jwtDecode } from "jwt-decode";

interface User{
    id: string;
    email:string;
    username:string;
    firstName:string;
    lastName:string;
}
interface AuthState {
    token: string | null;
    isAuthenticated: boolean;
    user:User|null;
}


const initialState:AuthState={
token:localStorage.getItem('token'),
isAuthenticated:!!localStorage.getItem('token'),
user:localStorage.getItem("token") ? jwtDecode<User>(localStorage.getItem("token")!) : null
};

const authSlice= createSlice({
    name:'auth',
    initialState,
    reducers:{
        login:(state,action:PayloadAction<string>)=>{
            state.token=action.payload;
            state.isAuthenticated=true;
            state.user=jwtDecode<User>(action.payload);
            localStorage.setItem('token',action.payload)
        },
        logout:(state)=>{
            console.log("Logging out ",state);
            
            state.token=null;
            state.isAuthenticated=false;
            state.user=null;
            localStorage.removeItem('token');
        },
    },
});

export const{login, logout}=authSlice.actions;

export default authSlice.reducer;