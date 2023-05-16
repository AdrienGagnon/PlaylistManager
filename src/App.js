import { RouterProvider, createBrowserRouter } from 'react-router-dom';

import './App.css';

import CallBack from './authentication/Callback';

import MainContent from './pages/MainContent/MainContent';

import MainView from './pages/MainView/MainView';
import Search from './pages/Search/Search';
import AlbumView from './pages/AlbumView/AlbumView';
import PlaylistView from './pages/PlaylistView/PlaylistView';
import SectionView from './pages/SectionView/SectionView';
import LoggingIn from './pages/LoggingIn/LoggingIn';

const router = createBrowserRouter([
    {
        path: '/callback',
        element: <CallBack />,
    },
    {
        path: '/',
        element: <LoggingIn />,
    },
    {
        path: '/',
        element: <MainContent />,
        children: [
            {
                path: '/Home',
                element: <MainView />,
            },
            {
                path: '/search',
                element: <Search />,
            },
            {
                path: '/album',
                element: <AlbumView />,
            },
            {
                path: '/playlist',
                element: <PlaylistView />,
            },
            {
                path: '/section',
                element: <SectionView />,
            },
        ],
    },
]);

function App() {
    return <RouterProvider router={router} />;
}

export default App;
