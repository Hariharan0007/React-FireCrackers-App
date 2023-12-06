import { createSlice } from "@reduxjs/toolkit";


const initialState = {
    crackersList : [],
    totalPrice: 0
}

export const crackerSlice = createSlice({
    name : 'cracker',
    initialState,
    reducers:{
        addCrackerCheckOut:(state,actions) => {
            const { cracker_id,cracker_name, price_per_box, add, remove, drop } = actions.payload;
            const existingCracker = state.crackersList.find(items => items.id === cracker_id);
            if(existingCracker){
                if(add){
                    existingCracker.quantity += 1;
                    existingCracker.price += price_per_box;
                    state.totalPrice += price_per_box;
                }
                if(remove){
                    existingCracker.quantity -= 1;
                    existingCracker.price -= price_per_box;
                    state.totalPrice -= price_per_box;
                }
                if(drop){
                    state.totalPrice -= existingCracker.price;
                    state.crackersList = state.crackersList.filter(cracker => cracker.id !== cracker_id)
                }
            }
            else{
                const newCracker = {
                    id : cracker_id,
                    name : cracker_name,
                    price : price_per_box,
                    quantity : 1,
                }
                state.crackersList = [...state.crackersList,newCracker]
                state.totalPrice += price_per_box
                console.log(state.totalPrice);
            }
        },
        checkOut:(state,actions) => {
            state.crackersList = []
        }
    }
})

export const { addCrackerCheckOut, checkOut } = crackerSlice.actions;

export default crackerSlice.reducer;