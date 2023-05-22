import { useEffect, useState } from 'react';

import './MainView.css';

import fetchWebApi from '../Data/fetchWebApi';
import PlaylistItem from './PlaylistItem';
import PlaylistContent from './PlaylistContent';

function MainView() {
    const [profileInfo, setProfileInfo] = useState([]);
    const [accessToken, setAccessToken] = useState();

    useEffect(() => {
        const accessToken = localStorage.getItem('access_token');
        setAccessToken(accessToken);
    }, []);

    // When token is in state, get data
    useEffect(() => {
        getProfileInfo();
    }, [accessToken]);

    async function getProfileInfo() {
        setProfileInfo(await fetchWebApi('v1/me', 'GET'));
    }

    return (
        <div className="main-view">
            <h1 className="welcome-message">
                Bonjour, {profileInfo.display_name}
            </h1>
            <ul>
                <PlaylistItem
                    playlist={'UserPlaylists'}
                    title={'Vos listes de lecture'}
                >
                    <PlaylistContent
                        accessToken={accessToken}
                        type={'v1/me/playlists'}
                        objectType={'UserPlaylists'}
                    />
                </PlaylistItem>
                <PlaylistItem
                    playlist={'RecommendedPlaylists'}
                    title={'Listes de lecture recommandées'}
                >
                    <PlaylistContent
                        accessToken={accessToken}
                        type={'v1/browse/featured-playlists'}
                        objectType={'RecommendedPlaylists'}
                    />
                </PlaylistItem>
                <PlaylistItem
                    playlist={'UserSavedAlbums'}
                    title={'Vos albums favoris'}
                >
                    <PlaylistContent
                        accessToken={accessToken}
                        type={'v1/me/albums'}
                        objectType={'UserSavedAlbums'}
                    />
                </PlaylistItem>
                <PlaylistItem
                    playlist={'newReleases'}
                    title={'Nouveaux albums'}
                >
                    <PlaylistContent
                        accessToken={accessToken}
                        type={'v1/browse/new-releases'}
                        objectType={'newReleases'}
                    />
                </PlaylistItem>
                <PlaylistItem
                    playlist={'UserArtists'}
                    title={'Vos artistes préférés'}
                >
                    <PlaylistContent
                        accessToken={accessToken}
                        type={'v1/me/following?type=artist'}
                        objectType={'UserArtists'}
                    />
                </PlaylistItem>
            </ul>
        </div>
    );
}

export default MainView;
