import styles from './PlaylistView.module.css';

import HeaderPlaylist from './Header/HeaderPlaylist';
import PlaybackControlsPlaylist from './PlaybackContainer/PlaybackControlsPlaylist';
import TrackList from './TrackList/TrackList';

import { useSelector } from 'react-redux';
import fetchWebApi from '../Data/fetchWebApi';
import { useEffect, useState } from 'react';
import FooterMainView from '../components/FooterMainView';

function PlaylistView(props) {
    const pageContent = useSelector(state => {
        return state.pageContent.pageContent;
    });
    const [playlistInfo, setPlaylistInfo] = useState();

    useEffect(() => {
        if (!pageContent) return;
        getPlaylistInfo(pageContent.id);
        return setPlaylistInfo(undefined);
    }, [pageContent]);

    async function getPlaylistInfo(id) {
        if (props.option === 'album') {
            setPlaylistInfo(await fetchWebApi(`v1/albums/${id}`, 'GET'));
        } else if (props.option === 'playlist') {
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
                    <FooterMainView />
                </>
            ) : (
                <></>
            )}
        </div>
    );
}

export default PlaylistView;
