import { useEffect, useState } from 'react';

import styles from './InfoLinePlaylistAlbum.module.css';
import calcTotalTracksTime from '../../../utils/calcTotalTrackstime';

function InfoLinePlaylist(props) {
    const [playlistDuration, setPlaylistDuration] = useState();

    useEffect(() => {
        calcTotalTracksTime(props.contentInfo, 'playlist', setPlaylistDuration);
    }, [props.contentInfo]);

    return (
        <>
            <span className={styles['info-playlist-owner']}>
                {props.contentInfo.owner.display_name}
            </span>
            {props.contentInfo.followers.total > 0 && (
                <span className={styles['mentions-aime']}>
                    {props.option === 'album'
                        ? props.contentInfo.release_date.slice(0, 4)
                        : props.contentInfo.followers.total +
                              'mention' +
                              props.contentInfo.followers.total >
                          1
                        ? 's'
                        : '' + "« J'aime »"}
                </span>
            )}
            <span className={styles['total-tracks']}>
                {props.contentInfo.tracks.total} chansons
            </span>
            {playlistDuration && (
                <span>
                    {', '}
                    {playlistDuration.hours > 0 &&
                        playlistDuration.hours + ' h '}
                    {playlistDuration.min} min
                </span>
            )}
        </>
    );
}

export default InfoLinePlaylist;
