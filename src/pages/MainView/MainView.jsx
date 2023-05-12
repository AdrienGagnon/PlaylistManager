import { useEffect, useState } from 'react';
import { useOutletContext } from 'react-router-dom';

import './MainView.css';

import fetchWebApi from '../Data/fetchWebApi';
import PlaylistItem from './PlaylistItem';
import PlaylistContent from './PlaylistContent';

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
                    <PlaylistContent
                        accessToken={accessToken}
                        type={'v1/me/playlists'}
                    />
                </PlaylistItem>
                <PlaylistItem
                    playlist={'RecommendedPlaylists'}
                    title={'Listes de lecture recommandées'}
                >
                    <PlaylistContent
                        accessToken={accessToken}
                        type={'v1/browse/featured-playlists'}
                    />
                </PlaylistItem>
            </ul>
        </div>
    );
}

export default MainView;
