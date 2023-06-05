import { useEffect, useState } from 'react';

import styles from './Home.module.css';
import fetchWebApi from '../Data/fetchWebApi';
import PlaylistItem from './PlaylistItem';
import FooterMainView from '../components/FooterMainView';
import MainView from '../components/MainView';

function Home() {
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
        <MainView>
            <h1 className={styles['welcome-message']}>
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
            <FooterMainView />
        </MainView>
    );
}

export default Home;
