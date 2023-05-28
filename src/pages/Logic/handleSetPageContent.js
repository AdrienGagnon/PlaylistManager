import store from '../../store';

import { pageContentActions } from '../../store/pageContent-slice';
import { newContentReceivedActions } from '../../store/newContentReceived';

function handleSetPageContent(item) {
    store.dispatch(pageContentActions.newPageContent(item));
    store.dispatch(newContentReceivedActions.toggleNewContentReceived(false));
}

export default handleSetPageContent;
