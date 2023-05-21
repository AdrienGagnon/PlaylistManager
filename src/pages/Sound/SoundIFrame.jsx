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
        dispatch(trackTimeActions.trackTime(time));
    };

    const currentTrackInfo = useSelector(state => {
        return state.currentTrack;
    });

    function handlePlayback(EmbedController) {
        if (
            placeholder.current.children[0].dataset.spotifyPlaystate === 'true'
        ) {
            EmbedController.resume();
        } else {
            EmbedController.pause();
        }
    }

    useEffect(() => {
        window.onSpotifyIframeApiReady = IFrameAPI => {
            const element = document.getElementById('embed-iframe');
            const options = {
                uri: 'spotify:episode:7makk4oTQel546B0PZlDM5',
            };

            const callback = EmbedController => {
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
            };

            IFrameAPI.createController(element, options, callback);
        };
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
                data-spotify-id={currentTrackInfo.currentTrack?.track.uri}
                // data-spotify-playstate={currentTrackInfo.playState}
            >
                <div data-spotify-playstate={currentTrackInfo.playState}></div>
            </div>
        </div>
    );
}

export default SoundIFrame;
