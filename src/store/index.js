import { configureStore } from '@reduxjs/toolkit';

import accessTokenReducer from './accessToken-slice';
import biblioReducer from './biblioExpand-slice';
import currentTrackReducer from './currentTrack-slice';
import playlistPlaybackOrderReducer from './playlistPlaybackOrder';
import pageContentReducer from './pageContent-slice';

const store = configureStore({
    reducer: {
        accessToken: accessTokenReducer,
        biblio: biblioReducer,
        currentTrack: currentTrackReducer,
        playlistPlaybackOrder: playlistPlaybackOrderReducer,
        pageContent: pageContentReducer,
    },
});

export default store;
