import styles from './InfoLineArtist.module.css';

function InfoLineArtist(props) {
    return (
        <span className={styles['total-tracks']}>
            {props.contentInfo.followers.total} utilisateurs suivent cet artiste
        </span>
    );
}

export default InfoLineArtist;
