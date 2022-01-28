import {createSlice} from "@reduxjs/toolkit";

const cartSlice = createSlice({
    name: 'cart',
    initialState: {
        itemsInCart:[],
        totalPrice: 0,
    },
    reducers:{
        setItemInCart: (state,action) => {

            state.itemsInCart.push(action.payload)
        },
        deleteItemFromCart:(state,action) =>{
            state.itemsInCart = state.itemsInCart.filter(elem => elem.id !== action.payload)
        },
        updateTotalPrice:(state,action) =>{
            state.totalPrice = state.totalPrice + action.payload;
        },
        updateSelect:(state,action) => {
            state.itemsInCart = state.itemsInCart.map(elem => elem.id === action.payload.id ?
                action.payload : elem )
        }
    }
});

export const {setItemInCart,deleteItemFromCart,updateTotalPrice,updateSelect} = cartSlice.actions;
export default cartSlice.reducer;
export const initialState = cartSlice.getInitialState;