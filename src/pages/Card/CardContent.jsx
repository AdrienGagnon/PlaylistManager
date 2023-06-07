import styles from './CardContent.module.css';
import CardImg from './CardImg';

function CardContent(props) {
    const content = props.item.album ? props.item.album : props.item;
    return (
        <>
            <CardImg
                item={content}
                linkTo={props.linkTo}
                handleCardImgLoad={props.handleCardImgLoad}
            />
            <p>{content.name}</p>
            <p className={styles['artist-names']}>
                {props.linkTo === '/album' &&
                    content.artists
                        .map(artist => {
                            return artist.name;
                        })
                        .join(', ')}
                {props.linkTo === '/playlist' && content.owner?.display_name}
                {props.linkTo === '/artist' && 'Artiste'}
            </p>
        </>
    );
}

export default CardContent;
