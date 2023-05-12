import { useOutletContext } from 'react-router-dom';

function NavFavorites() {
    const [accessToken, setAccessToken] = useOutletContext();

    return <div></div>;
}

export default NavFavorites;
