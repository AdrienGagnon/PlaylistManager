import { useEffect, useState } from 'react';
import styles from './NavFavorites.module.css';

import { useSelector } from 'react-redux';

import fetchWebApi from '../Data/fetchWebApi';

function NavFavorites() {
    const [accessToken, setAccessToken] = useState();
    const [userSavedAlbums, setUserSavedAlbums] = useState();

    const state = useSelector(state => {
        return state;
    });

    useEffect(() => {
        const accessToken = localStorage.getItem('access_token');
        setAccessToken(accessToken);
    }, []);

    useEffect(() => {
        getUserSavedAlbums();
    }, [accessToken]);

    // userSavedAlbums &&
    //     userSavedAlbums.items.map(album => {
    //         console.log(album);
    //     });

    async function getUserSavedAlbums() {
        setUserSavedAlbums(await fetchWebApi('v1/me/albums', 'GET'));
    }

    return (
        <>
            {userSavedAlbums ? (
                <div className={styles['favorites-container']}>
                    {userSavedAlbums.items.map(album => {
                        return (
                            <div
                                key={album.album.name}
                                className={styles['favorites-item-container']}
                            >
                                <img
                                    key={album.album.name}
                                    src={album.album.images[2].url}
                                    alt="album-img"
                                />
                                <div
                                    className={
                                        styles['favorites-item-info-container']
                                    }
                                >
                                    <span
                                        className={
                                            styles[
                                                'favorites-item-info-album-name'
                                            ]
                                        }
                                    >
                                        {album.album.name}
                                    </span>
                                    <div
                                        className={
                                            styles[
                                                'favorites-item-info-artists-container'
                                            ]
                                        }
                                    >
                                        <span>
                                            {album.album.album_type
                                                .charAt(0)
                                                .toUpperCase() +
                                                album.album.album_type.slice(1)}
                                        </span>
                                        <span>
                                            {album.album.artists
                                                .map(artist => {
                                                    return (
                                                        <span
                                                            key={artist.name}
                                                            className={
                                                                styles[
                                                                    'list-item-info-artist'
                                                                ]
                                                            }
                                                        >
                                                            {artist.name}
                                                        </span>
                                                    );
                                                })
                                                .reduce((prev, curr) => [
                                                    prev,
                                                    ', ',
                                                    curr,
                                                ])}
                                        </span>
                                    </div>
                                </div>
                            </div>
                        );
                    })}
                </div>
            ) : (
                <></>
            )}
        </>
    );
}

export default NavFavorites;
