import { createSlice } from '@reduxjs/toolkit';

const initialBiblioMoreState = {
    moreBiblio: false,
};

const biblioMoreSlice = createSlice({
    name: 'more biblio',
    initialState: initialBiblioMoreState,
    reducers: {
        toggle(state) {
            state.moreBiblio = !state.moreBiblio;
        },
    },
});

export const biblioActions = biblioMoreSlice.actions;

export default biblioMoreSlice.reducer;
