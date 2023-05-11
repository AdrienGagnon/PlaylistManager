import { RouterProvider, createBrowserRouter } from 'react-router-dom';

import './App.css';

import CallBack from './authentication/Callback';

import MainContent from './pages/MainContent/MainContent';

import Nav from './pages/Navigation/Nav';
import MainView from './pages/MainView/MainView';
import HeaderMainView from './pages/Header/HeaderMainView';
import LoggingIn from './pages/LoggingIn/LoggingIn';
import NowPlayingBar from './pages/NowPlayingBar/NowPlayingBar';

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
                element: (
                    <>
                        <HeaderMainView />
                        <Nav />
                        <MainView />
                        <NowPlayingBar />
                    </>
                ),
            },
            {
                path: '/search',
                element: (
                    <>
                        <Nav />
                        <MainView />
                        <NowPlayingBar />
                    </>
                ),
            },
        ],
    },
]);

function App() {
    return <RouterProvider router={router} />;
}

export default App;
