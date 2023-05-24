import { useSelector } from 'react-redux';

import styles from './GenerateTrackList.module.css';
import AddDate from './AddDate';
import TrackMainInfo from './TrackMainInfo';
import TrackTitleAndArtist from './TrackTitleAndArtist';
import TrackNumber from './TrackNumber';
import DurationTrack from './DurationTrack';

function GenerateTrackList(props) {
    const currentTrack = useSelector(state => {
        return state.currentTrack;
    });

    return (
        <ul className={styles['list-tracks-container']}>
            {props.option === 'playlist' &&
                props.playlistInfo.tracks.items.map((item, index) => {
                    return (
                        <li
                            key={item.track.name}
                            className={[
                                styles['list-item-container'],
                                styles[
                                    item.track.name ===
                                    currentTrack.currentTrack?.track.name
                                        ? 'active-item'
                                        : ''
                                ],
                            ].join(' ')}
                        >
                            <TrackNumber index={index} />
                            <TrackMainInfo item={item.track} />
                            <div className={styles['list-item-album']}>
                                {item.track.album.name}
                            </div>
                            <AddDate item={item} />
                            <DurationTrack item={item.track} />
                        </li>
                    );
                })}
            {props.option === 'album' &&
                props.playlistInfo.tracks.items.map((item, index) => {
                    return (
                        <li
                            key={item.name}
                            className={[
                                styles['list-item-container'],
                                styles[
                                    item.name ===
                                    currentTrack.currentTrack?.track.name
                                        ? 'active-item'
                                        : ''
                                ],
                                styles['album-colomn-divisions'],
                            ].join(' ')}
                        >
                            <TrackNumber index={index} />
                            <TrackTitleAndArtist item={item} />
                            <DurationTrack item={item} />
                        </li>
                    );
                })}
        </ul>
    );
}

export default GenerateTrackList;
