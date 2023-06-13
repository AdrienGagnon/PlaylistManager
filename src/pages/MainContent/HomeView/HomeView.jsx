import { useEffect, useState } from 'react';
import { useSelector } from 'react-redux';
import { useDispatch } from 'react-redux';

import { homeContentActions } from '../../../store/homeContent-slice';
import styles from './HomeView.module.css';
import fetchWebApi from '../../Data/fetchWebApi';
import CardsSection from '../SectionCards/CardsSection';
import FooterMainView from '../../components/FooterMainView';
import MainView from '../../components/MainView';

function HomeView() {
    const [profileInfo, setProfileInfo] = useState([]);
    const homeContent = useSelector(state => {
        return state.homeContent;
    });
    const dispatch = useDispatch();
    const [contentInfo, setContentInfo] = useState([
        {
            info: {
                title: 'Vos listes de lecture',
                endpoint: 'v1/me/playlists',
                type: 'playlist',
            },
        },
        {
            info: {
                title: 'Listes de lecture recommandées',
                endpoint: 'v1/browse/featured-playlists',
                type: 'playlist',
            },
        },
        {
            info: {
                title: 'Vos albums favoris',
                endpoint: 'v1/me/albums',
                type: 'album',
            },
        },
        {
            info: {
                title: 'Nouveaux albums',
                endpoint: 'v1/browse/new-releases',
                type: 'album',
            },
        },
        {
            info: {
                title: 'Vos artistes préférés',
                endpoint: 'v1/me/following?type=artist',
                type: 'artist',
            },
        },
    ]);
    const [accessToken, setAccessToken] = useState();

    useEffect(() => {
        const accessToken = localStorage.getItem('access_token');
        setAccessToken(accessToken);
    }, []);

    useEffect(() => {
        if (!accessToken) return;
        if (!homeContent.content && !homeContent.profilContent) {
            getProfileInfo('v1/me');
            getContentInfo();
        } else {
            setContentInfo(homeContent.content);
            setProfileInfo(homeContent.profilContent);
        }
    }, [accessToken]);

    async function getContentInfo() {
        const dataArray = [];
        for (const item of contentInfo) {
            const data = await fetchWebApi(item.info.endpoint, 'GET');
            item.content = data;
            dataArray.push(item);
        }
        setContentInfo(dataArray);
        dispatch(homeContentActions.newHomeContent(dataArray));
    }

    async function getProfileInfo(endpoint) {
        const data = await fetchWebApi(endpoint, 'GET');
        setProfileInfo(data);
        dispatch(homeContentActions.newProfileContent(data));
    }

    return (
        <MainView>
            <h1 className={styles['welcome-message']}>
                Bonjour, {profileInfo.display_name}
            </h1>
            <ul>
                {contentInfo.map(item => {
                    return (
                        <CardsSection
                            key={item.info.endpoint}
                            content={item.content}
                            info={item.info}
                        />
                    );
                })}
            </ul>
            <FooterMainView />
        </MainView>
    );
}

export default HomeView;
