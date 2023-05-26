import { createSlice } from '@reduxjs/toolkit';

const initialBiblioState = {
    expandedBiblio: false,
    minimiser: false,
    mode: 'list',
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

        toggleMode(state) {
            if (state.mode === 'list') {
                state.mode = 'grille';
            } else {
                state.mode = 'list';
            }
        },
    },
});

export const biblioActions = biblioSlice.actions;

export default biblioSlice.reducer;
