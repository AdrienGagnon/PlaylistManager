import './PlaylistItem.css';

function PlaylistItem(props) {
    return (
        <li className={[props.playlist, 'playlistitem'].join(' ')}>
            <div>
                <h2>{props.title}</h2>
                <p>Tout afficher</p>
            </div>
            {props.children}
        </li>
    );
}

export default PlaylistItem;
