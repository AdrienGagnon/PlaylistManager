import { useEffect, useRef } from 'react';

import styles from './PlaylistContent.module.css';

import ListOfPlaylists from './ListOfPlaylists';

function PlaylistContent(props) {
    const playlistsContainer = useRef();

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

    return (
        <ul className={styles['playlists-container']} ref={playlistsContainer}>
            <ListOfPlaylists
                accessToken={props.accessToken}
                type={props.type}
                objectType={props.objectType}
            />
        </ul>
    );
}

export default PlaylistContent;
