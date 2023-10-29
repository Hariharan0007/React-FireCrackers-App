import { configureStore } from "@reduxjs/toolkit";
import crackerReducer from '../features/crackers/CrackerSlices';

export const store = configureStore({
    reducer:{
        cracker: crackerReducer
    }
})