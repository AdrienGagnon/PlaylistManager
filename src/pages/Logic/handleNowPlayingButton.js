import store from '../../store';

import { currentTrackActions } from '../../store/currentTrack-slice';

function handleNowPlayingButton() {
    // Set the track to play
    store.getState().currentTrack.playState
        ? store.dispatch(currentTrackActions.stopCurrentTrack())
        : store.dispatch(currentTrackActions.playCurrentTrack());
}

export default handleNowPlayingButton;
