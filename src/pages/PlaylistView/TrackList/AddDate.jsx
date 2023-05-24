import styles from './AddDate.module.css';

function AddDate(props) {
    const event = new Date(
        Date.UTC(
            props.item.added_at.slice(0, 4),
            props.item.added_at.slice(5, 7),
            props.item.added_at.slice(8, 10)
        )
    );
    const options = {
        year: 'numeric',
        month: 'long',
        day: 'numeric',
    };
    const date = event.toLocaleDateString('fr-CA', options);

    return <div className={styles['list-item-date']}>{date}</div>;
}

export default AddDate;
