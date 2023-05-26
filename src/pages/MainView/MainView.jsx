import { useEffect, useState } from 'react';

import './MainView.css';

import fetchWebApi from '../Data/fetchWebApi';
import PlaylistItem from './PlaylistItem';

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
                    title={'Vos listes de lecture'}
                    accessToken={accessToken}
                    type={'v1/me/playlists'}
                    objectType={'UserPlaylists'}
                ></PlaylistItem>
                <PlaylistItem
                    title={'Listes de lecture recommandées'}
                    accessToken={accessToken}
                    type={'v1/browse/featured-playlists'}
                    objectType={'RecommendedPlaylists'}
                ></PlaylistItem>
                <PlaylistItem
                    title={'Vos albums favoris'}
                    accessToken={accessToken}
                    type={'v1/me/albums'}
                    objectType={'UserSavedAlbums'}
                ></PlaylistItem>
                <PlaylistItem
                    title={'Nouveaux albums'}
                    accessToken={accessToken}
                    type={'v1/browse/new-releases'}
                    objectType={'newReleases'}
                ></PlaylistItem>
                <PlaylistItem
                    title={'Vos artistes préférés'}
                    accessToken={accessToken}
                    type={'v1/me/following?type=artist'}
                    objectType={'UserArtists'}
                ></PlaylistItem>
            </ul>
        </div>
    );
}

export default MainView;
