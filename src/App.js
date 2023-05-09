import { RouterProvider, createBrowserRouter } from 'react-router-dom';

import MainContent from './pages/MainContent/MainContent';
import CallBack from './authentication/Callback';
import LoggedInNav from './pages/Navigation/LoggedInNav';
import LoggedOutNav from './pages/Navigation/LoggedOutNav';

const router = createBrowserRouter([
    {
        path: '/',
        element: <LoggedOutNav />,
    },
    {
        path: '/callback',
        element: (
            <>
                <CallBack />
            </>
        ),
    },
    {
        path: '/Home',
        element: (
            <>
                <LoggedInNav />
                <MainContent />
            </>
        ),
    },
]);

function App() {
    return <RouterProvider router={router} />;
}

export default App;
