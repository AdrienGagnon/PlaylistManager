import { NavLink } from 'react-router-dom';

import styles from './ArtistNames.module.css';
import handleSetPageContent from '../Logic/handleSetPageContent';

function ArtistNames(props) {
    return (
        <>
            {props.item.artists
                .map((artist, index) => {
                    return (
                        <NavLink
                            to={'/artist' + `/${artist.id}`}
                            onClick={() => handleSetPageContent(artist)}
                            key={index}
                            className={styles['list-item-info-artist']}
                        >
                            {artist.name}
                        </NavLink>
                    );
                })
                .reduce((prev, curr) => [
                    prev,
                    <p key={props.divisionSymbol}>{props.divisionSymbol}</p>,
                    curr,
                ])}
        </>
    );
}

export default ArtistNames;
