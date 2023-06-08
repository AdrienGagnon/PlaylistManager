import { useEffect, useState } from 'react';
import { useSelector } from 'react-redux';

import HeaderPlaylist from './Header/HeaderPlaylist';
import PlaybackControlsPlaylist from './PlaybackContainer/PlaybackControlsPlaylist';
import TrackList from './TrackList/TrackList';
import fetchWebApi from '../../Data/fetchWebApi';
import FooterMainView from '../../components/FooterMainView';
import Popular from '../ArtistView/Popular';

function ContentView(props) {
    const [currentItemId, setCurrentItemId] = useState();
    const [contentInfo, setContentInfo] = useState();

    // Important: when store is changed (href) it will trigger a rerender
    const newContent = useSelector(state => {
        return state;
    });

    useEffect(() => {
        updateContent();
    });

    window.onpopstate = () => {
        updateContent();
    };

    function updateContent() {
        const itemId = window.location.href.split('/').pop();
        if (itemId === currentItemId) return;
        setCurrentItemId(itemId);
        getContentInfo(itemId);
    }

    async function getContentInfo(id) {
        await fetchWebApi(`v1/${props.option}s/${id}`, 'GET').then(content => {
            setContentInfo(content);
        });
    }

    return (
        <div className="main-view">
            {contentInfo && (
                <>
                    <HeaderPlaylist
                        playlistInfo={contentInfo}
                        option={props.option}
                    />
                    <PlaybackControlsPlaylist
                        playlistInfo={contentInfo}
                        option={props.option}
                    />
                    {props.option === 'artist' ? (
                        <Popular playlistInfo={contentInfo} />
                    ) : (
                        <TrackList
                            playlistInfo={contentInfo}
                            option={props.option}
                        />
                    )}
                    <FooterMainView />
                </>
            )}
        </div>
    );
}

export default ContentView;
