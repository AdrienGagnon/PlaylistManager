import { NavLink } from 'react-router-dom';

import styles from './Card.module.css';
import handleSetPageContent from '../Logic/handleSetPageContent';
import CardImg from './CardImg';

// Requires the following arguments:
// item={item} (this card content)
// playlistContent={props.playlistContent} ([items] optionnal and 'linkTo' required)
// handleCardImgLoad={handleCardImgLoad} (function to execute when loaded)

function Card(props) {
    return (
        <NavLink
            onClick={() => handleSetPageContent(props.item)}
            to={props.playlistContent.linkTo}
            key={props.item.name}
            className={[
                styles['card'],
                props.playlistContent.linkTo === '/artist'
                    ? styles['artist']
                    : '',
            ].join(' ')}
        >
            <CardImg
                item={props.item}
                linkTo={props.playlistContent.linkTo}
                handleCardImgLoad={props.handleCardImgLoad}
            />
            <p>{props.item.name}</p>
            <p className={styles['artist-names']}>
                {props.playlistContent.linkTo === '/album' &&
                    props.item.artists
                        .map(artist => {
                            return artist.name;
                        })
                        .join(', ')}
                {props.playlistContent.linkTo === '/playlist' &&
                    props.item.owner?.display_name}
                {props.playlistContent.linkTo === '/artist' && 'Artiste'}
            </p>
        </NavLink>
    );
}

export default Card;
