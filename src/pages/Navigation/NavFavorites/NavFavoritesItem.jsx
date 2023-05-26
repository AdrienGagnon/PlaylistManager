import { NavLink } from 'react-router-dom';

import styles from './NavFavoritesItem.module.css';
import handleSetPageContent from '../../Logic/handleSetPageContent';

function NavFavoritesItem(props) {
    return (
        <NavLink
            onClick={() => {
                handleSetPageContent(props.album);
            }}
            to={props.linkTo}
            className={styles['favorites-item-container']}
        >
            <img
                onLoad={() => {
                    props.handleCardImgLoad();
                }}
                src={
                    props.album?.images[2]
                        ? props.album.images[2].url
                        : props.album?.images[0].url
                }
                alt="album-img"
            />
            <div className={styles['favorites-item-info-container']}>
                <span className={styles['favorites-item-info-album-name']}>
                    {props.album.name}
                </span>
                <div
                    className={styles['favorites-item-info-artists-container']}
                >
                    <span>
                        {props.type === 'album' && 'Album'}
                        {props.type === 'playlist' && 'Liste de lecture'}
                    </span>
                    <span>
                        {props.type === 'playlist' &&
                            props.album.owner.display_name}
                        {props.type === 'album' &&
                            props.album.artists
                                .map(artist => {
                                    return (
                                        <span
                                            key={artist.id}
                                            className={
                                                styles['list-item-info-artist']
                                            }
                                        >
                                            {artist.name}
                                        </span>
                                    );
                                })
                                .reduce((prev, curr) => [prev, ', ', curr])}
                    </span>
                </div>
            </div>
        </NavLink>
    );
}

export default NavFavoritesItem;
