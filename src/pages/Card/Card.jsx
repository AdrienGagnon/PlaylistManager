import { NavLink } from 'react-router-dom';

import styles from './Card.module.css';
import handleSetPageContent from '../Logic/handleSetPageContent';

function Card(props) {
    const content = props.item.playlists
        ? props.item.playlists
        : props.item.album
        ? props.item.album
        : props.item;

    return (
        <NavLink
            onClick={() => handleSetPageContent(content)}
            to={props.linkTo}
            key={content.name}
            className={[
                styles['card'],
                props.linkTo === '/artist' ? styles['artist'] : '',
            ].join(' ')}
        >
            {props.children}
        </NavLink>
    );
}

export default Card;
