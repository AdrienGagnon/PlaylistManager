import { createSlice } from '@reduxjs/toolkit';

const initialAccessToken = {
    accessToken: '',
};

const accessTokenSlice = createSlice({
    name: 'update token',
    initialState: initialAccessToken,
    reducers: {
        updateToken(state, action) {
            state.accessToken = action.payload.accessToken;
        },
    },
});

export const accessTokenActions = accessTokenSlice.actions;

export default accessTokenSlice.reducer;
