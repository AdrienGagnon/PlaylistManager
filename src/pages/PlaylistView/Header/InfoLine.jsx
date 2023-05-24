import { useEffect, useState } from 'react';

import styles from './InfoLine.module.css';
import fetchWebApi from '../../Data/fetchWebApi';
import ArtistNames from '../../utils/ArtistNames';

function InfoLine(props) {
    const [playlistDuration, setPlaylistDuration] = useState();

    useEffect(() => {
        calcTotalTime();
    }, [props.playlistInfo]);

    async function calcTotalTime() {
        if (!props.playlistInfo?.items && !props.playlistInfo?.tracks?.items) {
            return;
        }
        const timeArray = props.playlistInfo.tracks.items;

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

        let totalTime;
        if (props.option === 'album') {
            totalTime = timeArray.reduce((accumulator, currentValue) => {
                return accumulator + currentValue.duration_ms;
            }, 0);
        } else {
            totalTime = timeArray.reduce((accumulator, currentValue) => {
                return accumulator + currentValue.track.duration_ms;
            }, 0);
        }

        const hours = Math.floor(totalTime / 3600000);
        const minutes = Math.floor((totalTime % 3600000) / (1000 * 60));
        setPlaylistDuration({ hours: hours, min: minutes });
    }

    /* function ArtistNames() {
        return props.playlistInfo.artists.map(artist => {
            return (
                <span key={artist.name} className={styles['artist-names']}>
                    {artist.name}
                </span>
            );
        });
    } */

    return (
        <div className={styles['info-playlist-other-container']}>
            <span className={styles['info-playlist-owner']}>
                {props.option === 'album' ? (
                    <ArtistNames
                        item={props.playlistInfo}
                        divisionSymbol={'•'}
                    />
                ) : (
                    props.playlistInfo.owner.display_name
                )}
            </span>
            {props.option === 'playlist' &&
                props.playlistInfo.followers.total > 0 && (
                    <span className={styles['mentions-aime']}>
                        {props.option === 'album'
                            ? props.playlistInfo.release_date.slice(0, 4)
                            : props.playlistInfo.followers.total +
                                  'mention' +
                                  props.playlistInfo.followers.total >
                              1
                            ? 's'
                            : '' + "« J'aime »"}
                    </span>
                )}
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
    );
}

export default InfoLine;
