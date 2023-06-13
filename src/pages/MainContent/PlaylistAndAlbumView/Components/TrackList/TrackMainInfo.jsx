import styles from './TrackMainInfo.module.css';

import TrackTitleAndArtist from './TrackTitleAndArtist';
import TrackImg from './TrackImg';

function TrackMainInfo(props) {
    return (
        <div className={styles['list-item-info-container']}>
            <TrackImg images={props.item.album.images} />
            <TrackTitleAndArtist item={props.item} type={'playlist'} />
        </div>
    );
}

export default TrackMainInfo;
