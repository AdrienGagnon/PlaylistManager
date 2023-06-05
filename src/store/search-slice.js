import { createSlice } from '@reduxjs/toolkit';

const initialSearch = {
    display: false,
    results: undefined,
};

const searchSlice = createSlice({
    name: 'display of search bar',
    initialState: initialSearch,
    reducers: {
        showDisplay(state, action) {
            state.display = action.payload;
        },

        updateResults(state, action) {
            state.results = action.payload;
        },
    },
});

export const searchActions = searchSlice.actions;

export default searchSlice.reducer;
