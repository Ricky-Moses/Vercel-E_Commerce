import { configureStore } from '@reduxjs/toolkit'
import authReducer from '../Context/Auth.js'

const Store = configureStore({
    reducer: {
        auth: authReducer
    }
})

export default Store