import { NavLink } from 'react-router-dom';

import styles from './TrackTitleAndArtist.module.css';
import ArtistNames from '../../../../utils/ArtistNames';
import handleSetPageContent from '../../../../Logic/handleSetPageContent';

function TrackTitleAndArtist(props) {
    return (
        <div className={styles['list-item-info']}>
            <NavLink
                to={'/track/' + props.item.id}
                onClick={() => handleSetPageContent(props.item.album)}
                className={styles['list-item-info-track-name']}
            >
                {props.item.name}
            </NavLink>
            <div className={styles['list-item-info-artists-container']}>
                <ArtistNames item={props.item} divisionSymbol={','} />
            </div>
        </div>
    );
}

export default TrackTitleAndArtist;
