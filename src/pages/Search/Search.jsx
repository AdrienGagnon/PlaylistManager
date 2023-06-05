import { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';

import { searchActions } from '../../store/search-slice';
import styles from './Search.module.css';
import PlaylistItem from '../HomeView/PlaylistItem';
import MainView from '../components/MainView';

function Search() {
    const dispatch = useDispatch();
    const searchResults = useSelector(state => {
        return state.search?.results;
    });

    useEffect(() => {
        dispatch(searchActions.showDisplay(true));
        return hideSearch;
    }, []);

    function hideSearch() {
        dispatch(searchActions.showDisplay(false));
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
                    <></>
                )}
            </ul>
        </MainView>
    );
}

export default Search;
