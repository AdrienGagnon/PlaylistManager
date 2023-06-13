import { useEffect, useState } from 'react';

import styles from './Track.module.css';
import MainView from '../../components/MainView';
import HeaderPlaylist from '../PlaylistAndAlbumView/Components/Header/HeaderPlaylist';
import fetchWebApi from '../../Data/fetchWebApi';
import PlaybackControlsPlaylist from '../PlaylistAndAlbumView/Components/PlaybackContainer/PlaybackControlsPlaylist';
import TrackArtist from './TrackArtist';
import Popular from '../PlaylistAndAlbumView/ArtistView/Popular';
import FooterMainView from '../../components/FooterMainView';

function TrackView() {
    const [trackInfo, setTrackInfo] = useState();
    const [trackId, setTrackId] = useState();
    const [artistContent, setArtistContent] = useState();

    useEffect(() => {
        if (!trackInfo) return;
        getArtistContent();
    }, [trackInfo]);

    async function getArtistContent() {
        const artistPopularData = await fetchWebApi(
            `v1/artists/${trackInfo.artists[0].id}/top-tracks?market=CA`,
            'GET'
        );
        setArtistContent(artistPopularData);
    }

    useEffect(() => {
        updateContent();
    });

    window.onpopstate = () => {
        updateContent();
    };

    function updateContent() {
        const itemId = window.location.href.split('/').pop();
        if (itemId === trackId) return;
        setTrackId(itemId);
        getContentInfo(itemId);
    }

    async function getContentInfo(id) {
        await fetchWebApi(`v1/tracks/${id}`, 'GET').then(content => {
            setTrackInfo(content);
        });
    }

    const title = (
        <div className={styles['artist-container']}>
            <span>Titres populaires par</span>
            <span>{trackInfo && trackInfo.artists[0].name}</span>
        </div>
    );

    return (
        <MainView>
            {trackInfo && (
                <>
                    <HeaderPlaylist playlistInfo={trackInfo} option="track" />
                    <PlaybackControlsPlaylist
                        playlistInfo={trackInfo}
                        option={'track'}
                    />
                    <TrackArtist />
                    <Popular popularContent={artistContent} title={title} />
                </>
            )}
            <FooterMainView />
        </MainView>
    );
}

export default TrackView;
