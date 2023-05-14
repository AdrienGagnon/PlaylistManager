import store from '../../store';

import handleNextTrack from './handleNextTrack';

function isTrackFinished() {
    const trackTime = store.getState().currentTrack.trackTime;
    const totalTrackTime =
        store.getState().currentTrack.currentTrack?.track.duration_ms;
    if (!totalTrackTime) return;
    console.log(trackTime, totalTrackTime);

    if (trackTime >= totalTrackTime) {
        handleNextTrack();
    }
}

export default isTrackFinished;
