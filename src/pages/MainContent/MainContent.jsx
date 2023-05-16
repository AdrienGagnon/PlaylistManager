import { useEffect, useState } from 'react';

import { Outlet } from 'react-router-dom';

import { useDispatch } from 'react-redux';
import { accessTokenActions } from '../../store/accessToken-slice';

import SoundIFrame from '../Sound/SoundIFrame';

import './MainContent.css';

import Nav from '../Navigation/Nav';
import HeaderMainView from '../Header/HeaderMainView';
import NowPlayingBar from '../NowPlayingBar/NowPlayingBar';

function MainContent() {
    const [accessToken, setAccessToken] = useState();

    const dispatch = useDispatch();

    const updateAccesstoken = accessToken => {
        dispatch(accessTokenActions.updateToken(accessToken));
    };

    // Sets the accessToken to state
    useEffect(() => {
        const accessToken = localStorage.getItem('access_token');
        updateAccesstoken(accessToken);
        setAccessToken(accessToken);
        setTimeout(() => {
            console.log('le token a expire');
        }, 59 * 60 * 1000);
    }, []);

    return (
        <div className="main-content">
            <SoundIFrame />
            <HeaderMainView />
            <Nav />
            <Outlet context={[accessToken, setAccessToken]} />
            <NowPlayingBar />
        </div>
    );
}

export default MainContent;
