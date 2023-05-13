import { useEffect, useState } from 'react';

import { Outlet } from 'react-router-dom';

import { useDispatch } from 'react-redux';
import { accessTokenActions } from '../../store/accessToken-slice';

import './MainContent.css';

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
            <Outlet context={[accessToken, setAccessToken]} />
        </div>
    );
}

export default MainContent;
