import { createSlice } from '@reduxjs/toolkit';

const initialCurrentTrack = {
    currentPlaylist: undefined,
    currentPlaylistTracks: undefined,
    temporaryCurrentPlaylistTracks: undefined,
    currentTrack: undefined,
    playState: false,
    trackTime: 0,
    trackPosition: 0,
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

        newTemporaryCurrentPlaylistTracks(state, action) {
            state.temporaryCurrentPlaylistTracks = action.payload;
        },

        newCurrentTrack(state, action) {
            state.currentTrack =
                action.payload.track[action.payload.trackPosition];
            state.trackPosition = action.payload.trackPosition;
        },

        playCurrentTrack(state) {
            state.playState = true;
        },

        stopCurrentTrack(state) {
            state.playState = false;
        },

        trackTime(state, action) {
            state.trackTime = action.payload;
        },
    },
});

export const currentTrackActions = currentTrackSlice.actions;

export default currentTrackSlice.reducer;
