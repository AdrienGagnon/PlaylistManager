import store from '../../store';

import { pageContentActions } from '../../store/pageContent-slice';

function handleSetPageContent(item) {
    store.dispatch(pageContentActions.newPageContent(item));
}

export default handleSetPageContent;
