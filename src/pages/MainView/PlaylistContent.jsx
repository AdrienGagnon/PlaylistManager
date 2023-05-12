import { useState, useEffect, useRef } from 'react';

import fetchWebApi from '../Data/fetchWebApi';

import styles from './PlaylistContainer.module.css';

function PlaylistContent(props) {
    const [playlistContent, setPlaylistContent] = useState();
    const playlistsContainer = useRef();

    useEffect(() => {
        getPlaylistContent();
    }, [props.accessToken]);

    useEffect(() => {
        resizePLaylists();
        window.addEventListener('resize', () => {
            resizePLaylists();
        });
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
                <div key={item.name}>
                    <img
                        className={styles['img-playlist-list']}
                        src={item.images[0]?.url}
                        alt=""
                    />
                    <p>{item.name}</p>
                </div>
            );
        });
    }

    function generatePlaylistInfo() {
        if (!playlistContent) return <div>Chargement...</div>;
        return playlistContent?.playlists.items.map(item => {
            return (
                <div key={item.name}>
                    <img
                        className={styles['img-playlist-list']}
                        src={item.images[0]?.url}
                        alt=""
                    />
                    <p>{item.name}</p>
                </div>
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
