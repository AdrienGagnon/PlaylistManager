import { createSlice } from '@reduxjs/toolkit';

const initialBiblioState = {
    expandedBiblio: true,
};

const biblioSlice = createSlice({
    name: 'expanded biblio',
    initialState: initialBiblioState,
    reducers: {
        toggle(state) {
            state.expandedBiblio = !state.expandedBiblio;
        },
    },
});

export const biblioActions = biblioSlice.actions;

export default biblioSlice.reducer;
