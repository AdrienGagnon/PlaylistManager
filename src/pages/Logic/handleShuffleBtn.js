import store from '../../store';
import { playlistPlaybackOrderActions } from '../../store/playlistPlaybackOrder';
import { currentTrackActions } from '../../store/currentTrack-slice';

function handleShuffleBtn() {
    store.dispatch(playlistPlaybackOrderActions.toggleShuffle());
    if (!store.getState().currentTrack.currentTrack) return;
    // Swap the temporary playlist and the current playlist
    store.dispatch(
        currentTrackActions.newTemporaryCurrentPlaylistTracks(
            store.getState().currentTrack.currentPlaylist
        )
    );

    store.dispatch(
        currentTrackActions.newCurrentPlaylistTracks(
            store.getState().currentTrack.temporaryCurrentPlaylistTracks
        )
    );
}

export default handleShuffleBtn;
