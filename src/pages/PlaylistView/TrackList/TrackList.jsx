import styles from './TrackList.module.css';

import ListColTitles from './ListColTitles';
import GenerateTrackList from './GenerateTrackList';

function TrackList(props) {
    return (
        <div className={styles['list-section-container']}>
            <ListColTitles
                playlistInfo={props.playlistInfo}
                option={props.option}
            />
            <GenerateTrackList
                playlistInfo={props.playlistInfo}
                option={props.option}
            />
        </div>
    );
}

export default TrackList;
