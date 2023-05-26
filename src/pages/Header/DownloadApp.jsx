import styles from './DownloadApp.module.css';

function DownloadApp() {
    return (
        <div className={styles['download-container']}>
            <a
                draggable="false"
                data-encore-id="buttonPrimary"
                href="https://open.spotify.com/download"
            >
                <span className={styles['download-link']}>
                    <span aria-hidden="true">
                        <svg
                            role="img"
                            height="16"
                            width="16"
                            aria-hidden="true"
                            viewBox="0 0 16 16"
                            data-encore-id="icon"
                        >
                            <path d="M4.995 8.745a.75.75 0 0 1 1.06 0L7.25 9.939V4a.75.75 0 0 1 1.5 0v5.94l1.195-1.195a.75.75 0 1 1 1.06 1.06L8 12.811l-.528-.528a.945.945 0 0 1-.005-.005L4.995 9.805a.75.75 0 0 1 0-1.06z"></path>
                            <path d="M0 8a8 8 0 1 1 16 0A8 8 0 0 1 0 8zm8-6.5a6.5 6.5 0 1 0 0 13 6.5 6.5 0 0 0 0-13z"></path>
                        </svg>
                    </span>
                    <span data-encore-id="type">
                        Installez l'application Spotify
                    </span>
                </span>
            </a>
        </div>
    );
}

export default DownloadApp;
