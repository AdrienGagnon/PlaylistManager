import styles from './CardContent.module.css';
import CardImg from './CardImg';

function CardContent(props) {
    return (
        <>
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
        </>
    );
}

export default CardContent;
