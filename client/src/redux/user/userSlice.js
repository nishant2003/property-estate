import { createSlice } from "@reduxjs/toolkit";
import { errorHandler } from "../../../../api/utils/error";
import { sign } from "jsonwebtoken";

const initialState = {
<<<<<<< HEAD
    currentUser: null,
    error: null,
    loading: false,
};

const userSlice = createSlice({
    name: 'user',
    initialState,
    reducers: {
        signInStart: (state) => {
            state.loading = true;
        },
        signInSuccess: (state, action) => {
=======
    currentUser : null,
    error: null,
    loading:false,
};

const userSlice = createSlice({
    name:'user',
    initialState,
    reducers:{
        signInStart:(state)=>{
            state.loading = true;
        },
        signInSuccess:(state,action)=>{
>>>>>>> 72cac592f780457b4ab8224889ad75c4c41ee0c5
            state.currentUser = action.payload;
            state.loading = false;
            state.error = null;
        },
<<<<<<< HEAD
        signInFailure: (state, action) => {
=======
        signInFailure:(state,action)=>{
>>>>>>> 72cac592f780457b4ab8224889ad75c4c41ee0c5
            state.error = action.payload;
            state.loading = false;
        },
    }
})

<<<<<<< HEAD
export const { signInStart, signInSuccess, signInFailure } = userSlice.actions;
=======
export const {signInStart,signInSuccess,signInFailure} = userSlice.actions;
>>>>>>> 72cac592f780457b4ab8224889ad75c4c41ee0c5
export default userSlice.reducer;
// export default userReducer;