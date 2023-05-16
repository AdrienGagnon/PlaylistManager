import store from '../../store';

import { currentTrackActions } from '../../store/currentTrack-slice';

function handleNextTrack(direction = 'next') {
    if (!store.getState().currentTrack.currentTrack) return;
    const trackPosition =
        store.getState().currentTrack.trackPosition +
        (direction === 'previous' ? -1 : 1);

    // If first track and going to previous
    if (trackPosition < 0) return;

    // if last track and going to next
    if (
        trackPosition >
        store.getState().currentTrack.currentPlaylistTracks.length
    ) {
        // if()
        return;
    }

    const trackList = store.getState().currentTrack.currentPlaylistTracks;
    store.dispatch(
        currentTrackActions.newCurrentTrack({
            track: trackList,
            trackPosition: trackPosition,
        })
    );
}

export default handleNextTrack;
