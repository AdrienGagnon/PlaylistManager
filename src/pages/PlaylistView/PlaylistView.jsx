import styles from './PlaylistView.module.css';

import HeaderPlaylist from './Header/HeaderPlaylist';
import PlaybackControlsPlaylist from './PlaybackControlsPlaylist';
import TrackList from './TrackList';

import { useSelector } from 'react-redux';
import fetchWebApi from '../Data/fetchWebApi';
import { useEffect, useState } from 'react';

function PlaylistView(props) {
    const pageContent = useSelector(state => {
        return state.pageContent.pageContent;
    });
    const [playlistInfo, setPlaylistInfo] = useState();

    useEffect(() => {
        if (!pageContent) return;
        getPlaylistInfo(pageContent.id);
    }, [pageContent]);

    async function getPlaylistInfo(id) {
        if (pageContent.album_type) {
            setPlaylistInfo(await fetchWebApi(`v1/albums/${id}`, 'GET'));
        } else {
            setPlaylistInfo(await fetchWebApi(`v1/playlists/${id}`, 'GET'));
        }
    }

    return (
        <div className="main-view">
            {playlistInfo ? (
                <>
                    <HeaderPlaylist
                        pageContent={pageContent}
                        playlistInfo={playlistInfo}
                        option={props.option}
                    />
                    <PlaybackControlsPlaylist
                        pageContent={pageContent}
                        playlistInfo={playlistInfo}
                    />
                    <TrackList
                        pageContent={pageContent}
                        playlistInfo={playlistInfo}
                        option={props.option}
                    />
                </>
            ) : (
                <></>
            )}
        </div>
    );
}

export default PlaylistView;
