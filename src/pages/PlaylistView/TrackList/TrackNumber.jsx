import { useSelector } from 'react-redux';
import handleResumeTrack from '../../Logic/handleResumeTrack';
import styles from './TrackNumber.module.css';

function TrackNumber(props) {
    const playState = useSelector(state => {
        return state.currentTrack.playState;
    });
    return (
        <div className={styles['list-item-number-container']}>
            <span className={styles['list-item-number']}>
                {props.index + 1}
            </span>
            <button
                onClick={() => {
                    handleResumeTrack(
                        props.playlistInfo,
                        props.index,
                        props.item,
                        props.type
                    );
                }}
                className={[
                    styles['list-item-play-btn'],
                    playState ? 'active-button' : '',
                ].join(' ')}
                tabIndex="-1"
                aria-expanded="false"
            >
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
                <svg
                    role="img"
                    height="16"
                    width="16"
                    aria-hidden="true"
                    viewBox="0 0 16 16"
                    data-encore-id="icon"
                >
                    <path d="M2.7 1a.7.7 0 0 0-.7.7v12.6a.7.7 0 0 0 .7.7h2.6a.7.7 0 0 0 .7-.7V1.7a.7.7 0 0 0-.7-.7H2.7zm8 0a.7.7 0 0 0-.7.7v12.6a.7.7 0 0 0 .7.7h2.6a.7.7 0 0 0 .7-.7V1.7a.7.7 0 0 0-.7-.7h-2.6z"></path>
                </svg>
            </button>
        </div>
    );
}

export default TrackNumber;
