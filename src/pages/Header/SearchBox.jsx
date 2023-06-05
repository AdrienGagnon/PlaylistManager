import { useEffect, useState } from 'react';
import { useSelector } from 'react-redux';
import { useDispatch } from 'react-redux';

import styles from './SearchBox.module.css';
import fetchWebApi from '../Data/fetchWebApi';
import { searchActions } from '../../store/search-slice';

function SearchBox() {
    const [timerRef, setTimerRef] = useState(true);
    const [searchInput, setSearchInput] = useState();

    const dispatch = useDispatch();

    const search = useSelector(state => {
        return state.search.display;
    });

    async function handleSubmitSearch(value) {
        setSearchInput(value.target.value);
    }

    useEffect(() => {
        if (!searchInput) return;
        timerRef && clearTimeout(timerRef);
        const timer = setTimeout(() => {
            getSearchResults();
        }, 1000);
        setTimerRef(timer);
    }, [searchInput]);

    async function getSearchResults() {
        const searchResults = await fetchWebApi(
            `v1/search?q=${searchInput}&type=album`,
            'GET'
        );
        dispatch(searchActions.updateResults(searchResults));
    }

    return (
        <>
            {search ? (
                <div className={styles['search-container']}>
                    <svg
                        role="img"
                        height="16"
                        width="16"
                        aria-hidden="true"
                        viewBox="0 0 16 16"
                        data-encore-id="icon"
                    >
                        <path d="M7 1.75a5.25 5.25 0 1 0 0 10.5 5.25 5.25 0 0 0 0-10.5zM.25 7a6.75 6.75 0 1 1 12.096 4.12l3.184 3.185a.75.75 0 1 1-1.06 1.06L11.304 12.2A6.75 6.75 0 0 1 .25 7z"></path>
                    </svg>
                    <div className={styles['input-container']} role="search">
                        <input
                            type="text"
                            placeholder="Que voulez-vous écouter?"
                            onChange={value => handleSubmitSearch(value)}
                        />
                    </div>
                </div>
            ) : (
                <></>
            )}
        </>
    );
}

export default SearchBox;
