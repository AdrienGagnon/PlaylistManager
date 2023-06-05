import { RouterProvider, createBrowserRouter } from 'react-router-dom';

import './App.css';

import CallBack from './authentication/Callback';

import MainContent from './pages/MainContent/MainContent';

import Home from './pages/HomeView/Home';
import Search from './pages/Search/Search';
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
                element: <Home />,
            },
            {
                path: '/search',
                element: <Search />,
            },
            {
                path: '/album',
                element: <PlaylistView option={'album'} />,
            },
            {
                path: '/playlist',
                element: <PlaylistView option={'playlist'} />,
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
