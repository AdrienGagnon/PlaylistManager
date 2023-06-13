import { useSelector } from 'react-redux';

import styles from './TrackArtist.module.css';

function TrackArtist() {
    const trackArtist = useSelector(state => {
        return state.trackArtist.artistInfo;
    });
    console.log(trackArtist);
    return (
        <div className={styles['artist-info-container']}>
            {trackArtist && (
                <>
                    <img
                        className={styles['artist-info-img']}
                        src={
                            trackArtist.images[2]
                                ? trackArtist.images[2].url
                                : trackArtist.images[0].url
                        }
                        alt="artist-profil-img"
                    />
                    <div className={styles['artist-container']}>
                        <span>Artiste</span>
                        <span>{trackArtist.name}</span>
                    </div>
                </>
            )}
        </div>
    );
}

export default TrackArtist;
