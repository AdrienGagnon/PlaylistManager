import store from '../../store';

function isPageContentEmpty() {
    const pageContent = store.getState().pageContent.pageContent;
    if (window.location.pathname !== '/Home' && !pageContent) {
        window.location.href = '/Home';
    }
}

export default isPageContentEmpty;
