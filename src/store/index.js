import { configureStore } from '@reduxjs/toolkit';

import accessTokenReducer from './accessToken-slice';
import biblioReducer from './biblioExpand-slice';
import biblioMoreReducer from './biblioMore-slice';

const store = configureStore({
    reducer: {
        accessToken: accessTokenReducer,
        biblio: biblioReducer,
        biblioMore: biblioMoreReducer,
    },
});

export default store;
