import { useEffect, useRef, useState } from 'react';

import styles from './Categories.module.css';
import fetchWebApi from '../Data/fetchWebApi';
import Card from '../Card/Card';
import CardAmount from '../Card/CardAmount';

function Categories() {
    const categoriesContainer = useRef();
    const [categoriesInfo, setCategoriesInfo] = useState();

    useEffect(() => {
        getCategoriesInfo();
    }, []);

    async function getCategoriesInfo() {
        const categoriesInfoData = await fetchWebApi(
            'v1/browse/categories',
            'GET'
        );
        setCategoriesInfo(categoriesInfoData);
    }

    return (
        <div
            ref={categoriesContainer}
            className={styles['categories-container']}
        >
            <CardAmount container={categoriesContainer}>
                {categoriesInfo ? (
                    categoriesInfo.categories.items.map(item => {
                        return (
                            <Card key={item.name} item={item} linkTo="/genre">
                                <div
                                    className={styles['img-category-container']}
                                >
                                    <img
                                        className={styles['img-category']}
                                        src={item.icons[0].url}
                                        alt=""
                                    />
                                </div>
                                {item.name}
                            </Card>
                        );
                    })
                ) : (
                    <></>
                )}
            </CardAmount>
        </div>
    );
}

export default Categories;
