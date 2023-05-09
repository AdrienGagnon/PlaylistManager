import { useEffect, useState } from 'react';

import { Outlet } from 'react-router-dom';

import './MainContent.css';

function MainContent() {
    const [accessToken, setAccessToken] = useState();
    // Sets the accessToken to state
    useEffect(() => {
        const accessToken = localStorage.getItem('access_token');
        setAccessToken(accessToken);
    }, []);

    return (
        <div className="main-content">
            <Outlet context={[accessToken, setAccessToken]} />
        </div>
    );
}

export default MainContent;
