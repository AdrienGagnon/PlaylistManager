import { useState, useEffect } from 'react';

import fetchWebApi from '../Data/fetchWebApi';

function UserPlaylists(props) {
    const [userPlaylists, setUserPlaylists] = useState();

    useEffect(() => {
        getUserPlaylists();
    }, [props.accessToken]);

    async function getUserPlaylists() {
        setUserPlaylists(await fetchWebApi('v1/me/playlists', 'GET'));
    }

    function generatePlaylistInfo() {
        if (!userPlaylists)
            return <div>Vous n'avez pas encore de liste de lecture.</div>;
        return userPlaylists?.items.map(item => {
            return (
                <div>
                    <img
                        className="img-playlist-list"
                        src={item.images[0]?.url}
                        alt=""
                    />
                    <p>{item.name}</p>
                </div>
            );
        });
    }

    window.addEventListener('resize', console.log('allo'));

    return <ul className="playlists-container">{generatePlaylistInfo()}</ul>;
}

export default UserPlaylists;
