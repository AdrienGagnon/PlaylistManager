import { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';

import { searchActions } from '../../store/search-slice';
import styles from './Search.module.css';
import PlaylistItem from '../HomeView/PlaylistItem';
import MainView from '../components/MainView';
import SearchDefault from './SearchDefault';

function Search() {
    const dispatch = useDispatch();
    const searchResults = useSelector(state => {
        return state.search?.results;
    });

    useEffect(() => {
        // Shows the search bar in the header
        dispatch(searchActions.showDisplay(true));
        return hideSearch;
    }, []);

    function hideSearch() {
        dispatch(searchActions.showDisplay(false));
        dispatch(searchActions.updateResults(undefined));
    }

    return (
        <MainView>
            <ul className={styles['container-results']}>
                {searchResults ? (
                    <PlaylistItem
                        title={'Albums'}
                        content={searchResults.albums}
                    />
                ) : (
                    <SearchDefault />
                )}
            </ul>
        </MainView>
    );
}

export default Search;
