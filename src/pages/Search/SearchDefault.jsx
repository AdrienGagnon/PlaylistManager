import { useState } from 'react';
import { NavLink } from 'react-router-dom';

import styles from './SearchDefault.module.css';
import Categories from './Categories';
import RecentTracks from './RecentTracks';
import handleSetPageContent from '../Logic/handleSetPageContent';

function SearchDefault() {
    const [recentListen, setRecentListen] = useState();

    return (
        <>
            <li className={styles['recent-container']}>
                <div>
                    <NavLink
                        onClick={() =>
                            handleSetPageContent({
                                title: 'Vos écoutes récentes',
                                content: playlistContent,
                            })
                        }
                        to={'/recent-listen'}
                    >
                        Vos écoutes récentes
                    </NavLink>
                    <NavLink
                        onClick={() =>
                            handleSetPageContent({
                                title: 'Vos écoutes récentes',
                                content: playlistContent,
                            })
                        }
                        to={'/recent-listen'}
                    >
                        Tout afficher
                    </NavLink>
                </div>
                {/* TODO: Handle content empty */}
                <RecentTracks
                    recentListen={recentListen}
                    setRecentListen={setRecentListen}
                />
            </li>
            <li className={styles['all-container']}>
                <div>
                    <div>Tout parcourir</div>
                </div>
                <Categories />
            </li>
        </>
    );
}

export default SearchDefault;
