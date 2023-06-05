import { useEffect } from 'react';
import { useRef } from 'react';

import './MainView.css';
import handleCardAmount from '../Logic/handleCardAmount';

function MainView(props) {
    const mainView = useRef();

    useEffect(() => {
        handleCardAmount(mainView);
        window.addEventListener('resize', () => {
            handleCardAmount(mainView);
        });
        return () => {
            window.removeEventListener('resize', () => {
                handleCardAmount(mainView);
            });
        };
    }, []);

    return (
        <div className="main-view" ref={mainView}>
            {props.children}
        </div>
    );
}

export default MainView;
