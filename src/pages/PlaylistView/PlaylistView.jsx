import styles from './PlaylistView.module.css';

import HeaderPlaylist from './HeaderPlaylist';
import PlaybackControlsPlaylist from './PlaybackControlsPlaylist';
import TrackList from './TrackList';

import { useSelector } from 'react-redux';
import fetchWebApi from '../Data/fetchWebApi';
import { useEffect, useRef, useState } from 'react';

function PlaylistView() {
    const pageContent = useSelector(state => {
        return state.pageContent.pageContent;
    });
    const [playlistInfo, setPlaylistInfo] = useState();

    useEffect(() => {
        if (!pageContent) return;
        getPlaylistInfo(pageContent.id);
    }, [pageContent]);

    async function getPlaylistInfo(id) {
        setPlaylistInfo(await fetchWebApi(`v1/playlists/${id}`, 'GET'));
    }

    return (
        <div className="main-view">
            {playlistInfo ? (
                <>
                    <HeaderPlaylist
                        pageContent={pageContent}
                        playlistInfo={playlistInfo}
                    />
                    <PlaybackControlsPlaylist
                        pageContent={pageContent}
                        playlistInfo={playlistInfo}
                    />
                    <TrackList
                        pageContent={pageContent}
                        playlistInfo={playlistInfo}
                    />
                </>
            ) : (
                <></>
            )}
        </div>
    );
}

export default PlaylistView;
