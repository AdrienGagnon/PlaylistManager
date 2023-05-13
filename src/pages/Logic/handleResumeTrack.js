import handlePlayNewTrack from './handlePlayNewTrack';

import { currentTrackActions } from '../../store/currentTrack-slice';

import store from '../../store';

function handleResumeTrack(item) {
    if (store.getState().currentTrack.currentPlaylist?.id === item.id) {
        store.getState().currentTrack.playState
            ? store.dispatch(currentTrackActions.stopCurrentTrack())
            : store.dispatch(currentTrackActions.playCurrentTrack());
    } else {
        handlePlayNewTrack(item);
    }
}

export default handleResumeTrack;
