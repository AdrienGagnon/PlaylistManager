import { useEffect, useState } from 'react';
import styles from './NavFavorites.module.css';

import { useSelector } from 'react-redux';
import NavFavoritesItem from './NavFavoritesItem';
import fetchWebApi from '../../Data/fetchWebApi';

function NavFavorites(props) {
    const [accessToken, setAccessToken] = useState();
    const [userSavedAlbums, setUserSavedAlbums] = useState();
    const [imgLoaded, setImgLoaded] = useState(false);

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

    function handleCardImgLoad() {
        setImgLoaded(true);
    }

    let placeHolderArray = [];
    for (let i = 0; i < 5; i++) {
        placeHolderArray.push(
            <div key={i} className={styles['loading-item-container']}>
                <div className={styles['loading-card-img']}></div>
                <div className={styles['loading-item-info-container']}>
                    <div className={styles['loading-card-title']}></div>
                    <div className={styles['loading-card-artist']}></div>
                </div>
            </div>
        );
    }

    return (
        <>
            <div
                className={[
                    styles['loading-card-container'],
                    imgLoaded ? styles['hidden'] : '',
                ].join(' ')}
            >
                {placeHolderArray}
            </div>
            <div
                className={[
                    styles['favorites-container'],
                    imgLoaded ? '' : styles['hidden'],
                ].join(' ')}
            >
                {userPlaylists &&
                    props.filter.playlist &&
                    userPlaylists.items.map(playlist => {
                        return (
                            <NavFavoritesItem
                                key={playlist.name}
                                album={playlist}
                                type={'playlist'}
                                linkTo={'/playlist'}
                                handleCardImgLoad={handleCardImgLoad}
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
                                handleCardImgLoad={handleCardImgLoad}
                            />
                        );
                    })}
            </div>
        </>
    );
}

export default NavFavorites;
