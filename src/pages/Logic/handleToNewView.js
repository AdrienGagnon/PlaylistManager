import store from '../../store';
import { currentTrackActions } from '../../store/currentTrack-slice';

function handleToNewView(item, destination) {
    store.dispatch(currentTrackActions.newCurrentPlaylist(item));
    window.location.href = `/${destination}`;
}

export default handleToNewView;
