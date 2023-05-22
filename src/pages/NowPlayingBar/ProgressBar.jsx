import { useEffect, useRef } from 'react';
import styles from './ProgressBar.module.css';

import { useSelector } from 'react-redux';

import { useDispatch } from 'react-redux';

import { trackTimeActions } from '../../store/trackTime-slice';

import calcTrackTime from '../utils/calcTrackTime';

function ProgressBar() {
    const progressBar = useRef();

    const dispatch = useDispatch();

    const trackTime = useSelector(state => {
        return state.trackTime.trackTime;
    });

    const totalTrackTime = useSelector(state => {
        return state.currentTrack.currentTrack?.track.duration_ms;
    });

    useEffect(() => {
        const pourcentage = (100 * trackTime) / (totalTrackTime / 1000);
        progressBar.current.style.transform = `translateX(calc(-100% - 1px + ${pourcentage}%))`;
    }, [trackTime]);

    function handleTrackProgressLocation(e) {
        if (!totalTrackTime) return;
        const target = e.target.closest('.track-progress');
        const info = target.getBoundingClientRect();
        const progressPourcentage = Math.min(
            Math.max(0, (e.clientX - info.left) / info.width),
            1
        );
        const newTimeSec = (progressPourcentage * totalTrackTime) / 1000;
        dispatch(trackTimeActions.ManualUpdateTrackTime(newTimeSec));
        dispatch(trackTimeActions.UpdateTrackTime(newTimeSec));
    }

    return (
        <div className={styles['time-container']}>
            <div className={styles['time']}>{calcTrackTime(trackTime)}</div>
            <div
                onClick={e => handleTrackProgressLocation(e)}
                className={['track-progress', styles['track-progress']].join(
                    ' '
                )}
            >
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
