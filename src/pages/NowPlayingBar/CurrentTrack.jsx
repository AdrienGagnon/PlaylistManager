import styles from './CurrentTrack.module.css';

import { useSelector } from 'react-redux';

function CurrentTrack() {
    const currentTrackInfo = useSelector(state => {
        return state.currentTrack;
    });

    return (
        <>
            <div className={styles['song-info']}>
                <span>{currentTrackInfo.currentTrack?.track.name}</span>
                <span>
                    {currentTrackInfo.currentTrack?.track.artists
                        .map(artist => {
                            return artist.name;
                        })
                        .join(', ')}
                </span>
            </div>
            {currentTrackInfo.currentTrack && (
                <>
                    <button
                        type="button"
                        role="switch"
                        aria-checked="false"
                        aria-label="Enregistrer dans la Bibliothèque"
                        className={styles['like']}
                        data-testid="add-button"
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
                    <button
                        data-testid="pip-toggle-button"
                        className={styles['photo-dans-photo']}
                        aria-expanded="false"
                    >
                        <div className="icon">
                            <svg
                                width="16"
                                height="16"
                                xmlns="http://www.w3.org/2000/svg"
                            >
                                <g fill="currentColor" fillRule="evenodd">
                                    <path
                                        d="M1 3v9h14V3H1zm0-1h14a1 1 0 0 1 1 1v10a1 1 0 0 1-1 1H1a1 1 0 0 1-1-1V3a1 1 0 0 1 1-1z"
                                        fillRule="nonzero"
                                    ></path>
                                    <path d="M10 8h4v3h-4z"></path>
                                </g>
                            </svg>
                        </div>
                    </button>
                </>
            )}
        </>
    );
}

export default CurrentTrack;
