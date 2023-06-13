import { useEffect, useState } from 'react';
import { useDispatch } from 'react-redux';

import { trackArtistActions } from '../../../../../store/trackArtist-slice';
import styles from './InfoLineTrack.module.css';
import calcTrackTime from '../../../../utils/calcTrackTime';
import fetchWebApi from '../../../../Data/fetchWebApi';

function InfoLineTrack(props) {
    const [artistInfo, setArtistInfo] = useState();
    const dispatch = useDispatch();

    useEffect(() => {
        getArtistData();
    }, []);

    async function getArtistData() {
        const artistData = await fetchWebApi(
            'v1/artists/' + props.contentInfo.artists[0].id,
            'GET'
        );
        setArtistInfo(artistData);
        dispatch(trackArtistActions.newTrackArtist(artistData));
    }

    return (
        <>
            <span className={styles['info-track-artist-container']}>
                {artistInfo && (
                    <img
                        className={styles['info-track-artist-img']}
                        src={
                            artistInfo.images[2]
                                ? artistInfo.images[2].url
                                : artistInfo.images[0].url
                        }
                        alt="profil-image"
                    />
                )}
                <span className={styles['info-track-artist-name']}>
                    {props.contentInfo.artists[0].name}
                </span>
            </span>
            <span className={styles['album-title']}>
                {props.contentInfo.album.name}
            </span>
            <span className={styles['track-year']}>
                {props.contentInfo.album.release_date.slice(0, 4)}
            </span>
            <span className={styles['track-duration']}>
                {calcTrackTime(props.contentInfo.duration_ms / 1000)}
            </span>
        </>
    );
}

export default InfoLineTrack;
