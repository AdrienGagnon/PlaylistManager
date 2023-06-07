import { useEffect } from 'react';
import { useSelector } from 'react-redux';
import handleCardAmount from '../Logic/handleCardAmount';

// Does not really render anything, used to get the card amount based on the container width

function CardAmount(props) {
    const cardAmount = useSelector(state => {
        return state.cardAmount.cardAmount;
    });

    useEffect(() => {
        if (!props.container.current?.style) return;
        props.container.current.style.gridTemplateColumns = `repeat(${cardAmount}, minmax(0, 1fr))`;
    }, [cardAmount]);

    useEffect(() => {
        handleCardAmount(props.container);
        window.addEventListener('resize', () => {
            handleCardAmount(props.container);
        });
        return () => {
            window.removeEventListener('resize', () => {
                handleCardAmount(props.container);
            });
        };
    }, []);

    return <>{props.children}</>;
}

export default CardAmount;
