import { createSlice } from '@reduxjs/toolkit';

const initialUserInfo = {
    userPlaylists: undefined,
};

const userInfoSlice = createSlice({
    name: 'user info',
    initialState: initialUserInfo,
    reducers: {
        updateUserPlaylists(state, action) {
            state.userPlaylists = action.payload;
        },
    },
});

export const userInfoActions = userInfoSlice.actions;

export default userInfoSlice.reducer;
