import { useEffect, useRef } from 'react';
import styles from './ProgressBar.module.css';

import { useSelector } from 'react-redux';

import isTrackFinished from '../Logic/isTrackFinished';

import calcTrackTime from '../utils/calcTrackTime';

function ProgressBar() {
    const progressBar = useRef();

    const trackTime = useSelector(state => {
        return state.currentTrack.trackTime;
    });

    const totalTrackTime = useSelector(state => {
        return state.currentTrack.currentTrack?.track.duration_ms;
    });

    useEffect(() => {
        const pourcentage = (100 * trackTime) / (totalTrackTime / 1000);
        progressBar.current.style.transform = `translateX(calc(-100% - 1px + ${pourcentage}%))`;
        isTrackFinished();
    }, [trackTime]);

    return (
        <div className={styles['time-container']}>
            <div className={styles['time']}>{calcTrackTime(trackTime)}</div>
            <div className={styles['track-progress']}>
                {/* //TODO: adjust circle overflow*/}
                <div ref={progressBar} className={styles['progress-bar']}>
                    <div className={styles['cursor']}></div>
                </div>
            </div>
            <div className={styles['time']}>
                {calcTrackTime(totalTrackTime / 1000)}
            </div>
        </div>
    );
}

export default ProgressBar;
