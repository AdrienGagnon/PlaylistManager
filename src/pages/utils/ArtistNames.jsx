import styles from './ArtistNames.module.css';

function ArtistNames(props) {
    return (
        <>
            {props.item.artists
                .map((artist, index) => {
                    return (
                        <span
                            key={index}
                            className={styles['list-item-info-artist']}
                        >
                            {artist.name}
                        </span>
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
