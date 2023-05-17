import './PlaylistItem.css';

import { NavLink } from 'react-router-dom';

import handleSetPageContent from '../Logic/handleSetPageContent';

function PlaylistItem(props) {
    return (
        <li className={[props.playlist, 'playlistitem'].join(' ')}>
            <div>
                <h2>{props.title}</h2>
                <NavLink
                    onClick={() => handleSetPageContent(item)}
                    // to={'/section'}
                >
                    Tout afficher
                </NavLink>
            </div>
            {props.children}
        </li>
    );
}

export default PlaylistItem;
