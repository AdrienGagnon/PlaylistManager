import styles from './PlaybackControlsPlaylist.module.css';

import { useSelector } from 'react-redux';

import handleResumeTrack from '../../Logic/handleResumeTrack';

function PlaybackControlsPlaylist() {
    const pageContent = useSelector(state => {
        return state.pageContent.pageContent;
    });

    const playState = useSelector(state => {
        return state.currentTrack.playState;
    });

    return (
        <div className={styles['play-btn-container']}>
            <button
                data-testid="play-button"
                aria-label="Faire jouer"
                data-encore-id="buttonPrimary"
                className={styles['play-button']}
                onClick={e => {
                    e.stopPropagation();
                    handleResumeTrack(pageContent);
                }}
            >
                <span aria-hidden="true">
                    {!playState && (
                        <svg
                            role="img"
                            height="28"
                            width="28"
                            aria-hidden="true"
                            viewBox="0 0 24 24"
                            data-encore-id="icon"
                        >
                            <path d="m7.05 3.606 13.49 7.788a.7.7 0 0 1 0 1.212L7.05 20.394A.7.7 0 0 1 6 19.788V4.212a.7.7 0 0 1 1.05-.606z"></path>
                        </svg>
                    )}
                    {playState && (
                        <svg
                            role="img"
                            height="28"
                            width="28"
                            aria-hidden="true"
                            viewBox="0 0 24 24"
                            data-encore-id="icon"
                        >
                            <path d="M5.7 3a.7.7 0 0 0-.7.7v16.6a.7.7 0 0 0 .7.7h2.6a.7.7 0 0 0 .7-.7V3.7a.7.7 0 0 0-.7-.7H5.7zm10 0a.7.7 0 0 0-.7.7v16.6a.7.7 0 0 0 .7.7h2.6a.7.7 0 0 0 .7-.7V3.7a.7.7 0 0 0-.7-.7h-2.6z"></path>
                        </svg>
                    )}
                </span>
            </button>
            <button
                className={styles['more-options-btn']}
                type="button"
                aria-haspopup="menu"
                aria-label="Plus d'options pour Soundtrack à Di"
                data-testid="more-button"
                aria-expanded="false"
            >
                <svg
                    role="img"
                    height="32"
                    width="32"
                    aria-hidden="true"
                    viewBox="0 0 24 24"
                    data-encore-id="icon"
                >
                    <path d="M4.5 13.5a1.5 1.5 0 1 0 0-3 1.5 1.5 0 0 0 0 3zm15 0a1.5 1.5 0 1 0 0-3 1.5 1.5 0 0 0 0 3zm-7.5 0a1.5 1.5 0 1 0 0-3 1.5 1.5 0 0 0 0 3z"></path>
                </svg>
            </button>
        </div>
    );
}

export default PlaybackControlsPlaylist;
