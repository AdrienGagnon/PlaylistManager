import store from '../../store';
import { playlistPlaybackOrderActions } from '../../store/playlistPlaybackOrder';

function handleLoopBtn() {
    store.dispatch(playlistPlaybackOrderActions.toggleLoop());
}

export default handleLoopBtn;
