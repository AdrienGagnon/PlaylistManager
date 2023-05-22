import styles from './GenerateTrackList.module.css';

import calcTrackTime from '../utils/calcTrackTime';

import { useSelector } from 'react-redux';

function GenerateTrackList(props) {
    const currentTrack = useSelector(state => {
        return state.currentTrack;
    });

    function AddedDate(props) {
        const event = new Date(
            Date.UTC(
                props.item.added_at.slice(0, 4),
                props.item.added_at.slice(5, 7),
                props.item.added_at.slice(8, 10)
            )
        );
        const options = {
            year: 'numeric',
            month: 'long',
            day: 'numeric',
        };
        const date = event.toLocaleDateString('fr-CA', options);

        return <div className={styles['list-item-date']}>{date}</div>;
    }

    function MainTrackInfo(props) {
        return (
            <div className={styles['list-item-info-container']}>
                <img
                    className={styles['list-item-playlist-img']}
                    src={props.item.track.album.images[2].url}
                    alt="playlist-img"
                />
                <div className={styles['list-item-info']}>
                    <span className={styles['list-item-info-track-name']}>
                        {props.item.track.name}
                    </span>
                    <div className={styles['list-item-info-artists-container']}>
                        {props.item.track.artists
                            .map(artist => {
                                return (
                                    <span
                                        key={artist.name}
                                        className={
                                            styles['list-item-info-artist']
                                        }
                                    >
                                        {artist.name}
                                    </span>
                                );
                            })
                            .reduce((prev, curr) => [prev, ', ', curr])}
                    </div>
                </div>
            </div>
        );
    }

    console.log(props.playlistInfo);

    return (
        <ul className={styles['list-tracks-container']}>
            {props.playlistInfo.tracks.items.map((item, index) => {
                console.log(item);
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
                        <div className={styles['list-item-number-container']}>
                            <span className={styles['list-item-number']}>
                                {index + 1}
                            </span>
                            <button
                                className={styles['list-item-play-btn']}
                                aria-label="Lecture de Timber Hearth par Andrew Prahlow"
                                tabIndex="-1"
                                aria-expanded="false"
                            >
                                <svg
                                    role="img"
                                    height="24"
                                    width="24"
                                    aria-hidden="true"
                                    className="Svg-sc-ytk21e-0 ldgdZj UIBT7E6ZYMcSDl1KL62g"
                                    viewBox="0 0 24 24"
                                    data-encore-id="icon"
                                >
                                    <path d="m7.05 3.606 13.49 7.788a.7.7 0 0 1 0 1.212L7.05 20.394A.7.7 0 0 1 6 19.788V4.212a.7.7 0 0 1 1.05-.606z"></path>
                                </svg>
                            </button>
                        </div>
                        <MainTrackInfo item={item} />
                        <div className={styles['list-item-album']}>
                            {item.track.album.name}
                        </div>
                        <AddedDate item={item} />
                        <div className={styles['list-item-duration-container']}>
                            <button
                                className={styles['list-item-like']}
                                type="button"
                                role="switch"
                                aria-checked="false"
                                aria-label="Enregistrer dans la Bibliothèque"
                                data-testid="add-button"
                                tabIndex="-1"
                                aria-expanded="false"
                            >
                                <svg
                                    role="img"
                                    height="16"
                                    width="16"
                                    aria-hidden="true"
                                    viewBox="0 0 16 16"
                                    data-encore-id="icon"
                                    className="Svg-sc-ytk21e-0 ldgdZj"
                                >
                                    <path d="M1.69 2A4.582 4.582 0 0 1 8 2.023 4.583 4.583 0 0 1 11.88.817h.002a4.618 4.618 0 0 1 3.782 3.65v.003a4.543 4.543 0 0 1-1.011 3.84L9.35 14.629a1.765 1.765 0 0 1-2.093.464 1.762 1.762 0 0 1-.605-.463L1.348 8.309A4.582 4.582 0 0 1 1.689 2zm3.158.252A3.082 3.082 0 0 0 2.49 7.337l.005.005L7.8 13.664a.264.264 0 0 0 .311.069.262.262 0 0 0 .09-.069l5.312-6.33a3.043 3.043 0 0 0 .68-2.573 3.118 3.118 0 0 0-2.551-2.463 3.079 3.079 0 0 0-2.612.816l-.007.007a1.501 1.501 0 0 1-2.045 0l-.009-.008a3.082 3.082 0 0 0-2.121-.861z"></path>
                                </svg>
                            </button>
                            <div className={styles['list-item-duration']}>
                                {calcTrackTime(item.track.duration_ms / 1000)}
                            </div>
                            <button
                                className={styles['list-item-more-info']}
                                type="button"
                                aria-haspopup="menu"
                                aria-label="Plus d'options pour Timber Hearth par Andrew Prahlow"
                                data-testid="more-button"
                                tabIndex="-1"
                                aria-expanded="false"
                            >
                                <svg
                                    role="img"
                                    height="16"
                                    width="16"
                                    aria-hidden="true"
                                    viewBox="0 0 16 16"
                                    data-encore-id="icon"
                                    className="Svg-sc-ytk21e-0 ldgdZj"
                                >
                                    <path d="M3 8a1.5 1.5 0 1 1-3 0 1.5 1.5 0 0 1 3 0zm6.5 0a1.5 1.5 0 1 1-3 0 1.5 1.5 0 0 1 3 0zM16 8a1.5 1.5 0 1 1-3 0 1.5 1.5 0 0 1 3 0z"></path>
                                </svg>
                            </button>
                        </div>
                    </li>
                );
            })}
        </ul>
    );
}

export default GenerateTrackList;
