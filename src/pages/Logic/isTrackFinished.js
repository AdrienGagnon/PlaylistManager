import store from '../../store';

import handleNextTrack from './handleNextTrack';

function isTrackFinished() {
    const trackTime = store.getState().trackTime.trackTime;
    const totalTrackTime =
        store.getState().currentTrack.currentTrack?.track.duration_ms;
    if (!totalTrackTime) return;

    if (trackTime >= totalTrackTime) {
        handleNextTrack();
    }
}

export default isTrackFinished;
