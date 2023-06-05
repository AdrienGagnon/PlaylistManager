import store from '../../store';

import { pageContentActions } from '../../store/pageContent-slice';
import { newContentReceivedActions } from '../../store/newContentReceived';

function handleSetPageContent(item) {
    if (store.getState().pageContent.pageContent === item) return;
    store.dispatch(pageContentActions.newPageContent(item));
    store.dispatch(newContentReceivedActions.toggleNewContentReceived(false));
}

export default handleSetPageContent;
