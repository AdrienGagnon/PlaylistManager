import { useState, useEffect } from 'react';
import { NavLink } from 'react-router-dom';
import { useSelector } from 'react-redux';

import './PlaylistItem.css';
import handleSetPageContent from '../Logic/handleSetPageContent';
import PlaylistContent from './PlaylistContent';
import fetchWebApi from '../Data/fetchWebApi';

function PlaylistItem(props) {
    const [playlistContent, setPlaylistContent] = useState();
    const userPlaylists = useSelector(state => {
        return state.userInfo.userPlaylists;
    });

    useEffect(() => {
        if (!props.objectType) return;
        getPlaylistContent();
    }, [props.accessToken]);

    useEffect(() => {
        if (!props.content) return;
        setPlaylistContent(props.content);
    }, [props.content]);

    useEffect(() => {
        if (!userPlaylists) return;
        if (!props.objectType) return;
        props.objectType === 'UserPlaylists' &&
            setPlaylistContent({
                items: userPlaylists.items,
                linkTo: '/playlist',
            });
    }, [userPlaylists]);

    async function getPlaylistContent() {
        let fetchContent;
        if (props.objectType !== 'UserPlaylists') {
            fetchContent = await fetchWebApi(props.type, 'GET');
            switch (props.objectType) {
                case 'RecommendedPlaylists':
                    setPlaylistContent({
                        items: fetchContent.playlists.items,
                        linkTo: '/playlist',
                    });
                    break;
                case 'UserSavedAlbums':
                    setPlaylistContent({
                        items: fetchContent.items,
                        linkTo: '/album',
                    });
                    break;
                case 'newReleases':
                    setPlaylistContent({
                        items: fetchContent.albums.items,
                        linkTo: '/album',
                    });
                    break;
                case 'UserArtists':
                    setPlaylistContent({
                        items: fetchContent.artists.items,
                        linkTo: '/artist',
                    });
                    break;
            }
        }
    }

    return (
        <li className={[props.objectType, 'playlistitem'].join(' ')}>
            <div>
                <h2>{props.title}</h2>
                <NavLink
                    onClick={() =>
                        handleSetPageContent({
                            title: props.title,
                            content: playlistContent,
                        })
                    }
                    to={'/section'}
                >
                    Tout afficher
                </NavLink>
            </div>
            {/* TODO: Handle content empty */}
            <PlaylistContent
                type={props.type}
                objectType={props.objectType}
                playlistContent={playlistContent}
            />
        </li>
    );
}

export default PlaylistItem;
