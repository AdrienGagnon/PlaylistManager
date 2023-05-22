import { useSelector } from 'react-redux';

import handleResumeTrack from '../Logic/handleResumeTrack';
import styles from './CardItem.module.css';

function CardItem(props) {
    const playState = useSelector(state => {
        return state.currentTrack.playState;
    });

    return (
        <div className={styles['img-playlist-container']}>
            <img
                className={styles['img-playlist-list']}
                src={props.item.images[0]?.url}
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
                    handleResumeTrack(props.item);
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

export default CardItem;
