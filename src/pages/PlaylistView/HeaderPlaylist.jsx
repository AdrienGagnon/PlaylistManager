import styles from './HeaderPlaylist.module.css';

import { useSelector } from 'react-redux';

import fetchWebApi from '../Data/fetchWebApi';
import { useEffect, useRef, useState } from 'react';

function HeaderPlaylist(props) {
    const [playlistDuration, setPlaylistDuration] = useState();
    const [titleSize, setTitleSize] = useState({
        width: 10,
        height: 10,
        fontSize: 3,
    });
    const playlistTitle = useRef();
    const playlistInfoContainer = useRef();

    useEffect(() => {
        // calcTotalTime();
        playlistTitleSizing();
    }, [props.playlistInfo]);

    useEffect(() => {
        if (titleSize.height === 10) return;
        const fontSizeArray = ['3.2rem', '4.8rem', '7.2rem', '9.6rem'];
        let lastMove = 0;
        window.addEventListener('resize', () =>
            resizeTitle(lastMove, fontSizeArray)
        );
        return () => {
            window.removeEventListener('resize', () =>
                resizeTitle(lastMove, fontSizeArray)
            );
        };
    }, [titleSize]);

    function resizeTitle(lastMove, fontSizeArray) {
        if (Date.now() - lastMove > 100) {
            lastMove = Date.now();
            // TODO: fix the title size with window size increasing
            // if (
            //     playlistInfoContainer.current.clientWidth >
            //     titleSize.width + 200
            // ) {
            //     if (titleSize.fontSize === 3) return;
            //     console.log('bigger');
            //     playlistTitle.current.style.fontSize =
            //         fontSizeArray[titleSize.fontSize + 1];
            //     setTitleSize({
            //         width: playlistTitle.current.clientWidth,
            //         height,
            //         fontSize: titleSize.fontSize + 1,
            //     });
            // }
            if (playlistTitle.current.clientHeight > titleSize.height) {
                if (titleSize.fontSize === 0) return;

                console.log('smaller', titleSize.fontSize - 1);
                playlistTitle.current.style.fontSize =
                    fontSizeArray[titleSize.fontSize - 1];
                setTitleSize({
                    height: playlistTitle.current.clientHeight,
                    fontSize: titleSize.fontSize - 1,
                });
            }
        }
    }

    function playlistTitleSizing() {
        if (!playlistTitle.current) return;
        setTitleSize({
            width: playlistTitle.current.clientWidth,
            height: playlistTitle.current.clientHeight,
            fontSize: 3,
        });
    }

    async function calcTotalTime() {
        if (!props.playlistInfo) return;
        let timeArray = props.playlistInfo.items;
        if (props.playlistInfo.total > 100) {
            for (let i = 100; i < props.playlistInfo.total + 100; i = i + 100) {
                const newFetch = await fetchWebApi(
                    'v1/playlists/7IhvkRwF1WXQNsP78WSnNw/tracks',
                    'GET',
                    (offset = `?offset=${i}`)
                );
                timeArray = timeArray.concat(newFetch.items);
            }
        }
        const totalTime = timeArray.reduce((accumulator, currentValue) => {
            return accumulator + currentValue.track.duration_ms;
        }, 0);
        const hours = Math.floor(totalTime / 3600000);
        const minutes = Math.floor((totalTime % 3600000) / (1000 * 60));
        setPlaylistDuration({ hours: hours, min: minutes });
    }

    return (
        <>
            {props.playlistInfo ? (
                <div
                    ref={playlistInfoContainer}
                    className={styles['playlist-info-container']}
                >
                    <img
                        className={styles['playlist-info-image']}
                        src={props.playlistInfo.images[0].url}
                        alt="playlist-image"
                    />
                    <div className={styles['playlist-info-text-container']}>
                        <p className={styles['info-playlist-type']}>
                            Liste de lecture
                        </p>
                        <p
                            ref={playlistTitle}
                            className={styles['info-playlist-title']}
                        >
                            {props.playlistInfo.name}
                        </p>
                        <div
                            className={styles['info-playlist-other-container']}
                        >
                            <span className={styles['info-playlist-owner']}>
                                {props.playlistInfo.owner.display_name}
                            </span>
                            <span className={styles['mentions-aime']}>
                                {props.playlistInfo.followers.total} mention
                                {props.playlistInfo.followers.total > 1
                                    ? 's'
                                    : ''}{' '}
                                « J'aime »
                            </span>
                            <span className={styles['total-tracks']}>
                                {props.playlistInfo.tracks.total} chansons
                            </span>
                            {playlistDuration && (
                                <span>
                                    {', '}
                                    {playlistDuration.hours > 0 &&
                                        playlistDuration.hours + ' h '}
                                    {playlistDuration.min} min
                                </span>
                            )}
                        </div>
                    </div>
                </div>
            ) : (
                <></>
            )}
        </>
    );
}

export default HeaderPlaylist;
