import styles from './GenerateTrackList.module.css';

function GenerateTrackList(props) {
    console.log(props.playlistInfo.tracks.items[0]);
    return (
        <ul>
            {props.playlistInfo.tracks.items.map((item, index) => {
                return (
                    <li
                        key={item.name}
                        className={styles['list-item-container']}
                    >
                        <div className={styles['list-item-number']}>
                            {index}
                        </div>
                        <div className={styles['list-item-info']}>
                            {item.track.name}
                        </div>
                        <div className={styles['list-item-album']}>
                            {item.track.album.name}
                        </div>
                        <div className={styles['list-item-date']}>
                            {item.track.name}
                        </div>
                        <div className={styles['list-item-duration']}></div>
                    </li>
                );
            })}
        </ul>
    );
}

export default GenerateTrackList;
