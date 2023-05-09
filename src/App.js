import { RouterProvider, createBrowserRouter } from 'react-router-dom';

import './App.css';

import CallBack from './authentication/Callback';

import MainContent from './pages/MainContent/MainContent';

import LoggedOutNav from './pages/Navigation/LoggedOutNav';
import MainView from './pages/MainView/MainView';
import HeaderMainView from './pages/Header/HeaderMainView';
import LoggedInNav from './pages/Navigation/LoggedInNav';
import NowPlayingBar from './pages/NowPlayingBar/NowPlayingBar';

const router = createBrowserRouter([
    {
        path: '/callback',
        element: <CallBack />,
    },
    {
        path: '/',

        element: <MainContent />,
        children: [
            {
                path: '/',
                element: (
                    <>
                        <LoggedOutNav />
                    </>
                ),
            },
            {
                path: '/Home',
                element: (
                    <>
                        <HeaderMainView />
                        <LoggedInNav />
                        <MainView />
                        <NowPlayingBar />
                    </>
                ),
            },
            {
                path: '/search',
                element: (
                    <>
                        <LoggedInNav />
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
