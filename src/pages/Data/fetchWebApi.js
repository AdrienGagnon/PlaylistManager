async function fetchWebApi(endpoint, method, offset = '') {
    const accessToken = localStorage.getItem('access_token');
    try {
        const res = await fetch(
            `https://api.spotify.com/${endpoint}${offset}`,
            {
                headers: {
                    Authorization: `Bearer ${accessToken}`,
                },
                method,
            }
        );
        if (res.status !== 200) {
            console.log(
                "Une erreur est survenue lors de l'appel vers Spotify API."
            );
            console.log(res);
            return;
        }
        return await res.json();
    } catch (error) {
        console.log('Une erreur est survenue:', error);
    }
}

export default fetchWebApi;
