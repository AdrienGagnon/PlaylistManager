async function fetchWebApi(endpoint, method, offset = '') {
    const accessToken = localStorage.getItem('access_token');
    const res = await fetch(`https://api.spotify.com/${endpoint}${offset}`, {
        headers: {
            Authorization: `Bearer ${accessToken}`,
        },
        method,
    });
    return await res.json();
}

export default fetchWebApi;
