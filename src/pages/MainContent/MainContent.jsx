import { useEffect, useState } from 'react';

import { Outlet } from 'react-router-dom';

import { useDispatch } from 'react-redux';
import { accessTokenActions } from '../../store/accessToken-slice';
import { userInfoActions } from '../../store/userInfo-slice';

import SoundIFrame from '../Sound/SoundIFrame';
import fetchWebApi from '../Data/fetchWebApi';
import isPageContentEmpty from '../Logic/isPageContentEmpty';

import './MainContent.css';

import Nav from '../Navigation/Nav';
import HeaderMainView from '../Header/HeaderMainView';
import NowPlayingBar from '../NowPlayingBar/NowPlayingBar';
import AlertModal from '../AlertModal/AlertModal';

function MainContent() {
    const [expired, setExpired] = useState(false);
    const [accessToken, setAccessToken] = useState();

    const dispatch = useDispatch();

    const updateAccesstoken = accessToken => {
        dispatch(accessTokenActions.updateToken(accessToken));
    };

    const updateUserPlaylists = async () => {
        const userPlaylists = await fetchWebApi('v1/me/playlists', 'GET');
        dispatch(userInfoActions.updateUserPlaylists(userPlaylists));
    };

    // Sets the accessToken to state
    useEffect(() => {
        const accessToken = localStorage.getItem('access_token');
        updateAccesstoken(accessToken);
        setAccessToken(accessToken);
        updateUserPlaylists();
        isPageContentEmpty();
        setTimeout(() => {
            setExpired(true);
        }, 59 * 60 * 1000);
    }, []);

    return (
        <div className="main-content">
            <SoundIFrame />
            <HeaderMainView />
            <Nav />
            <Outlet context={[accessToken, setAccessToken]} />
            <NowPlayingBar />
            {expired && <AlertModal />}
        </div>
    );
}

export default MainContent;
