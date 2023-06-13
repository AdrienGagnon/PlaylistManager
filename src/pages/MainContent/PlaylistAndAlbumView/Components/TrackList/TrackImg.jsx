import styles from './TrackImg.module.css';

function TrackImg(props) {
    return (
        <img
            className={styles['list-item-playlist-img']}
            src={props.images[2].url}
            alt="playlist-img"
        />
    );
}

export default TrackImg;
