import { createSlice } from '@reduxjs/toolkit';

const initialBiblioState = {
    expandedBiblio: false,
    minimiser: false,
};

const biblioSlice = createSlice({
    name: 'expanded biblio',
    initialState: initialBiblioState,
    reducers: {
        toggleExpanded(state) {
            state.expandedBiblio = !state.expandedBiblio;
        },
        toggleMinimiser(state) {
            state.minimiser = !state.minimiser;
        },
    },
});

export const biblioActions = biblioSlice.actions;

export default biblioSlice.reducer;
