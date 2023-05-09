import { useEffect, useState } from 'react';
import { useOutletContext } from 'react-router-dom';

import './MainView.css';

import fetchWebApi from '../Data/fetchWebApi';
import UserPlaylists from './UserPlaylists';
import PlaylistItem from './PlaylistItem';
import RecommendedPlaylists from './RecommendedPlaylists';

function MainView() {
    const [profileInfo, setProfileInfo] = useState([]);
    const [accessToken, setAccessToken] = useOutletContext();

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
                    <UserPlaylists accessToken={accessToken} />
                </PlaylistItem>
                <PlaylistItem
                    playlist={'RecommendedPlaylists'}
                    title={'Listes de lecture recommandées'}
                >
                    <RecommendedPlaylists />
                </PlaylistItem>
            </ul>
        </div>
    );
}

export default MainView;
