import { useState, useEffect } from 'react';
import { NavLink } from 'react-router-dom';

import fetchWebApi from '../Data/fetchWebApi';
import handleSetPageContent from '../Logic/handleSetPageContent';
import CardItem from './CardItem';
import LoadingCard from './LoadingCard';
import styles from './ListOfPlaylists.module.css';

function ListOfPlaylists(props) {
    const [playlistContent, setPlaylistContent] = useState();

    useEffect(() => {
        getPlaylistContent();
    }, [props.accessToken]);

    async function getPlaylistContent() {
        const fetchContent = await fetchWebApi(props.type, 'GET');
        switch (props.objectType) {
            case 'UserPlaylists':
                setPlaylistContent({
                    items: fetchContent.items,
                    linkTo: '/playlist',
                });
                break;
            case 'RecommendedPlaylists':
                setPlaylistContent({
                    items: fetchContent.playlists.items,
                    linkTo: '/playlist',
                });
                break;
            case 'UserSavedAlbums':
                setPlaylistContent({
                    items: fetchContent.items,
                    linkTo: '/album',
                });
                break;
            case 'newReleases':
                setPlaylistContent({
                    items: fetchContent.albums.items,
                    linkTo: '/album',
                });
                break;
            case 'UserArtists':
                setPlaylistContent({
                    items: fetchContent.artists.items,
                    linkTo: '/artist',
                });
                break;
        }
    }
    return (
        <>
            {playlistContent?.items ? (
                playlistContent.items.map(item => {
                    if (item.album) {
                        item = item.album;
                    }
                    return (
                        <NavLink
                            onClick={() => handleSetPageContent(item)}
                            to={playlistContent.linkTo}
                            key={item.name}
                            className={[
                                styles['card'],
                                playlistContent.linkTo === '/artist'
                                    ? styles['artist']
                                    : '',
                            ].join(' ')}
                        >
                            <CardItem item={item} />
                            <p>{item.name}</p>
                        </NavLink>
                    );
                })
            ) : (
                <LoadingCard />
            )}
        </>
    );
}

export default ListOfPlaylists;
