import styles from './NavFilter.module.css';
import handleUpdateFilter from '../Logic/handleUpdateFilter';

function NavFilter(props) {
    const filters = [
        { name: 'Listes de lecture' },
        { name: 'Artistes' },
        { name: 'Albums' },
    ];

    const filterActive = index => {
        if (
            (index === 0 && props.filter.playlist) ||
            (index === 1 && props.filter.artist) ||
            (index === 2 && props.filter.album)
        )
            return true;
        else {
            return false;
        }
    };

    return (
        <div className={styles['filters-container']}>
            {filters.map((toggleFilter, index) => {
                return (
                    <button
                        onClick={() =>
                            handleUpdateFilter(
                                toggleFilter,
                                props.filter,
                                props.setFilter
                            )
                        }
                        key={toggleFilter.name}
                        className={[
                            styles.filter,
                            styles[filterActive(index) ? 'active' : ''],
                        ].join(' ')}
                    >
                        {toggleFilter.name}
                    </button>
                );
            })}
        </div>
    );
}

export default NavFilter;
