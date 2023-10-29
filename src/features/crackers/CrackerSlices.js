import { createSlice } from "@reduxjs/toolkit";
import { v4 as uid } from "uuid";

const initialState = {
    crackersList : [],
    totalPrice: 0
}

export const crackerSlice = createSlice({
    name : 'cracker',
    initialState,
    reducers:{
        addCrackerCheckOut:(state,actions) => {
            const { id, name, price, add, remove, drop } = actions.payload;
            const existingCracker = state.crackersList.find(items => items.name === name);
            if(existingCracker){
                if(add){
                    existingCracker.quantity += 1;
                    existingCracker.price += price;
                    state.totalPrice += price;
                    console.log(state.totalPrice);
                }
                if(remove){
                    existingCracker.quantity -= 1;
                    existingCracker.price -= price;
                    state.totalPrice -= price;
                }
                if(drop){
                    state.totalPrice -= existingCracker.price;
                    state.crackersList = state.crackersList.filter(cracker => cracker.name !== name)
                }
            }
            else{
                const newCracker = {
                    id:uid(),
                    name : name,
                    price : price,
                    quantity : 1,
                }
                state.crackersList = [...state.crackersList,newCracker]
                state.totalPrice += price
                console.log(state.totalPrice);
            }
        },
        checkOut:(state,actions) => {

        }
    }
})

export const { addCrackerCheckOut, checkOut } = crackerSlice.actions;

export default crackerSlice.reducer;