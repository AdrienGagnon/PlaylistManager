import { createSlice } from '@reduxjs/toolkit';

const initialTrackArtist = {
    artistInfo: undefined,
};

const trackArtistSlice = createSlice({
    name: 'artist of the track view',
    initialState: initialTrackArtist,
    reducers: {
        newTrackArtist(state, action) {
            state.artistInfo = action.payload;
        },
    },
});

export const trackArtistActions = trackArtistSlice.actions;

export default trackArtistSlice.reducer;
