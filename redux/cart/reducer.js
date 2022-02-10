import {createSlice} from "@reduxjs/toolkit";
import {getCartFromLocaleStorage} from "../../sources/utils/helpers";
const savedCart = getCartFromLocaleStorage();
const cartSlice = createSlice({
    name: 'cart',
    initialState: {
        itemsInCart:savedCart,
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
        },
        updateCount:(state,action) => {
            state.itemsInCart = state.itemsInCart.map(elem => elem.id === action.payload.id ?
                action.payload : elem )
        } ,
        updateTime:(state,action) => {
            state.itemsInCart = state.itemsInCart.map(elem => elem.id === action.payload.id ?
                action.payload : elem )
        },
        saveOnLocalStorage:(state,action) =>{
            state.itemsInCart = state.itemsInCart = savedCart;
        }


    }
});

export const {setItemInCart,deleteItemFromCart,updateTotalPrice,updateSelect,updateCount,updateTime,saveOnLocalStorage} = cartSlice.actions;
export default cartSlice.reducer;
export const initialState = cartSlice.getInitialState;