import { useEffect, useState } from 'react';
import { useSelector, useDispatch } from 'react-redux';

import { newContentReceivedActions } from '../../store/newContentReceived';
import HeaderPlaylist from './Header/HeaderPlaylist';
import PlaybackControlsPlaylist from './PlaybackContainer/PlaybackControlsPlaylist';
import TrackList from './TrackList/TrackList';
import fetchWebApi from '../Data/fetchWebApi';
import FooterMainView from '../components/FooterMainView';

function PlaylistView(props) {
    const pageContent = useSelector(state => {
        return state.pageContent.pageContent;
    });
    const newContentReceived = useSelector(state => {
        return state.newContentReceived.newContentReceived;
    });
    const [playlistInfo, setPlaylistInfo] = useState();
    const dispatch = useDispatch();

    useEffect(() => {
        if (!pageContent) return;
        getPlaylistInfo(pageContent.id);
    }, [pageContent]);

    useEffect(() => {
        // Waits for the new content to be set in playlistInfo, else the old content will be displayed with errors
        if (!playlistInfo) return;
        dispatch(newContentReceivedActions.toggleNewContentReceived(true));
    }, [playlistInfo]);

    async function getPlaylistInfo(id) {
        await fetchWebApi(`v1/${props.option}s/${id}`, 'GET').then(content => {
            setPlaylistInfo(content);
        });
    }

    return (
        <div className="main-view">
            {playlistInfo && newContentReceived ? (
                <>
                    <HeaderPlaylist
                        pageContent={pageContent}
                        playlistInfo={playlistInfo}
                        option={props.option}
                    />
                    <PlaybackControlsPlaylist
                        pageContent={pageContent}
                        playlistInfo={playlistInfo}
                        option={props.option}
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
