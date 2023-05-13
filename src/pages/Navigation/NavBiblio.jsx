import styles from './NavBiblio.module.css';

import { useSelector } from 'react-redux';

import { useDispatch } from 'react-redux';

import { biblioActions } from '../../store/biblioExpand-slice';

import NavFilter from './NavFilter';

function NavBiblio() {
    const viewBiblio = useSelector(state => {
        return state.biblio.expandedBiblio;
    });

    const dispatch = useDispatch();

    const toggleBiblio = () => {
        dispatch(biblioActions.toggle());
    };

    return (
        <>
            <div className={styles['container-buttons']}>
                <button
                    className={[
                        styles['biblio-button'],
                        styles['biblio-expand'],
                    ].join(' ')}
                    onClick={toggleBiblio}
                >
                    <div>
                        {viewBiblio && (
                            <svg
                                role="img"
                                height="24"
                                width="24"
                                aria-hidden="true"
                                viewBox="0 0 24 24"
                                data-encore-id="icon"
                                className="Svg-sc-ytk21e-0 ldgdZj"
                            >
                                <path d="M3 22a1 1 0 0 1-1-1V3a1 1 0 0 1 2 0v18a1 1 0 0 1-1 1zM15.5 2.134A1 1 0 0 0 14 3v18a1 1 0 0 0 1 1h6a1 1 0 0 0 1-1V6.464a1 1 0 0 0-.5-.866l-6-3.464zM9 2a1 1 0 0 0-1 1v18a1 1 0 1 0 2 0V3a1 1 0 0 0-1-1z"></path>
                            </svg>
                        )}
                        {!viewBiblio && (
                            <svg
                                role="img"
                                height="24"
                                width="24"
                                aria-hidden="true"
                                viewBox="0 0 24 24"
                                data-encore-id="icon"
                                className="Svg-sc-ytk21e-0 ldgdZj"
                            >
                                <path d="M14.5 2.134a1 1 0 0 1 1 0l6 3.464a1 1 0 0 1 .5.866V21a1 1 0 0 1-1 1h-6a1 1 0 0 1-1-1V3a1 1 0 0 1 .5-.866zM16 4.732V20h4V7.041l-4-2.309zM3 22a1 1 0 0 1-1-1V3a1 1 0 0 1 2 0v18a1 1 0 0 1-1 1zm6 0a1 1 0 0 1-1-1V3a1 1 0 0 1 2 0v18a1 1 0 0 1-1 1z"></path>
                            </svg>
                        )}
                    </div>
                    <h3>Votre Bibliothèque</h3>
                </button>
                <button
                    className={[
                        styles['biblio-button'],
                        styles['biblio-create-playlist'],
                    ].join(' ')}
                >
                    <svg
                        role="img"
                        height="16"
                        width="16"
                        aria-hidden="true"
                        viewBox="0 0 16 16"
                        data-encore-id="icon"
                        className="Svg-sc-ytk21e-0 ldgdZj"
                    >
                        <path d="M15.25 8a.75.75 0 0 1-.75.75H8.75v5.75a.75.75 0 0 1-1.5 0V8.75H1.5a.75.75 0 0 1 0-1.5h5.75V1.5a.75.75 0 0 1 1.5 0v5.75h5.75a.75.75 0 0 1 .75.75z"></path>
                    </svg>
                </button>
                <button
                    className={[
                        styles['biblio-button'],
                        styles['biblio-mode'],
                    ].join(' ')}
                >
                    <svg
                        role="img"
                        height="16"
                        width="16"
                        aria-hidden="true"
                        viewBox="0 0 16 16"
                        data-encore-id="icon"
                        className="Svg-sc-ytk21e-0 ldgdZj"
                    >
                        <path d="M1 1h6v6H1V1zm1.5 1.5v3h3v-3h-3zM1 9h6v6H1V9zm1.5 1.5v3h3v-3h-3zM9 1h6v6H9V1zm1.5 1.5v3h3v-3h-3zM9 9h6v6H9V9zm1.5 1.5v3h3v-3h-3z"></path>
                    </svg>
                    <svg
                        role="img"
                        height="16"
                        width="16"
                        aria-hidden="true"
                        viewBox="0 0 16 16"
                        data-encore-id="icon"
                        className="Svg-sc-ytk21e-0 eNWijz"
                    >
                        <path d="M15 14.5H5V13h10v1.5zm0-5.75H5v-1.5h10v1.5zM15 3H5V1.5h10V3zM3 3H1V1.5h2V3zm0 11.5H1V13h2v1.5zm0-5.75H1v-1.5h2v1.5z"></path>
                    </svg>
                </button>
                <button
                    className={[
                        styles['biblio-button'],
                        styles['biblio-more'],
                    ].join(' ')}
                >
                    <svg
                        role="img"
                        height="16"
                        width="16"
                        aria-hidden="true"
                        viewBox="0 0 16 16"
                        data-encore-id="icon"
                        className="Svg-sc-ytk21e-0 eNWijz"
                    >
                        <path d="M8.81 1A.749.749 0 0 0 7.53.47L0 7.99l7.53 7.521a.75.75 0 0 0 1.234-.815.75.75 0 0 0-.174-.243L2.87 8.74h12.38a.75.75 0 1 0 0-1.498H2.87l5.72-5.713c.14-.14.22-.331.22-.53z"></path>
                    </svg>
                    <svg
                        role="img"
                        height="16"
                        width="16"
                        aria-hidden="true"
                        viewBox="0 0 16 16"
                        data-encore-id="icon"
                        className="Svg-sc-ytk21e-0 eNWijz"
                    >
                        <path d="M7.19 1A.749.749 0 0 1 8.47.47L16 7.99l-7.53 7.521a.75.75 0 0 1-1.234-.815.75.75 0 0 1 .174-.243l5.72-5.714H.75a.75.75 0 1 1 0-1.498h12.38L7.41 1.529a.749.749 0 0 1-.22-.53z"></path>
                    </svg>
                </button>
            </div>
            <NavFilter />
        </>
    );
}

export default NavBiblio;
