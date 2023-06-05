import store from '../../store';

import { currentTrackActions } from '../../store/currentTrack-slice';

import shuffle from '../utils/shuffle';

import fetchWebApi from '../Data/fetchWebApi';

function handlePlayNewTrack(item, trackPosition = 0, type = 'playlists') {
    // Change the playlist state if necessary
    if (store.getState().currentTrack.currentPlaylist?.id !== item.id) {
        store.dispatch(currentTrackActions.newCurrentPlaylist(item));

        fetchWebApi(`v1/${type}/${item.id}/tracks`, 'GET').then(e => {
            let shuffleArray;
            const shuffleState = store.getState().playlistPlaybackOrder.shuffle;
            // Set the tracks of the playlist
            if (shuffleState) {
                // Set the normal track playlist to the temporary playlist
                store.dispatch(
                    currentTrackActions.newTemporaryCurrentPlaylistTracks(
                        e.items
                    )
                );

                // shuffle and set the playlist to current playlist
                shuffleArray = shuffle(e.items);
                store.dispatch(
                    currentTrackActions.newCurrentPlaylistTracks(shuffleArray)
                );
            } else {
                store.dispatch(
                    currentTrackActions.newCurrentPlaylistTracks(
                        e.items ? e.items : e.tracks.items
                    )
                );
            }

            // Sets the current track
            store.dispatch(
                currentTrackActions.newCurrentTrack({
                    track: shuffleState
                        ? shuffleArray
                        : e.items
                        ? e.items
                        : e.tracks.items,
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
