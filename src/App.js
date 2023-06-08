import { RouterProvider, createBrowserRouter } from 'react-router-dom';

import './App.css';

import CallBack from './authentication/Callback';

import MainContent from './pages/MainContent/MainContent';

import Home from './pages/HomeView/Home';
import Search from './pages/Search/Search';
import PlaylistView from './pages/PlaylistAndAlbum/PlaylistView/PlaylistView';
import AlbumView from './pages/PlaylistAndAlbum/Albumview/AlbumView';
import SectionView from './pages/SectionView/SectionView';
import LoggingIn from './pages/LoggingIn/LoggingIn';
import GenreView from './pages/GenreView/GenreView';
import ErrorPage from './pages/components/ErrorPage';
import ArtistView from './pages/PlaylistAndAlbum/ArtistView/ArtistView';

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
                element: <Home />,
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
        ],
    },
]);

function App() {
    return <RouterProvider router={router} />;
}

export default App;
