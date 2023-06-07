import { createSlice } from '@reduxjs/toolkit';

const initialHomeContent = {
    content: undefined,
    profilContent: undefined,
};

const homeContentSlice = createSlice({
    name: 'content of the home page',
    initialState: initialHomeContent,
    reducers: {
        newHomeContent(state, action) {
            state.content = action.payload;
        },
        newProfileContent(state, action) {
            state.profilContent = action.payload;
        },
    },
});

export const homeContentActions = homeContentSlice.actions;

export default homeContentSlice.reducer;
