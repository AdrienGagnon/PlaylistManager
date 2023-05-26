import { useSelector } from 'react-redux';
import { useRef, useEffect } from 'react';

import styles from './SectionView.module.css';
import Card from '../components/Card';
import handleCardAmount from '../Logic/handleCardAmount';
import FooterMainView from '../components/FooterMainView';

function SectionView() {
    const listContainer = useRef();
    const pageContent = useSelector(state => {
        return state.pageContent.pageContent;
    });
    const cardAmount = useSelector(state => {
        return state.cardAmount.cardAmount;
    });

    useEffect(() => {
        listContainer.current.style.gridTemplateColumns = `repeat(${cardAmount}, 1fr)`;
    }, [cardAmount]);

    useEffect(() => {
        handleCardAmount(listContainer);
        window.addEventListener('resize', () => {
            handleCardAmount(listContainer);
        });
        return () => {
            window.removeEventListener('resize', () => {
                handleCardAmount(listContainer);
            });
        };
    }, []);

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
                    <FooterMainView />
                </div>
            )}
        </>
    );
}

export default SectionView;
