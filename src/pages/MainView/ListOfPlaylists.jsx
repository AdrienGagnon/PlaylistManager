import { useState } from 'react';

import styles from './ListOfPlaylists.module.css';
import Card from '../components/Card';

function ListOfPlaylists(props) {
    const [imgLoaded, setImgLoaded] = useState(false);

    function handleCardImgLoad() {
        setImgLoaded(true);
    }

    let placeHolderArray = [];
    for (let i = 0; i < props.cardAmount; i++) {
        placeHolderArray.push(
            <div key={i}>
                <div className={styles['loading-card-img']}></div>
                <div className={styles['loading-card-title']}></div>
                <div className={styles['loading-card-artist']}></div>
            </div>
        );
    }

    return (
        <>
            <div
                className={[
                    styles['loading-card-container'],
                    imgLoaded ? styles['hidden'] : '',
                ].join(' ')}
            >
                {placeHolderArray}
            </div>
            <div
                className={[
                    styles['real-cards-container'],
                    imgLoaded ? '' : styles['hidden'],
                ].join(' ')}
            >
                {props.playlistContent?.items &&
                    props.playlistContent.items
                        .slice(0, props.cardAmount)
                        .map(item => {
                            if (item.album) {
                                item = item.album;
                            }
                            return (
                                <Card
                                    key={item.name}
                                    item={item}
                                    playlistContent={props.playlistContent}
                                    handleCardImgLoad={handleCardImgLoad}
                                />
                            );
                        })}
            </div>
        </>
    );
}

export default ListOfPlaylists;
