import './PlaylistItem.css';

function PlaylistItem(props) {
    return (
        <li className={[props.playlist, 'playlistitem'].join(' ')}>
            <h2>{props.title}</h2>
            {props.children}
        </li>
    );
}

export default PlaylistItem;
