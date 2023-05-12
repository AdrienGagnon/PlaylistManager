import './Nav.css';

import NavButtons from './NavButtons';
import NavBiblio from './NavBiblio';
import NavFavorites from './NavFavorites';

const Nav = () => {
    return (
        <nav>
            <NavButtons />
            <NavBiblio />
            <NavFavorites />
        </nav>
    );
};

export default Nav;
