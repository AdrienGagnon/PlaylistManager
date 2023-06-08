import styles from './InfoLine.module.css';

import InfoLineAlbum from './InfoLineAlbum';
import InfoLineArtist from './InfoLineArtist';
import InfoLinePlaylist from './InfoLinePlaylist';

function InfoLine(props) {
    return (
        <div className={styles['info-playlist-other-container']}>
            {props.option === 'album' && (
                <InfoLineAlbum contentInfo={props.playlistInfo} />
            )}
            {props.option === 'artist' && (
                <InfoLineArtist contentInfo={props.playlistInfo} />
            )}
            {props.option === 'playlist' && (
                <InfoLinePlaylist contentInfo={props.playlistInfo} />
            )}
        </div>
    );
}

export default InfoLine;
