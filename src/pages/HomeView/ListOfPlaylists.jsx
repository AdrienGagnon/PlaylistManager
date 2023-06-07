import { useSelector } from 'react-redux';
import { useEffect, useState } from 'react';

import styles from './ListOfPlaylists.module.css';
import Card from '../Card/Card';
import CardContent from '../Card/CardContent';

function ListOfPlaylists(props) {
    const [imgLoaded, setImgLoaded] = useState(false);
    const cardAmount = useSelector(state => {
        return state.cardAmount.cardAmount;
    });
    const [placeholderAmount, setPlaceholderamount] = useState();

    useEffect(() => {
        if (
            props.playlistContent?.items &&
            cardAmount > props.playlistContent?.items.length
        ) {
            let placeHolderCards = [];
            for (
                let i = 0;
                i < cardAmount - props.playlistContent?.items.length;
                i++
            ) {
                placeHolderCards.push(
                    <div
                        key={i}
                        className={[styles.cardPlaceholder, styles.hidden].join(
                            ' '
                        )}
                    ></div>
                );
            }

            setPlaceholderamount(placeHolderCards);
        } else {
            if (placeholderAmount) {
                setPlaceholderamount(undefined);
            }
        }
    }, [cardAmount, props.playlistContent?.items]);

    function handleCardImgLoad() {
        setImgLoaded(true);
    }

    let placeHolderArray = [];
    for (let i = 0; i < cardAmount; i++) {
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
                        .slice(0, cardAmount)
                        .map(item => {
                            if (item.album) {
                                item = item.album;
                            }
                            return (
                                <Card
                                    key={item.id}
                                    item={item}
                                    linkTo={props.playlistContent.linkTo}
                                >
                                    <CardContent
                                        item={item}
                                        playlistContent={props.playlistContent}
                                        handleCardImgLoad={handleCardImgLoad}
                                    />
                                </Card>
                            );
                        })}
                {placeholderAmount}
            </div>
        </>
    );
}

export default ListOfPlaylists;
