import { useSelector } from 'react-redux';
import { useRef, useEffect } from 'react';

import styles from './SectionView.module.css';
import Card from '../Card/Card';
import CardContent from '../Card/CardContent';
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
        if (!listContainer.current?.style) return;
        listContainer.current.style.gridTemplateColumns = `repeat(${cardAmount}, minmax(0, 1fr))`;
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

    if (!pageContent?.content)
        return (
            <>Une erreur est survenue. Veuillez revenir au menu principal.</>
        );

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
                            item = item.album ? item.album : item;
                            return (
                                <Card
                                    key={item.name}
                                    item={item}
                                    linkTo={pageContent.content.linkTo}
                                >
                                    <CardContent
                                        item={item}
                                        playlistContent={pageContent.content}
                                        handleCardImgLoad={handleCardImgLoad}
                                    />
                                </Card>
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
