import {
    createSlice
} from '@reduxjs/toolkit';

const initialState = {
    items: [],
    wishlist: [],

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
        addToWishlist: (state, action) => {
            const item = action.payload;
            if (!state.wishlist.find((product) => product.id === item.id)) {
                state.wishlist.push(item);
            }
        },
        removeFromWishlist: (state, action) => {
            state.wishlist = state.wishlist.filter(
                (item) => item.id !== action.payload.id
            );
        },
    },
});

export const {
    addItemToBasket,
    removeItemFromBasket,
    clearBasket,
    addToWishlist
} = basketSlice.actions;

export default basketSlice.reducer;