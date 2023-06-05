import styles from './PlaylistContent.module.css';

import ListOfPlaylists from './ListOfPlaylists';

function PlaylistContent(props) {
    return (
        <ul className={styles['playlists-container']}>
            <ListOfPlaylists
                type={props.type}
                playlistContent={props.playlistContent}
            />
        </ul>
    );
}

export default PlaylistContent;
