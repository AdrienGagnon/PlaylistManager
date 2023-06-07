import styles from './AlertModal.module.css';
import antenna from './antenna.png';

function AlertModal() {
    return (
        <>
            <div className={styles['hide-background']}></div>
            <div className={styles['modal-alert']}>
                <img src={antenna} alt="antenna" />
                <div>
                    La connexion à votre compte Spotify a expiré. Veuillez vous
                    reconnecter{' '}
                    <a href="https://playlist-manager-ag.netlify.app">ici</a>.
                </div>
            </div>
        </>
    );
}

export default AlertModal;
