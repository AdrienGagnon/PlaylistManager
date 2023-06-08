async function fetchWebApi(endpoint, method, body = undefined, offset = '') {
    const accessToken = localStorage.getItem('access_token');
    try {
        let res;
        if (body) {
            const headerContent = {
                Authorization: `Bearer ${accessToken}`,
            };
            res = await fetch(`https://api.spotify.com/${endpoint}${offset}`, {
                headers: headerContent,
                method,
                body: JSON.stringify(body),
            });
        } else {
            res = await fetch(`https://api.spotify.com/${endpoint}${offset}`, {
                headers: {
                    Authorization: `Bearer ${accessToken}`,
                },
                method,
                body: JSON.stringify(body),
            });
        }
        if (res.status !== 200) {
            console.log(
                "Une erreur est survenue lors de l'appel vers Spotify API:",
                res
            );
            return;
        }
        return await res.json();
    } catch (error) {
        console.log('Une erreur est survenue:', error);
    }
}

export default fetchWebApi;
