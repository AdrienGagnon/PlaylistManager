function handleUpdateFilter(toggltFilter, filter, setFilter) {
    if (toggltFilter.name === 'Listes de lecture') {
        setFilter({ ...filter, playlist: !filter.playlist });
    }
    if (toggltFilter.name === 'Artistes') {
        setFilter({ ...filter, artist: !filter.artist });
    }
    if (toggltFilter.name === 'Albums') {
        setFilter({ ...filter, album: !filter.album });
    }
}

export default handleUpdateFilter;
