function handleHistory(direction) {
    if (direction === 'next') window.history.forward();
    if (direction === 'previous') window.history.back();
}

export default handleHistory;
