import setToken from './setToken';

import styles from './Callback.module.css';
import { useEffect } from 'react';

function CallBack() {
    setToken();
    useEffect(() => {
        // const timeoutID = setTimeout(() => {
        //     window.location.href =
        //         'https://playlist-manager-ag.netlify.app/Home';
        // }, 5000);
        return clearTimeout(timeoutID);
    }, []);
    return <div className={styles.container}>Loading content...</div>;
}

export default CallBack;
