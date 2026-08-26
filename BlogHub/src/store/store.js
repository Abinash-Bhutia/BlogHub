import {configureStore} from "@reduxjs/toolkit"
import authReducer from './authSlice'

const store = configureStore({
    reducer: {
        auth: authReducer
        // Todo: add more slice for posts
    }
})

export default store;