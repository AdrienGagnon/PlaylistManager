import styles from './HeaderMainView.module.css';
import './HeaderMainView.css';

function HeaderMainView() {
    return (
        <header className={styles.header}>
            <div className={styles['arrows-container']}>
                <button
                    data-testid="top-bar-back-button"
                    aria-label="Retour"
                    aria-expanded="false"
                >
                    <svg
                        role="img"
                        height="16"
                        width="16"
                        aria-hidden="true"
                        viewBox="0 0 16 16"
                        data-encore-id="icon"
                    >
                        <path d="M11.03.47a.75.75 0 0 1 0 1.06L4.56 8l6.47 6.47a.75.75 0 1 1-1.06 1.06L2.44 8 9.97.47a.75.75 0 0 1 1.06 0z"></path>
                    </svg>
                </button>
                <button
                    data-testid="top-bar-forward-button"
                    aria-label="Avancer"
                    disabled=""
                >
                    <svg
                        role="img"
                        height="16"
                        width="16"
                        aria-hidden="true"
                        viewBox="0 0 16 16"
                        data-encore-id="icon"
                    >
                        <path d="M4.97.47a.75.75 0 0 0 0 1.06L11.44 8l-6.47 6.47a.75.75 0 1 0 1.06 1.06L13.56 8 6.03.47a.75.75 0 0 0-1.06 0z"></path>
                    </svg>
                </button>
            </div>
            <div className={styles['download-container']}>
                <a
                    draggable="false"
                    data-encore-id="buttonPrimary"
                    href="/download"
                >
                    <span className={styles['install-link']}>
                        <span
                            aria-hidden="true"
                            className="IconWrapper__Wrapper-sc-1hf1hjl-0 ppOnZ"
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
                                <path d="M4.995 8.745a.75.75 0 0 1 1.06 0L7.25 9.939V4a.75.75 0 0 1 1.5 0v5.94l1.195-1.195a.75.75 0 1 1 1.06 1.06L8 12.811l-.528-.528a.945.945 0 0 1-.005-.005L4.995 9.805a.75.75 0 0 1 0-1.06z"></path>
                                <path d="M0 8a8 8 0 1 1 16 0A8 8 0 0 1 0 8zm8-6.5a6.5 6.5 0 1 0 0 13 6.5 6.5 0 0 0 0-13z"></path>
                            </svg>
                        </span>
                        <span
                            className="Type__TypeElement-sc-goli3j-0 asTge ellipsis-one-line"
                            data-encore-id="type"
                        >
                            Installez l'application
                        </span>
                    </span>
                </a>
            </div>
            <div className={styles['profil-icon']}>
                <svg
                    role="img"
                    height="16"
                    width="16"
                    aria-hidden="true"
                    data-testid="user-icon"
                    viewBox="0 0 16 16"
                    data-encore-id="icon"
                >
                    <path d="M6.233.371a4.388 4.388 0 0 1 5.002 1.052c.421.459.713.992.904 1.554.143.421.263 1.173.22 1.894-.078 1.322-.638 2.408-1.399 3.316l-.127.152a.75.75 0 0 0 .201 1.13l2.209 1.275a4.75 4.75 0 0 1 2.375 4.114V16H.382v-1.143a4.75 4.75 0 0 1 2.375-4.113l2.209-1.275a.75.75 0 0 0 .201-1.13l-.126-.152c-.761-.908-1.322-1.994-1.4-3.316-.043-.721.077-1.473.22-1.894a4.346 4.346 0 0 1 .904-1.554c.411-.448.91-.807 1.468-1.052zM8 1.5a2.888 2.888 0 0 0-2.13.937 2.85 2.85 0 0 0-.588 1.022c-.077.226-.175.783-.143 1.323.054.921.44 1.712 1.051 2.442l.002.001.127.153a2.25 2.25 0 0 1-.603 3.39l-2.209 1.275A3.25 3.25 0 0 0 1.902 14.5h12.196a3.25 3.25 0 0 0-1.605-2.457l-2.209-1.275a2.25 2.25 0 0 1-.603-3.39l.127-.153.002-.001c.612-.73.997-1.52 1.052-2.442.032-.54-.067-1.097-.144-1.323a2.85 2.85 0 0 0-.588-1.022A2.888 2.888 0 0 0 8 1.5z"></path>
                </svg>
            </div>
        </header>
    );
}

export default HeaderMainView;
