import handlePlayNewTrack from './handlePlayNewTrack';

import { currentTrackActions } from '../../store/currentTrack-slice';

import store from '../../store';

function handleResumeTrack(item, trackPosition = 0, track = undefined) {
    const sameTrack =
        track &&
        store.getState().currentTrack.currentTrack.track.id === track.track.id
            ? true
            : false;
    console.log(track);
    if (
        store.getState().currentTrack.currentPlaylist?.id === item.id &&
        sameTrack
    ) {
        store.getState().currentTrack.playState
            ? store.dispatch(currentTrackActions.stopCurrentTrack())
            : store.dispatch(currentTrackActions.playCurrentTrack());
    } else {
        handlePlayNewTrack(item, trackPosition);
    }
}

export default handleResumeTrack;
