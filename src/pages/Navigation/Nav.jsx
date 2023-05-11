import './Nav.css';

import NavButtons from './NavButtons';
import NavBiblio from './NavBiblio';

const Nav = () => {
    return (
        <nav>
            <NavButtons />
            <NavBiblio />
        </nav>
    );
};

export default Nav;
