import { useState, useEffect, useRef } from 'react';

import { useSelector } from 'react-redux';

import { NavLink } from 'react-router-dom';

import fetchWebApi from '../Data/fetchWebApi';

import handleResumeTrack from '../Logic/handleResumeTrack';

import handleSetPageContent from '../Logic/handleSetPageContent';

import styles from './PlaylistContent.module.css';

function PlaylistContent(props) {
    const [playlistContent, setPlaylistContent] = useState();
    const playlistsContainer = useRef();

    const playState = useSelector(state => {
        return state.currentTrack.playState;
    });

    useEffect(() => {
        getPlaylistContent();
    }, [props.accessToken]);

    useEffect(() => {
        resizePLaylists();
        window.addEventListener('resize', resizePLaylists);
        return () => window.removeEventListener('resize', resizePLaylists);
    }, []);

    // TODO: Resize needs rework to take changes to layout in account
    function resizePLaylists() {
        playlistsContainer.current.style.maxWidth =
            window.innerWidth -
            document.querySelector('nav').clientWidth -
            46 +
            'px';
    }

    async function getPlaylistContent() {
        setPlaylistContent(await fetchWebApi(props.type, 'GET'));
    }

    function generateYourPlaylistInfo() {
        if (!playlistContent)
            return <div>Vous n'avez pas encore de liste de lecture.</div>;
        return playlistContent?.items.map(item => {
            return (
                <NavLink
                    onClick={() => handleSetPageContent(item)}
                    to={'/playlist'}
                    key={item.name}
                    className={styles['card']}
                >
                    {ImageMiniPlaylist(item)}
                    <p>{item.name}</p>
                </NavLink>
            );
        });
    }

    function ImageMiniPlaylist(item) {
        return (
            <div className={styles['img-playlist-container']}>
                <img
                    className={styles['img-playlist-list']}
                    src={item.images[0]?.url}
                    alt=""
                />
                <button
                    data-testid="play-button"
                    aria-label="Faire jouer Mix quotidien 1"
                    data-encore-id="buttonPrimary"
                    className={styles['play-button']}
                    onClick={e => {
                        e.preventDefault();
                        e.stopPropagation();
                        handleResumeTrack(item);
                    }}
                >
                    <span aria-hidden="true">
                        {!playState && (
                            <svg
                                role="img"
                                height="24"
                                width="24"
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
                                height="24"
                                width="24"
                                aria-hidden="true"
                                viewBox="0 0 24 24"
                                data-encore-id="icon"
                            >
                                <path d="M5.7 3a.7.7 0 0 0-.7.7v16.6a.7.7 0 0 0 .7.7h2.6a.7.7 0 0 0 .7-.7V3.7a.7.7 0 0 0-.7-.7H5.7zm10 0a.7.7 0 0 0-.7.7v16.6a.7.7 0 0 0 .7.7h2.6a.7.7 0 0 0 .7-.7V3.7a.7.7 0 0 0-.7-.7h-2.6z"></path>
                            </svg>
                        )}
                    </span>
                </button>
            </div>
        );
    }

    function generatePlaylistInfo() {
        if (!playlistContent) return <div>Chargement...</div>;
        return playlistContent?.playlists.items.map(item => {
            return (
                <NavLink
                    onClick={() => handleSetPageContent(item)}
                    to={'/playlist'}
                    key={item.name}
                    className={styles['card']}
                >
                    {ImageMiniPlaylist(item)}
                    <p>{item.name}</p>
                </NavLink>
            );
        });
    }

    return (
        <ul className={styles['playlists-container']} ref={playlistsContainer}>
            {props.type === 'v1/me/playlists'
                ? generateYourPlaylistInfo()
                : generatePlaylistInfo()}
        </ul>
    );
}

export default PlaylistContent;
