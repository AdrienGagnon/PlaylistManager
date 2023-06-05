import { useSelector } from 'react-redux';

import styles from './CurrentTrackImage.module.css';

function CurrentTrackImage() {
    const currentTrackImage = useSelector(state => {
        return state.currentTrack.currentTrack?.track?.album
            ? state.currentTrack.currentTrack?.track?.album?.images[1].url
            : state.currentTrack.currentPlaylist?.images[1].url;
    });
    return (
        <>
            {currentTrackImage && (
                <img
                    className={styles['current-track-img']}
                    src={currentTrackImage}
                    alt=""
                />
            )}
        </>
    );
}

export default CurrentTrackImage;
