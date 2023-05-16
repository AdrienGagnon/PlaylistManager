import { configureStore } from '@reduxjs/toolkit';

import accessTokenReducer from './accessToken-slice';
import biblioReducer from './biblioExpand-slice';
import currentTrackReducer from './currentTrack-slice';
import playlistPlaybackOrderReducer from './playlistPlaybackOrder';

const store = configureStore({
    reducer: {
        accessToken: accessTokenReducer,
        biblio: biblioReducer,
        currentTrack: currentTrackReducer,
        playlistPlaybackOrder: playlistPlaybackOrderReducer,
    },
});

export default store;
