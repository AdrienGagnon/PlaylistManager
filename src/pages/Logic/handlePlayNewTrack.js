import store from '../../store';

import { currentTrackActions } from '../../store/currentTrack-slice';

import fetchWebApi from '../Data/fetchWebApi';

function handlePlayNewTrack(item, trackPosition = 0) {
    // Change the playlist state if necessary
    if (store.getState().currentTrack.currentPlaylist?.id !== item.id) {
        store.dispatch(currentTrackActions.newCurrentPlaylist(item));

        fetchWebApi(`v1/playlists/${item.id}/tracks`, 'GET').then(e => {
            // Set the tracks of the playlist
            store.dispatch(currentTrackActions.newCurrentPlaylistTracks(e));

            // Sets the current track
            store.dispatch(
                currentTrackActions.newCurrentTrack({
                    track: e,
                    trackPosition: trackPosition,
                })
            );

            // Set the track to play
            store.dispatch(currentTrackActions.playCurrentTrack());
        });
    } else {
        // if same playlist, get the track position number and set a new track
        store.dispatch(
            currentTrackActions.newCurrentTrack({
                track: store.getState().currentTrack.currentPlaylistTracks,
                trackPosition: trackPosition,
            })
        );

        // Set the track to play
        store.dispatch(currentTrackActions.playCurrentTrack());
    }
}

export default handlePlayNewTrack;
