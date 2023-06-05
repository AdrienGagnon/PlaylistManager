import { useSelector } from 'react-redux';

import handleResumeTrack from '../Logic/handleResumeTrack';
import styles from './CardImg.module.css';

function CardImg(props) {
    const currentTrack = useSelector(state => {
        return state.currentTrack;
    });

    return (
        <div className={styles['img-playlist-container']}>
            <img
                className={styles['img-playlist-list']}
                src={props.item.images[0]?.url}
                alt=""
                onLoad={() => {
                    props.handleCardImgLoad();
                }}
            />
            {props.linkTo !== '/artist' && (
                <button
                    data-testid="play-button"
                    aria-label="Faire jouer Mix quotidien 1"
                    data-encore-id="buttonPrimary"
                    className={styles['play-button']}
                    onClick={e => {
                        e.preventDefault();
                        e.stopPropagation();
                        handleResumeTrack(
                            props.item,
                            0,
                            undefined,
                            props.linkTo === '/playlist'
                                ? 'playlists'
                                : 'albums'
                        );
                    }}
                >
                    <span aria-hidden="true">
                        {(!currentTrack.playState ||
                            currentTrack.currentPlaylist?.id !==
                                props.item.id) && (
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
                        {currentTrack.playState &&
                            currentTrack.currentPlaylist?.id ===
                                props.item.id && (
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
            )}
        </div>
    );
}

export default CardImg;
