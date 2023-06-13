import { RouterProvider, createBrowserRouter } from 'react-router-dom';

import './App.css';

import CallBack from './authentication/Callback';

import MainContent from './pages/MainContent/MainContent';

import HomeView from './pages/MainContent/HomeView/HomeView';
import Search from './pages/MainContent/Search/Search';
import PlaylistView from './pages/MainContent/PlaylistAndAlbumView/PlaylistView/PlaylistView';
import AlbumView from './pages/MainContent/PlaylistAndAlbumView/Albumview/AlbumView';
import SectionView from './pages/MainContent/SectionView/SectionView';
import LoggingIn from './pages/LoggingIn/LoggingIn';
import GenreView from './pages/MainContent/GenreView/GenreView';
import ErrorPage from './pages/components/ErrorPage';
import ArtistView from './pages/MainContent/PlaylistAndAlbumView/ArtistView/ArtistView';
import TrackView from './pages/MainContent/TrackView/Track';

const router = createBrowserRouter([
    {
        path: '/callback',
        element: <CallBack />,
        errorElement: <ErrorPage />,
    },
    {
        path: '/',
        element: <LoggingIn />,
        errorElement: <ErrorPage />,
    },
    {
        path: '/',
        element: <MainContent />,
        errorElement: <ErrorPage />,
        children: [
            {
                path: '/Home',
                element: <HomeView />,
            },
            {
                path: '/search',
                element: <Search />,
            },
            {
                path: '/album/:albumId',
                element: <AlbumView />,
            },
            {
                path: '/playlist/:playlistId',
                element: <PlaylistView />,
            },
            {
                path: '/section',
                element: <SectionView />,
            },
            {
                path: '/genre',
                element: <GenreView />,
            },
            {
                path: '/artist/:artistId',
                element: <ArtistView />,
            },
            {
                path: '/track/:trackId',
                element: <TrackView />,
            },
        ],
    },
]);

function App() {
    return <RouterProvider router={router} />;
}

export default App;
