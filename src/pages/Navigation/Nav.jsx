import './Nav.css';

import NavButtons from './NavButtons';
import NavBiblio from './NavBiblio';
import NavFavorites from './NavFavorites/NavFavorites';
import CurrentTrackImage from './CurrentTrackImage';
import { useEffect, useRef, useState } from 'react';

const Nav = () => {
    const nav = useRef();
    const [filter, setFilter] = useState({
        playlist: true,
        artist: true,
        album: true,
    });

    useEffect(() => {
        // TODO: find a better solution for overflow of favorites
        const playingBarHeight = document.querySelector('footer').clientHeight;
        nav.current.style.maxHeight =
            window.innerHeight - playingBarHeight - 20 - 24 + 'px';
    }, []);

    return (
        <nav ref={nav}>
            <NavButtons />
            <NavBiblio filter={filter} setFilter={setFilter} />
            <NavFavorites filter={filter} />
            <CurrentTrackImage />
        </nav>
    );
};

export default Nav;
