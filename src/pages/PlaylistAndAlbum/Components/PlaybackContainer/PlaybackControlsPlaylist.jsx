import { useEffect, useState } from 'react';
import { useSelector } from 'react-redux';

import styles from './PlaybackControlsPlaylist.module.css';
import handleResumeTrack from '../../../Logic/handleResumeTrack';
import fetchWebApi from '../../../Data/fetchWebApi';
import handleFollowArtist from '../../../Logic/handleFollowArtist';

function PlaybackControlsPlaylist(props) {
    const [followArtist, setFollowArtist] = useState();
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
    }, []);

    async function getFollowStatus() {
        const followStatus = await fetchWebApi(
            `v1/me/following/contains?type=artist&ids=${props.playlistInfo.id}`,
            'GET'
        );
        setFollowArtist(followStatus);
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
                    if (props.option === 'artist') return; // TODO: play the recommanded tracks
                    handleResumeTrack(
                        pageContent,
                        0,
                        undefined,
                        props.option + 's'
                    );
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
