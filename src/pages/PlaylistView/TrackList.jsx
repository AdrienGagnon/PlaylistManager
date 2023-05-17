import styles from './TrackList.module.css';

import GenerateTrackList from './GenerateTrackList';

function TrackList(props) {
    return (
        <div className={styles['list-section-container']}>
            <div className={styles['colomn-titles-container']}>
                <span>#</span>
                <span>Titre</span>
                <span className={styles['list-item-album']}>Album</span>
                <span className={styles['list-item-date']}>
                    Date de l'ajout
                </span>
                <svg
                    className={styles['list-item-duration']}
                    role="img"
                    height="16"
                    width="16"
                    aria-hidden="true"
                    viewBox="0 0 16 16"
                    data-encore-id="icon"
                >
                    <path d="M8 1.5a6.5 6.5 0 1 0 0 13 6.5 6.5 0 0 0 0-13zM0 8a8 8 0 1 1 16 0A8 8 0 0 1 0 8z"></path>
                    <path d="M8 3.25a.75.75 0 0 1 .75.75v3.25H11a.75.75 0 0 1 0 1.5H7.25V4A.75.75 0 0 1 8 3.25z"></path>
                </svg>
            </div>
            <GenerateTrackList playlistInfo={props.playlistInfo} />
        </div>
    );
}

export default TrackList;
