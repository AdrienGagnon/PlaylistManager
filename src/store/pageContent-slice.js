import { createSlice } from '@reduxjs/toolkit';

const initialPageContent = {
    pageContent: undefined,
};

const pageContentSlice = createSlice({
    name: 'content of the current page',
    initialState: initialPageContent,
    reducers: {
        newPageContent(state, action) {
            state.pageContent = action.payload;
        },
    },
});

export const pageContentActions = pageContentSlice.actions;

export default pageContentSlice.reducer;
