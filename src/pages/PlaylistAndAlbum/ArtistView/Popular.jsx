import { useEffect, useState } from 'react';
import { useSelector } from 'react-redux';

import styles from './Popular.module.css';
import fetchWebApi from '../../Data/fetchWebApi';
import TrackNumber from '../Components/TrackList/TrackNumber';
import DurationTrack from '../Components/TrackList/DurationTrack';
import TrackImg from '../Components/TrackList/TrackImg';

function Popular(props) {
    const [popularContent, setPopularContent] = useState();
    const currentTrack = useSelector(state => {
        return state.currentTrack.track
            ? state.currentTrack.track
            : state.currentTrack;
    });

    useEffect(() => {
        getPopularContent();
    }, []);

    async function getPopularContent() {
        const artistPopularData = await fetchWebApi(
            `v1/artists/${props.playlistInfo.id}/top-tracks?market=CA`,
            'GET'
        );
        setPopularContent(artistPopularData);
    }

    return (
        <>
            <div className={styles['section-name']}>Populaire</div>
            {popularContent &&
                popularContent.tracks.map((item, index) => {
                    return (
                        <li
                            key={item.name}
                            className={[
                                styles['list-item-container'],
                                item.name === currentTrack.currentTrack?.name
                                    ? 'active-item'
                                    : '',
                                styles['album-colomn-divisions'],
                            ].join(' ')}
                        >
                            <TrackNumber
                                index={index}
                                playlistInfo={popularContent}
                                item={item}
                                type={'albums'}
                            />
                            <div className={styles['list-item-info']}>
                                {/* TODO: add navlink here when track view is ready */}
                                <TrackImg images={item.album.images} />
                                <span
                                    className={
                                        styles['list-item-info-track-name']
                                    }
                                >
                                    {item.name}
                                </span>
                            </div>
                            <DurationTrack item={item} />
                        </li>
                    );
                })}
        </>
    );
}

export default Popular;
