import { createSlice } from '@reduxjs/toolkit';

const initialTrackTime = {
    trackTime: 0,
};

const trackTimeSlice = createSlice({
    name: 'current track playback time',
    initialState: initialTrackTime,
    reducers: {
        trackTime(state, action) {
            state.trackTime = action.payload;
        },
    },
});

export const trackTimeActions = trackTimeSlice.actions;

export default trackTimeSlice.reducer;
