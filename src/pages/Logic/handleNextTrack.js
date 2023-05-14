import store from '../../store';

import { currentTrackActions } from '../../store/currentTrack-slice';

function handleNextTrack(direction = 'next') {
    const trackPosition =
        store.getState().currentTrack.trackPosition +
        (direction === 'previous' ? -1 : 1);
    const trackList = store.getState().currentTrack.currentPlaylistTracks;
    store.dispatch(
        currentTrackActions.newCurrentTrack({
            track: trackList,
            trackPosition: trackPosition,
        })
    );
}

export default handleNextTrack;
