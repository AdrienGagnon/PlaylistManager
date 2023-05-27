import { REDIRECTURI, ClientID } from '../pages/Constants/Constants';

async function setToken() {
    // Parse the URL and save the code parameter
    const urlParams = new URLSearchParams(window.location.search);
    let code = urlParams.get('code');

    //----- Request an access token -----//
    const codeVerifier = localStorage.getItem('code_verifier');

    let body = new URLSearchParams({
        grant_type: 'authorization_code',
        code: code,
        redirect_uri: REDIRECTURI + 'callback',
        client_id: ClientID,
        code_verifier: codeVerifier,
    });

    // Sets the token to local storage. Can be accessed to make API calls
    const response = fetch('https://accounts.spotify.com/api/token', {
        method: 'POST',
        headers: {
            'Content-Type': 'application/x-www-form-urlencoded',
        },
        body: body,
    })
        .then(response => {
            if (!response.ok) {
                throw new Error('HTTP status ' + response.status);
            }
            return response.json();
        })
        .then(data => {
            localStorage.setItem('access_token', data.access_token);
            window.location = REDIRECTURI + 'Home';
        })
        .catch(error => {
            console.error('Error:', error, body);
        });
    return response;
}

export default setToken;
