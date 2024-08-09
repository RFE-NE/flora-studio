import {
    createSlice
} from '@reduxjs/toolkit';

const initialState = {
    items: [], 
};

const basketSlice = createSlice({
    name: 'basket',
    initialState,
    reducers: {
        addItemToBasket: (state, action) => {
            const product = action.payload;
            const existingProduct = state.items.find(item => item.id === product.id);

            if (existingProduct) {
                existingProduct.quantity += 1; 
            } else {
                state.items.push({
                    ...product,
                    quantity: 1
                }); 
            }
        },
        removeItemFromBasket: (state, action) => {
            const productId = action.payload;
            state.items = state.items.filter(item => item.id !== productId);
        },
        clearBasket: (state) => {
            state.items = [];
        },
    },
});

export const {
    addItemToBasket,
    removeItemFromBasket,
    clearBasket
} = basketSlice.actions;

export default basketSlice.reducer;