import { createSlice } from "@reduxjs/toolkit";

const initialState = {
    status: false,
    userDate: null
}

const authSlice = createSlice({
    name: 'auth',
    initialState,
    reducers: {
        login: (state, action) => {
            state.status = true;
            state.userData = action.payload.userDate;
        },
        logout: (state) => {
            state.status = false
            state.userDate = null
        }
    }
})

export const {login, logout} = authSlice.actions;     // there login & logout methods are we export as actions for using in components

export default authSlice.reducer;