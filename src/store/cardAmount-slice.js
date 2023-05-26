import { createSlice } from '@reduxjs/toolkit';

const initialCardAmount = {
    cardAmount: 1,
};

const cardAmountSlice = createSlice({
    name: 'card amount in list',
    initialState: initialCardAmount,
    reducers: {
        updateCardAmount(state, action) {
            state.cardAmount = action.payload;
        },
    },
});

export const cardAmountActions = cardAmountSlice.actions;

export default cardAmountSlice.reducer;
