import styles from './PlaylistView.module.css';

import { useSelector } from 'react-redux';

import fetchWebApi from '../Data/fetchWebApi';
import { useEffect, useState } from 'react';

function PlaylistView() {
    const [playlistInfo, setProfileInfo] = useState();
    const [tracksInfo, setTracksInfo] = useState();

    const state = useSelector(state => {
        return state;
    });

    useEffect(() => {
        getPlaylistInfo();
        getTracksInfo();
    }, []);

    async function getPlaylistInfo() {
        setProfileInfo(
            await fetchWebApi('v1/playlists/7IhvkRwF1WXQNsP78WSnNw', 'GET')
        );
    }

    async function getTracksInfo() {
        setTracksInfo(
            await fetchWebApi(
                'v1/playlists/7IhvkRwF1WXQNsP78WSnNw/tracks',
                'GET'
            )
        );
    }

    function calcTotalTime() {
        const initialValue = 0;
        const totalTime = tracksInfo.items.reduce(
            (accumulator, currentValue) => {
                console.log(typeof currentValue.track.duration_ms);
                accumulator + currentValue.track.duration_ms;
            },
            initialValue
        );
        console.log(totalTime);
    }

    return (
        <>
            {playlistInfo ? (
                <div className="main-view">
                    <div className={styles['playlist-info-container']}>
                        <img
                            className={styles['playlist-info-image']}
                            src={playlistInfo.images[0].url}
                            alt="playlist-image"
                        />
                        <div className={styles['playlist-info-text-container']}>
                            <p>Liste de lecture</p>
                            <div>{playlistInfo.name}</div>
                            <div>
                                <span>{playlistInfo.owner.display_name}</span>
                                <span className={styles['mentions-aime']}>
                                    {playlistInfo.followers.total} mention
                                    {playlistInfo.followers.total > 1
                                        ? 's'
                                        : ''}{' '}
                                    « J'aime »
                                </span>
                                <span className={styles['total-tracks']}>
                                    {playlistInfo.tracks.total} chansons,
                                </span>
                                <span>{calcTotalTime()}</span>
                            </div>
                        </div>
                    </div>
                    <div className={styles['play-btn-container']}>
                        <button></button>
                    </div>
                    <div>
                        <div
                            className={styles['colomn-titles-container']}
                        ></div>
                        <ul></ul>
                    </div>
                </div>
            ) : (
                <></>
            )}
        </>
    );
}

export default PlaylistView;
