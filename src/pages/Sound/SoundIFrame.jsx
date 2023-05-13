import { useEffect, useState } from 'react';
import { useSelector } from 'react-redux';

// https://developer.spotify.com/documentation/web-playback-sdk/howtos/web-app-player

import styles from './SoundIFrame.module.css';

function SoundIFrame() {
    // const accessToken = useSelector(state => {
    //     return state.accessToken;
    // });
    const [accessToken, setAccessToken] = useState();

    const localaccessToken = localStorage.getItem('access_token');

    useEffect(() => {
        setAccessToken(localaccessToken);
    }, []);

    const [player, setPlayer] = useState(undefined);
    const currentTrackInfo = useSelector(state => {
        return state.currentTrack;
    });
    console.log(
        currentTrackInfo,
        'current',
        currentTrackInfo.currentTrack?.track.uri
    );

    useEffect(() => {
        const script = document.createElement('script');
        script.src = 'https://sdk.scdn.co/spotify-player.js';
        script.async = true;

        document.body.appendChild(script);

        window.onSpotifyWebPlaybackSDKReady = () => {
            const player = new window.Spotify.Player({
                name: 'Web Playback SDK',
                getOAuthToken: cb => {
                    cb(localaccessToken);
                },
                volume: 0.5,
            });

            setPlayer(player);

            player.addListener('ready', ({ device_id }) => {
                console.log('Ready with Device ID', device_id);
            });

            player.addListener('not_ready', ({ device_id }) => {
                console.log('Device ID has gone offline', device_id);
            });

            player.connect();
        };
    }, [currentTrackInfo.currentTrack]);

    return <div id={styles['embed-iframe']}></div>;
}

export default SoundIFrame;
