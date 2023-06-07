import { useSelector } from 'react-redux';
import { useEffect, useState } from 'react';

import styles from './ListOfCards.module.css';
import LoadingCards from './LoadingCards';
import TypeOfCard from './TypeOfCard';

function ListOfCards(props) {
    const [imgLoaded, setImgLoaded] = useState(false);
    const cardAmount = useSelector(state => {
        return state.cardAmount.cardAmount;
    });
    const [placeholderAmount, setPlaceholderamount] = useState();

    useEffect(() => {
        if (!props.content) return;
        const content = props.content?.albums
            ? props.content.albums
            : props.content.artists
            ? props.content.artists
            : props.content.playlists
            ? props.content.playlists
            : props.content;
        if (content.items && cardAmount > content?.items.length) {
            let placeHolderCards = [];
            for (let i = 0; i < cardAmount - content?.items.length; i++) {
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
    }, [cardAmount, props.content]);

    function handleCardImgLoad() {
        setImgLoaded(true);
    }

    return (
        <>
            <LoadingCards imgLoaded={imgLoaded} cardAmount={cardAmount} />
            <div
                className={[
                    styles['real-cards-container'],
                    imgLoaded ? '' : styles['hidden'],
                ].join(' ')}
            >
                {props.content && (
                    <TypeOfCard
                        info={props.info}
                        content={props.content}
                        cardAmount={cardAmount}
                        handleCardImgLoad={handleCardImgLoad}
                    />
                )}
                {placeholderAmount}
            </div>
        </>
    );
}

export default ListOfCards;
