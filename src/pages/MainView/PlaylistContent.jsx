import styles from './PlaylistContent.module.css';

import ListOfPlaylists from './ListOfPlaylists';

function PlaylistContent(props) {
    return (
        <ul className={styles['playlists-container']}>
            <ListOfPlaylists
                accessToken={props.accessToken}
                type={props.type}
                objectType={props.objectType}
                playlistContent={props.playlistContent}
            />
        </ul>
    );
}

export default PlaylistContent;
