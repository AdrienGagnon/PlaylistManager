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
                "Une erreure est survenue lors de l'appel vers Spotify API."
            );
            return;
        }
        return await res.json();
    } catch (error) {
        console.log(error);
    }
}

export default fetchWebApi;
