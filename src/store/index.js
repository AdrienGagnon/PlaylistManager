import { configureStore } from '@reduxjs/toolkit';

import accessTokenReducer from './accessToken-slice';
import biblioReducer from './biblioExpand-slice';
import biblioMoreReducer from './biblioMore-slice';
import currentTrackReducer from './currentTrack-slice';

const store = configureStore({
    reducer: {
        accessToken: accessTokenReducer,
        biblio: biblioReducer,
        biblioMore: biblioMoreReducer,
        currentTrack: currentTrackReducer,
    },
});

export default store;
