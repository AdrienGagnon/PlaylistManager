import store from '../../store';
import { cardAmountActions } from '../../store/cardAmount-slice';

function handleCardAmount(container) {
    if (!container.current) return;
    const newAmount = Math.ceil(container.current.clientWidth / 160 - 2);
    if (newAmount && newAmount !== store.getState().cardAmount.cardAmount) {
        store.dispatch(cardAmountActions.updateCardAmount(newAmount));
    }
}

export default handleCardAmount;
