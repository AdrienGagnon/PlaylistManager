import { useEffect, useRef } from 'react';
import { useSelector } from 'react-redux';

import styles from './SoundIFrame.module.css';

import { useDispatch } from 'react-redux';

import { trackTimeActions } from '../../store/trackTime-slice';

import handleNextTrack from '../Logic/handleNextTrack';

function SoundIFrame() {
    const placeholder = useRef();
    const dispatch = useDispatch();

    const setTrackTime = time => {
        dispatch(trackTimeActions.UpdateTrackTime(time));
    };
    const currentTrackInfo = useSelector(state => {
        return state.currentTrack;
    });

    const trackTime = useSelector(state => {
        return state.trackTime;
    });

    function handlePlayback(EmbedController) {
        try {
            if (
                placeholder.current.children[0].dataset.spotifyPlaystate ===
                'true'
            ) {
                EmbedController.resume();
            } else {
                EmbedController.pause();
            }
        } catch (error) {
            console.log(error);
        }
    }

    useEffect(() => {
        try {
            window.onSpotifyIframeApiReady = IFrameAPI => {
                const element = document.getElementById('embed-iframe');
                const options = {
                    uri: 'spotify:episode:7makk4oTQel546B0PZlDM5',
                };

                const callback = EmbedController => {
                    // Listener for new track
                    const callback = () => {
                        if (!placeholder.current.dataset.spotifyId) return;
                        EmbedController.loadUri(
                            placeholder.current.dataset.spotifyId
                        );
                        EmbedController.addListener('playback_update', e => {
                            setTrackTime(parseInt(e.data.position / 1000, 10));
                            if (
                                e.data.position >= e.data.duration &&
                                !e.data.isPaused
                            ) {
                                handleNextTrack();
                            }
                        });
                        handlePlayback(EmbedController);
                    };

                    const config = {
                        attributes: true,
                    };

                    const observer = new MutationObserver(callback);

                    observer.observe(placeholder.current, config);

                    // Listener for playState (play or pause)
                    const callbackPlayState = () => {
                        if (!placeholder.current.dataset.spotifyId) return;

                        handlePlayback(EmbedController);
                    };

                    const observerPlayState = new MutationObserver(
                        callbackPlayState
                    );

                    observerPlayState.observe(
                        placeholder.current.children[0],
                        config
                    );

                    // Listener for trackTime
                    // Listens for changes on manual update time, and sets the embed to that time
                    const callbackTrackTime = () => {
                        EmbedController.seek(
                            placeholder.current.children[1].dataset
                                .spotifyManualtracktime
                        );
                    };

                    const observerTrackTime = new MutationObserver(
                        callbackTrackTime
                    );
                    observerTrackTime.observe(
                        placeholder.current.children[1],
                        config
                    );
                };

                IFrameAPI.createController(element, options, callback);
            };
        } catch (error) {
            console.log(error);
        }
    }, []);

    return (
        <div className={styles['sound-container']}>
            <div id="embed-iframe"></div>
            <script
                src="https://open.spotify.com/embed-podcast/iframe-api/v1"
                async
            ></script>
            <div
                ref={placeholder}
                className={styles.placeholder}
                data-spotify-id={
                    currentTrackInfo.currentTrack &&
                    (currentTrackInfo.currentTrack.track
                        ? currentTrackInfo.currentTrack.track.uri
                        : currentTrackInfo.currentTrack.uri)
                }
            >
                <div data-spotify-playstate={currentTrackInfo.playState}></div>
                <div
                    data-spotify-manualtracktime={trackTime.manualTrackTime}
                ></div>
            </div>
        </div>
    );
}

export default SoundIFrame;
