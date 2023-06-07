import { NavLink } from 'react-router-dom';

import styles from './Card.module.css';
import handleSetPageContent from '../Logic/handleSetPageContent';

// Requires the following arguments:
// item={item} (this card content)
// linkTo={props.linkTo}

function Card(props) {
    return (
        <NavLink
            onClick={() => handleSetPageContent(props.item)}
            to={props.linkTo}
            key={props.item.name}
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
