import { useEffect, useRef } from 'react';
import styles from './ProgressBar.module.css';

import { useSelector } from 'react-redux';

import isTrackFinished from '../Logic/isTrackFinished';

function ProgressBar() {
    const progressBar = useRef();

    const trackTime = useSelector(state => {
        return state.currentTrack.trackTime;
    });

    const totalTrackTime = useSelector(state => {
        return state.currentTrack.currentTrack?.track.duration_ms;
    });

    function calcTime(time) {
        if (!time) return `0:00`;
        const min = Math.floor(time / 60);
        const sec = Math.floor(time % 60);
        return `${min ? min : '0'}:${sec < 10 ? '0' : ''}${sec}`;
    }

    useEffect(() => {
        const pourcentage = (100 * trackTime) / (totalTrackTime / 1000);
        progressBar.current.style.transform = `translateX(calc(-100% - 1px + ${pourcentage}%))`;
        isTrackFinished();
    }, [trackTime]);

    return (
        <div className={styles['time-container']}>
            <div className={styles['time']}>{calcTime(trackTime)}</div>
            <div className={styles['track-progress']}>
                {/* //TODO: adjust circle overflow*/}
                <div ref={progressBar} className={styles['progress-bar']}>
                    <div className={styles['cursor']}></div>
                </div>
            </div>
            <div className={styles['time']}>
                {calcTime(totalTrackTime / 1000)}
            </div>
        </div>
    );
}

export default ProgressBar;
