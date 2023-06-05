import './NowPlayingBar.css';
import styles from './NowPlayingBar.module.css';

import CurrentTrack from './CurrentTrack';
import TrackControls from './TrackControls';
import OtherControls from './OtherControls';
import CurrentTrackImage from './CurrentTrackImage';

function NowPlayingBar() {
    return (
        <footer className="now-playing-bar">
            <div className="wrapper-footer">
                <CurrentTrackImage />
                <div className={styles['info-current-track']}>
                    <CurrentTrack />
                </div>
                <div className={styles['control-current-track']}>
                    <TrackControls />
                </div>
                <div className={styles['other-controls']}>
                    <OtherControls />
                </div>
            </div>
        </footer>
    );
}

export default NowPlayingBar;
