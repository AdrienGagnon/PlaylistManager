import fetchWebApi from '../Data/fetchWebApi';

async function calcTotalTracksTime(playlistInfo, option, setPlaylistDuration) {
    if (!playlistInfo?.items && !playlistInfo?.tracks?.items) {
        return;
    }
    const timeArray = playlistInfo.tracks.items;

    if (playlistInfo.total > 100) {
        for (let i = 100; i < playlistInfo.total + 100; i = i + 100) {
            const newFetch = await fetchWebApi(
                'v1/playlists/7IhvkRwF1WXQNsP78WSnNw/tracks',
                'GET',
                (offset = `?offset=${i}`)
            );
            timeArray = timeArray.concat(newFetch.items);
        }
    }

    let totalTime;
    if (option === 'album') {
        totalTime = timeArray.reduce((accumulator, currentValue) => {
            return accumulator + currentValue.duration_ms;
        }, 0);
    } else {
        totalTime = timeArray.reduce((accumulator, currentValue) => {
            return accumulator + currentValue.track.duration_ms;
        }, 0);
    }

    const hours = Math.floor(totalTime / 3600000);
    const minutes = Math.floor((totalTime % 3600000) / (1000 * 60));
    setPlaylistDuration({ hours: hours, min: minutes });
}

export default calcTotalTracksTime;
