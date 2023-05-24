import styles from './TrackMainInfo.module.css';

import TrackTitleAndArtist from './TrackTitleAndArtist';

function TrackMainInfo(props) {
    return (
        <div className={styles['list-item-info-container']}>
            <img
                className={styles['list-item-playlist-img']}
                src={props.item.album.images[2].url}
                alt="playlist-img"
            />
            <TrackTitleAndArtist item={props.item} />
        </div>
    );
}

export default TrackMainInfo;
