import styles from './NavFilter.module.css';

function NavFilter() {
    const filters = [
        { name: 'Listes de lecture' },
        { name: 'Artistes' },
        { name: 'Albums' },
    ];

    return (
        <div className={styles['filters-container']}>
            {filters.map(filter => {
                return (
                    <button key={filter.name} className={styles.filter}>
                        {filter.name}
                    </button>
                );
            })}
        </div>
    );
}

export default NavFilter;
