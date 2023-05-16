import { createSlice } from '@reduxjs/toolkit';

const initialPlaylistPlaybackOrder = {
    shuffle: false,
    loop: false,
};

const playlistPlaybackOrderSlice = createSlice({
    name: 'playback order of playlist',
    initialState: initialPlaylistPlaybackOrder,
    reducers: {
        toggleShuffle(state) {
            state.shuffle = !state.shuffle;
        },

        toggleLoop(state) {
            state.loop = !state.loop;
        },
    },
});

export const playlistPlaybackOrderActions = playlistPlaybackOrderSlice.actions;

export default playlistPlaybackOrderSlice.reducer;
