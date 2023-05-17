function calcTrackTime(time) {
    if (!time) return `0:00`;
    const min = Math.floor(time / 60);
    const sec = Math.floor(time % 60);
    return `${min ? min : '0'}:${sec < 10 ? '0' : ''}${sec}`;
}

export default calcTrackTime;
