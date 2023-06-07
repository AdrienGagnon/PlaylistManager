import styles from './ListOfCardsContainer.module.css';

import ListOfCards from './ListOfCards';

function ListOfCardsContainer(props) {
    return (
        <ul className={styles['list-of-cards-container']}>
            <ListOfCards info={props.info} content={props.content} />
        </ul>
    );
}

export default ListOfCardsContainer;
