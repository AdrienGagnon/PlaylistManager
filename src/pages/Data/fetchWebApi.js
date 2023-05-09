async function fetchWebApi(endpoint, method, body = undefined) {
    const accessToken = localStorage.getItem('access_token');

    const res = await fetch(`https://api.spotify.com/${endpoint}`, {
        headers: {
            Authorization: `Bearer ${accessToken}`,
        },
        method,
        body,
    });
    return await res.json();
}

export default fetchWebApi;
