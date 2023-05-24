import styles from './TrackTitleAndArtist.module.css';
import ArtistNames from '../../utils/ArtistNames';

function TrackTitleAndArtist(props) {
    return (
        <div className={styles['list-item-info']}>
            <span className={styles['list-item-info-track-name']}>
                {props.item.name}
            </span>
            <div className={styles['list-item-info-artists-container']}>
                <ArtistNames item={props.item} divisionSymbol={','} />
            </div>
        </div>
    );
}

export default TrackTitleAndArtist;
