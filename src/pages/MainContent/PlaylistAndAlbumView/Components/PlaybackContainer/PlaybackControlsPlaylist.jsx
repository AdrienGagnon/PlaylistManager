import { useEffect, useState } from 'react';
import { useSelector } from 'react-redux';

import styles from './PlaybackControlsPlaylist.module.css';
import handleResumeTrack from '../../../../Logic/handleResumeTrack';
import fetchWebApi from '../../../../Data/fetchWebApi';
import handleFollowArtist from '../../../../Logic/handleFollowArtist';

function PlaybackControlsPlaylist(props) {
    const [followArtist, setFollowArtist] = useState();
    const [savedContent, setSavedContent] = useState();
    const pageContent = useSelector(state => {
        return state.pageContent.pageContent;
    });
    const currentTrack = useSelector(state => {
        return state.currentTrack;
    });

    useEffect(() => {
        if (props.option === 'artist') {
            getFollowStatus();
        }
        if (props.option === 'track') {
            getSavedContentStatus();
        }
    }, []);

    async function getFollowStatus() {
        const followStatus = await fetchWebApi(
            `v1/me/following/contains?type=artist&ids=${props.playlistInfo.id}`,
            'GET'
        );
        setFollowArtist(followStatus);
    }
    async function getSavedContentStatus() {
        const savedContentStatus = await fetchWebApi(
            `v1/me/tracks/contains?ids=${props.playlistInfo.id}`,
            'GET'
        );
        setSavedContent(savedContentStatus);
    }

    return (
        <div className={styles['play-btn-container']}>
            <button
                data-testid="play-button"
                aria-label="Faire jouer"
                data-encore-id="buttonPrimary"
                className={styles['play-button']}
                onClick={e => {
                    e.stopPropagation();
                    if (props.option === 'artist') {
                        //TODO: fix correct object
                        handleResumeTrack(
                            props.popularContent.tracks,
                            0,
                            undefined,
                            'artists'
                        );
                    } else {
                        handleResumeTrack(
                            pageContent,
                            0,
                            undefined,
                            props.option + 's'
                        );
                    }
                }}
            >
                <span aria-hidden="true">
                    {(!currentTrack.playState ||
                        currentTrack.currentPlaylist?.id !==
                            pageContent.id) && (
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
                    {currentTrack.playState &&
                        currentTrack.currentPlaylist?.id === pageContent.id && (
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
            {props.option === 'artist' && (
                <button
                    onClick={() =>
                        handleFollowArtist(props.playlistInfo, followArtist)
                    }
                    className={styles['follow-btn']}
                >
                    {followArtist ? 'SUIVIS' : 'SUIVRE'}
                </button>
            )}
            {props.option === 'track' &&
                (savedContent ? (
                    <button
                        type="button"
                        role="switch"
                        aria-checked="true"
                        aria-label="Supprimer de la Bibliothèque"
                        data-testid="add-button"
                        aria-expanded="false"
                        className={styles['delete-content']}
                    >
                        <svg
                            role="img"
                            height="32"
                            width="32"
                            aria-hidden="true"
                            viewBox="0 0 24 24"
                            data-encore-id="icon"
                        >
                            <path d="M8.667 1.912a6.257 6.257 0 0 0-7.462 7.677c.24.906.683 1.747 1.295 2.457l7.955 9.482a2.015 2.015 0 0 0 3.09 0l7.956-9.482a6.188 6.188 0 0 0 1.382-5.234l-.49.097.49-.099a6.303 6.303 0 0 0-5.162-4.98h-.002a6.24 6.24 0 0 0-5.295 1.65.623.623 0 0 1-.848 0 6.257 6.257 0 0 0-2.91-1.568z"></path>
                        </svg>
                    </button>
                ) : (
                    <button
                        type="button"
                        role="switch"
                        aria-checked="false"
                        aria-label="Enregistrer dans la Bibliothèque"
                        data-testid="add-button"
                        aria-expanded="false"
                        className={styles['save-content']}
                    >
                        <svg
                            role="img"
                            height="32"
                            width="32"
                            aria-hidden="true"
                            viewBox="0 0 24 24"
                            data-encore-id="icon"
                        >
                            <path d="M5.21 1.57a6.757 6.757 0 0 1 6.708 1.545.124.124 0 0 0 .165 0 6.741 6.741 0 0 1 5.715-1.78l.004.001a6.802 6.802 0 0 1 5.571 5.376v.003a6.689 6.689 0 0 1-1.49 5.655l-7.954 9.48a2.518 2.518 0 0 1-3.857 0L2.12 12.37A6.683 6.683 0 0 1 .627 6.714 6.757 6.757 0 0 1 5.21 1.57zm3.12 1.803a4.757 4.757 0 0 0-5.74 3.725l-.001.002a4.684 4.684 0 0 0 1.049 3.969l.009.01 7.958 9.485a.518.518 0 0 0 .79 0l7.968-9.495a4.688 4.688 0 0 0 1.049-3.965 4.803 4.803 0 0 0-3.931-3.794 4.74 4.74 0 0 0-4.023 1.256l-.008.008a2.123 2.123 0 0 1-2.9 0l-.007-.007a4.757 4.757 0 0 0-2.214-1.194z"></path>
                        </svg>
                    </button>
                ))}
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
