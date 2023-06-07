import { useState, useEffect, useRef } from 'react';
import { useSelector } from 'react-redux';

import styles from './RecentTracks.module.css';
import CardAmount from '../Card/CardAmount';
import fetchWebApi from '../Data/fetchWebApi';
import Card from '../Card/Card';
import CardContent from '../Card/CardContent';

function RecentTracks(props) {
    const recentContainer = useRef();

    const cardAmount = useSelector(state => {
        return state.cardAmount.cardAmount;
    });

    useEffect(() => {
        getRecentInfo();
    }, []);

    async function getRecentInfo() {
        const recentInfoData = await fetchWebApi(
            'v1/me/player/recently-played',
            'GET'
        );
        props.setRecentListen(recentInfoData);
    }

    function handleCardImgLoad() {}

    return (
        <div className={styles['recent-items-container']} ref={recentContainer}>
            <CardAmount container={recentContainer}>
                {props.recentListen &&
                    props.recentListen.items.slice(0, cardAmount).map(item => {
                        if (item.context.type === 'artist') {
                            return;
                            return (
                                <Card
                                    key={item.played_at}
                                    item={item.track}
                                    linkTo={'/artist'}
                                >
                                    <CardContent
                                        item={item.track}
                                        playlistContent={item.track}
                                        handleCardImgLoad={handleCardImgLoad}
                                    />
                                </Card>
                            );
                        }
                        if (item.context.type === 'playlist') {
                            return (
                                <Card
                                    key={item.played_at}
                                    item={item.track}
                                    linkTo={'/playlist'}
                                >
                                    <CardContent
                                        item={item.track}
                                        playlistContent={{
                                            items: item.track,
                                            linkTo: '/playlist',
                                        }}
                                        handleCardImgLoad={handleCardImgLoad}
                                    />
                                </Card>
                            );
                        }

                        return <div key={item.played_at}></div>;
                    })}
            </CardAmount>
        </div>
    );
}

export default RecentTracks;
