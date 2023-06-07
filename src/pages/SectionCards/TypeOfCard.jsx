import Card from '../Card/Card';
import CardContent from '../Card/CardContent';

function TypeOfCard(props) {
    if (props.info.type === 'album') {
        const content = props.content.albums
            ? props.content.albums
            : props.content;
        return content.items.slice(0, props.cardAmount).map(item => {
            return (
                <Card
                    key={item.id ? item.id : item.added_at}
                    item={item}
                    linkTo="/album"
                >
                    <CardContent
                        item={item}
                        handleCardImgLoad={props.handleCardImgLoad}
                        linkTo="/album"
                    />
                </Card>
            );
        });
    }
    if (props.info.type === 'playlist') {
        const content = props.content.playlists
            ? props.content.playlists
            : props.content;
        return content.items.slice(0, props.cardAmount).map(item => {
            return (
                <Card key={item.id} item={item} linkTo="/playlist">
                    <CardContent
                        item={item}
                        handleCardImgLoad={props.handleCardImgLoad}
                        linkTo="/playlist"
                    />
                </Card>
            );
        });
    }
    if (props.info.type === 'artist') {
        return props.content.artists.items
            .slice(0, props.cardAmount)
            .map(item => {
                return (
                    <Card key={item.id} item={item} linkTo="/artist">
                        <CardContent
                            item={item}
                            handleCardImgLoad={props.handleCardImgLoad}
                            linkTo="/artist"
                        />
                    </Card>
                );
            });
    } else {
        return console.log('le type de donnée est erroné');
    }
}

export default TypeOfCard;
