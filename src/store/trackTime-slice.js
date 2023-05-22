import { createSlice } from '@reduxjs/toolkit';

const initialTrackTime = {
    trackTime: 0,
    manualTrackTime: 0,
};

const trackTimeSlice = createSlice({
    name: 'current track playback time',
    initialState: initialTrackTime,
    reducers: {
        UpdateTrackTime(state, action) {
            state.trackTime = action.payload;
        },

        ManualUpdateTrackTime(state, action) {
            state.manualTrackTime = action.payload;
        },
    },
});

export const trackTimeActions = trackTimeSlice.actions;

export default trackTimeSlice.reducer;
