import { useEffect, useRef, useState } from 'react';

import styles from './PlaylistContent.module.css';

import ListOfPlaylists from './ListOfPlaylists';
import handleCardAmount from '../utils/handleCardAmount';

function PlaylistContent(props) {
    const playlistsContainer = useRef();
    const [cardAmount, setCardAmount] = useState(5);

    useEffect(() => {
        handleCardAmount(playlistsContainer, cardAmount, setCardAmount);

        window.addEventListener('resize', () => {
            handleCardAmount(playlistsContainer, cardAmount, setCardAmount);
        });
        // return () => {
        //     window.removeEventListener('resize', () => {
        //         handleCardAmount(playlistsContainer, cardAmount, setCardAmount);
        //     });
        // };
    }, []);

    return (
        <ul className={styles['playlists-container']} ref={playlistsContainer}>
            <ListOfPlaylists
                accessToken={props.accessToken}
                type={props.type}
                objectType={props.objectType}
                cardAmount={cardAmount}
                playlistContent={props.playlistContent}
            />
        </ul>
    );
}

export default PlaylistContent;
