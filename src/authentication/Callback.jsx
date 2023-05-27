import setToken from './setToken';

import styles from './Callback.module.css';

function CallBack() {
    setToken();

    return <div className={styles.container}>Loading content...</div>;
}

export default CallBack;
