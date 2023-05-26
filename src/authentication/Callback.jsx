import setToken from './setToken';

import styles from './Callback.module.css';
import { useEffect } from 'react';

function CallBack() {
    setToken();
    useEffect(() => {
        // window.location.href = '/';
    }, []);
    return <div className={styles.container}>Loading content...</div>;
}

export default CallBack;
