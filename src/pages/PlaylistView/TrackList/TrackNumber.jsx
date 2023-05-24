import styles from './TrackNumber.module.css';

function TrackNumber(props) {
    return (
        <div className={styles['list-item-number-container']}>
            <span className={styles['list-item-number']}>
                {props.index + 1}
            </span>
            <button
                className={styles['list-item-play-btn']}
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
            </button>
        </div>
    );
}

export default TrackNumber;
