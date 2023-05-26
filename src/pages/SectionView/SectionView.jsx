import { useSelector } from 'react-redux';
import { useRef, useState, useEffect } from 'react';

import styles from './SectionView.module.css';
import Card from '../components/Card';
import handleCardAmount from '../utils/handleCardAmount';

function SectionView() {
    const [cardAmount, setCardAmount] = useState(3);
    const listContainer = useRef();
    const pageContent = useSelector(state => {
        return state.pageContent.pageContent;
    });

    useEffect(() => {
        if (!listContainer.current) return;
        console.log('adding event');
        handleCardAmount(listContainer, cardAmount, setCardAmount);
        window.addEventListener('resize', () => {
            handleCardAmount(listContainer, cardAmount, setCardAmount);
        });
    }, [listContainer?.current]);

    useEffect(() => {
        listContainer.current.style.gridTemplateColumns =
            'repeat(cardAmount, 1fr);';
    }, [cardAmount]);

    function handleCardImgLoad() {}

    return (
        <>
            {pageContent && (
                <div className="main-view">
                    <div className={styles['title']}>{pageContent.title}</div>
                    <div
                        className={styles['list-container']}
                        ref={listContainer}
                    >
                        {pageContent.content.items.map(item => {
                            return (
                                <Card
                                    key={item.name}
                                    item={item}
                                    playlistContent={pageContent.content}
                                    handleCardImgLoad={handleCardImgLoad}
                                />
                            );
                        })}
                    </div>
                </div>
            )}
        </>
    );
}

export default SectionView;
