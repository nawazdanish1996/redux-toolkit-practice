import { createSlice } from "@reduxjs/toolkit";

const cartSlice = createSlice({
    name: 'cart',
    initialState: {
        itemsList: [],
        totalQuantity: 0,
        showCart: false,
    },
    reducers: {
        addToCart(state, action){
            const newItem = action.payload;
            const existinngItem = state.itemsList.find((item)=> item.id === newItem.id);
            if(existinngItem){
                existinngItem.quantity++;
                existinngItem.price += newItem.price
            }else{
                state.itemsList.push({
                    id: newItem.id,
                    price: newItem.price,
                    quantity: 1,
                    totalPrice: newItem.price,
                    name: newItem.name
                })
            }
        },
        removeFromCart(state){

        },
        setShowCart(state){
            state.showCart = true
        }
    }
});

export const cartActions = cartSlice.actions;

export default cartSlice;