import { useEffect, useState } from 'react';
import styles from './NavFavorites.module.css';

import { useSelector } from 'react-redux';
import NavFavoritesItem from './NavFavoritesItem';
import fetchWebApi from '../../Data/fetchWebApi';

function NavFavorites(props) {
    const [accessToken, setAccessToken] = useState();
    const [userSavedAlbums, setUserSavedAlbums] = useState();

    const userPlaylists = useSelector(state => {
        return state.userInfo.userPlaylists;
    });

    useEffect(() => {
        const accessToken = localStorage.getItem('access_token');
        setAccessToken(accessToken);
    }, []);

    useEffect(() => {
        getUserSavedAlbums();
    }, [accessToken]);

    async function getUserSavedAlbums() {
        // TODO: make only one call for user album in main content
        setUserSavedAlbums(await fetchWebApi('v1/me/albums', 'GET'));
    }

    return (
        <div className={styles['favorites-container']}>
            {userPlaylists &&
                props.filter.playlist &&
                userPlaylists.items.map(playlist => {
                    return (
                        <NavFavoritesItem
                            key={playlist.name}
                            album={playlist}
                            type={'playlist'}
                            linkTo={'/playlist'}
                        />
                    );
                })}
            {userSavedAlbums &&
                props.filter.album &&
                userSavedAlbums.items.map(albumObj => {
                    const album = albumObj.album;
                    return (
                        <NavFavoritesItem
                            key={album.name}
                            album={album}
                            type={'album'}
                            linkTo={'/album'}
                        />
                    );
                })}
        </div>
    );
}

export default NavFavorites;
