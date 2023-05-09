import { useEffect, useState } from 'react';

function MainContent() {
    const [accessToken, setAccessToken] = useState();
    const [topTracks, setTopTracks] = useState([]);

    useEffect(() => {
        const accessToken = localStorage.getItem('access_token');
        setAccessToken(accessToken);
    }, []);

    useEffect(() => {
        getTopTracks().then(e => {
            setTopTracks(e);
            console.log(e);
        });
    }, [accessToken]);

    async function getProfileInfo() {
        const response = await fetch('https://api.spotify.com/v1/me', {
            headers: {
                Authorization: 'Bearer ' + accessToken,
            },
        });
        const data = await response.json();
        console.log(data);
        return data;
    }

    async function fetchWebApi(endpoint, method) {
        const res = await fetch(`https://api.spotify.com/${endpoint}`, {
            headers: {
                Authorization: `Bearer ${accessToken}`,
            },
            method,
            body: JSON.stringify(body),
        });
        console.log(res);
        return await res.json();
    }

    async function getTopTracks() {
        return (
            await fetchWebApi(
                'v1/me/top/tracks?time_range=short_term&limit=5',
                'GET'
            )
        ).items;
    }

    async function ViewProfile() {
        const data = await getProfileInfo();
        console.log(data.country);
        return <div>{data.country}</div>;
    }
    console.log(topTracks);
    return (
        <>
            {accessToken ? (
                <div>
                    main content{' '}
                    <div>
                        {topTracks &&
                            topTracks.map(
                                ({ name, artists }) =>
                                    `${name} by ${artists
                                        .map(artist => artist.name)
                                        .join(', ')}`
                            )}
                    </div>
                </div>
            ) : (
                <div></div>
            )}
        </>
    );
}

export default MainContent;
