import './Nav.css';

import NavButtons from './NavButtons';
import NavBiblio from './NavBiblio';
import NavFavorites from './NavFavorites';
import CurrentTrackImage from './CurrentTrackImage';
import { useEffect, useRef } from 'react';

const Nav = () => {
    const nav = useRef();

    useEffect(() => {
        // TODO: find a better solution for overflow of favorites
        const playingBarHeight = document.querySelector('footer').clientHeight;
        nav.current.style.maxHeight =
            window.innerHeight - playingBarHeight - 20 - 24 + 'px';
    }, []);

    return (
        <nav ref={nav}>
            <NavButtons />
            <NavBiblio />
            <NavFavorites />
            <CurrentTrackImage />
        </nav>
    );
};

export default Nav;
