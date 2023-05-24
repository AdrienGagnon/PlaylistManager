import styles from './TrackTitleAndArtist.module.css';

function TrackTitleAndArtist(props) {
    return (
        <div className={styles['list-item-info']}>
            <span className={styles['list-item-info-track-name']}>
                {props.item.name}
            </span>
            <div className={styles['list-item-info-artists-container']}>
                {props.item.artists
                    .map(artist => {
                        return (
                            <span
                                key={artist.name}
                                className={styles['list-item-info-artist']}
                            >
                                {artist.name}
                            </span>
                        );
                    })
                    .reduce((prev, curr) => [prev, <p>{','}</p>, curr])}
            </div>
        </div>
    );
}

export default TrackTitleAndArtist;
