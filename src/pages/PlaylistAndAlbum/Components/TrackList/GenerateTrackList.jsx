import { useSelector } from 'react-redux';
import { NavLink } from 'react-router-dom';

import './GenerateTrackList.css';
import styles from './GenerateTrackList.module.css';
import AddDate from './AddDate';
import TrackMainInfo from './TrackMainInfo';
import TrackTitleAndArtist from './TrackTitleAndArtist';
import TrackNumber from './TrackNumber';
import DurationTrack from './DurationTrack';
import handleSetPageContent from '../../../Logic/handleSetPageContent';

function GenerateTrackList(props) {
    const currentTrack = useSelector(state => {
        return state.currentTrack.track
            ? state.currentTrack.track
            : state.currentTrack;
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
                                item.track.name ===
                                currentTrack.currentTrack?.track?.name
                                    ? 'active-item'
                                    : '',
                            ].join(' ')}
                        >
                            <TrackNumber
                                index={index}
                                playlistInfo={props.playlistInfo}
                                item={item}
                                type={'playlists'}
                            />
                            <TrackMainInfo item={item.track} />
                            <NavLink
                                to={'/album' + `/${item.track.album.id}`}
                                onClick={() =>
                                    handleSetPageContent(item.track.album)
                                }
                                className={styles['list-item-album']}
                            >
                                {item.track.album.name}
                            </NavLink>
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
                                item.name === currentTrack.currentTrack?.name
                                    ? 'active-item'
                                    : '',
                                styles['album-colomn-divisions'],
                            ].join(' ')}
                        >
                            <TrackNumber
                                index={index}
                                playlistInfo={props.playlistInfo}
                                item={item}
                                type={'albums'}
                            />
                            <TrackTitleAndArtist item={item} />
                            <DurationTrack item={item} />
                        </li>
                    );
                })}
            {props.option === 'popular' &&
                props.playlistInfo.tracks.map((item, index) => {
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
                                playlistInfo={props.playlistInfo}
                                item={item}
                                type={'albums'}
                            />
                            <div className={styles['list-item-info']}>
                                {/* TODO: add navlink here when track view is ready */}
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
        </ul>
    );
}

export default GenerateTrackList;
