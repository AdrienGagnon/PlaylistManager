import { useState } from 'react';
import { useSelector } from 'react-redux';

import styles from './Popular.module.css';
import TrackNumber from '../Components/TrackList/TrackNumber';
import DurationTrack from '../Components/TrackList/DurationTrack';
import TrackImg from '../Components/TrackList/TrackImg';
import { NavLink } from 'react-router-dom';

function Popular(props) {
    const [popularTrackAmount, setPopularTrackAmount] = useState(5);
    const currentTrack = useSelector(state => {
        return state.currentTrack.track
            ? state.currentTrack.track
            : state.currentTrack;
    });

    function handleShowMore() {
        setPopularTrackAmount(popularTrackAmount === 5 ? 100 : 5);
    }

    return (
        <>
            <div className={styles['section-name']}>{props.title}</div>
            {props.popularContent &&
                props.popularContent.tracks
                    .slice(0, popularTrackAmount)
                    .map((item, index) => {
                        return (
                            <li
                                key={item.id}
                                className={[
                                    styles['list-item-container'],
                                    item.name ===
                                    currentTrack.currentTrack?.name
                                        ? 'active-item'
                                        : '',
                                    styles['album-colomn-divisions'],
                                ].join(' ')}
                            >
                                <TrackNumber
                                    index={index}
                                    playlistInfo={props.popularContent}
                                    item={item}
                                    type={'albums'}
                                />
                                <div className={styles['list-item-info']}>
                                    <TrackImg images={item.album.images} />
                                    <NavLink
                                        to={'/track/' + item.id}
                                        className={
                                            styles['list-item-info-track-name']
                                        }
                                    >
                                        {item.name}
                                    </NavLink>
                                </div>
                                <DurationTrack item={item} />
                            </li>
                        );
                    })}
            {props.popularContent && props.popularContent.tracks.length > 5 && (
                <div onClick={handleShowMore} className={styles['show-more']}>
                    {popularTrackAmount === 5
                        ? 'Afficher plus'
                        : 'Montrer moins'}
                </div>
            )}
        </>
    );
}

export default Popular;
