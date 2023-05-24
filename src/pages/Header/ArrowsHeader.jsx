import styles from './ArrowsHeader.module.css';

import handleHistory from '../Logic/handleHistory';

function ArrowsHeader() {
    return (
        <div className={styles['arrows-container']}>
            <button
                onClick={() => handleHistory('previous')}
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
                onClick={() => handleHistory('next')}
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
    );
}

export default ArrowsHeader;
