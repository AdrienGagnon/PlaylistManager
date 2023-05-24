import { useState, useEffect } from 'react';
import { NavLink } from 'react-router-dom';
import { useSelector } from 'react-redux';

import fetchWebApi from '../Data/fetchWebApi';
import handleSetPageContent from '../Logic/handleSetPageContent';
import CardItem from './CardItem';
import LoadingCard from './LoadingCard';
import styles from './ListOfPlaylists.module.css';

function ListOfPlaylists(props) {
    const [playlistContent, setPlaylistContent] = useState();

    const userPlaylists = useSelector(state => {
        return state.userInfo.userPlaylists;
    });

    useEffect(() => {
        if (!userPlaylists) return;
        props.objectType === 'UserPlaylists' &&
            setPlaylistContent({
                items: userPlaylists.items,
                linkTo: '/playlist',
            });
    }, [userPlaylists]);

    useEffect(() => {
        getPlaylistContent();
    }, [props.accessToken]);

    async function getPlaylistContent() {
        let fetchContent;
        if (props.objectType !== 'UserPlaylists') {
            fetchContent = await fetchWebApi(props.type, 'GET');
            switch (props.objectType) {
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
                            <CardItem
                                item={item}
                                linkTo={playlistContent.linkTo}
                            />
                            <p>{item.name}</p>
                            <p className={styles['artist-names']}>
                                {playlistContent.linkTo === '/album' &&
                                    item.artists
                                        .map(artist => {
                                            return artist.name;
                                        })
                                        .join(', ')}
                                {playlistContent.linkTo === '/playlist' &&
                                    item.owner?.display_name}
                                {playlistContent.linkTo === '/artist' &&
                                    'Artiste'}
                            </p>
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
