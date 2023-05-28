import { createSlice } from '@reduxjs/toolkit';

const initialNewContentReceived = {
    newContentReceived: undefined,
};

const newContentReceivedSlice = createSlice({
    name: 'checks if new content has been received',
    initialState: initialNewContentReceived,
    reducers: {
        toggleNewContentReceived(state, action) {
            state.newContentReceived = action.payload;
        },
    },
});

export const newContentReceivedActions = newContentReceivedSlice.actions;

export default newContentReceivedSlice.reducer;
