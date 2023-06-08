import { useEffect, useState } from 'react';

import styles from './InfoLinePlaylistAlbum.module.css';
import ArtistNames from '../../../utils/ArtistNames';
import calcTotalTracksTime from '../../../utils/calcTotalTrackstime';

function InfoLineAlbum(props) {
    const [playlistDuration, setPlaylistDuration] = useState();

    useEffect(() => {
        calcTotalTracksTime(props.contentInfo, 'album', setPlaylistDuration);
    }, [props.contentInfo]);

    return (
        <>
            <span className={styles['info-playlist-owner']}>
                <ArtistNames item={props.contentInfo} divisionSymbol={'•'} />
            </span>
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

export default InfoLineAlbum;
