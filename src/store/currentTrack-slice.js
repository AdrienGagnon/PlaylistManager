import { createSlice } from '@reduxjs/toolkit';

const initialCurrentTrack = {
    currentPlaylist: undefined,
    currentPlaylistTracks: undefined,
    currentTrack: undefined,
    playState: false,
};

const currentTrackSlice = createSlice({
    name: 'new current track',
    initialState: initialCurrentTrack,
    reducers: {
        newCurrentPlaylist(state, action) {
            state.currentPlaylist = action.payload;
        },

        newCurrentPlaylistTracks(state, action) {
            state.currentPlaylistTracks = action.payload;
        },

        newCurrentTrack(state, action) {
            state.currentTrack =
                action.payload.track.items[action.payload.trackPosition];
        },

        playCurrentTrack(state) {
            state.playState = true;
        },

        stopCurrentTrack(state) {
            state.playState = false;
        },
    },
});

export const currentTrackActions = currentTrackSlice.actions;

export default currentTrackSlice.reducer;
