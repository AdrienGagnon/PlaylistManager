import styles from './LoadingCards.module.css';

function LoadingCards(props) {
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
        <div
            className={[
                styles['loading-card-container'],
                props.imgLoaded ? styles['hidden'] : '',
            ].join(' ')}
        >
            {placeHolderArray}
        </div>
    );
}

export default LoadingCards;
