import { ClientID, REDIRECTURI } from '../pages/Constants/Constants';

function authentication() {
    //----- Code Verifier -----//
    // Generate random string code
    function generateRandomString(length) {
        let text = '';
        let possible =
            'ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789';

        for (let i = 0; i < length; i++) {
            text += possible.charAt(
                Math.floor(Math.random() * possible.length)
            );
        }
        return text;
    }

    //----- Code Challenge -----//
    // transform it (hash) using SHA256 algorithm
    async function generateCodeChallenge(codeVerifier) {
        function base64encode(string) {
            return btoa(String.fromCharCode.apply(null, new Uint8Array(string)))
                .replace(/\+/g, '-')
                .replace(/\//g, '_')
                .replace(/=+$/, '');
        }

        const encoder = new TextEncoder();
        const data = encoder.encode(codeVerifier);
        const digest = await window.crypto.subtle.digest('SHA-256', data);

        return base64encode(digest);
    }

    //----- Request User Authorization -----//
    const clientId = ClientID;
    const redirectUri = REDIRECTURI + 'callback';

    let codeVerifier = generateRandomString(128);

    generateCodeChallenge(codeVerifier).then(codeChallenge => {
        let state = generateRandomString(16);
        let scope =
            'user-read-private user-read-email user-library-read user-follow-read user-read-currently-playing user-read-recently-played user-follow-modify';

        localStorage.setItem('code_verifier', codeVerifier);

        let args = new URLSearchParams({
            response_type: 'code',
            client_id: clientId,
            scope: scope,
            redirect_uri: redirectUri,
            state: state,
            code_challenge_method: 'S256',
            code_challenge: codeChallenge,
        });

        window.location = 'https://accounts.spotify.com/authorize?' + args;
    });
}

export default authentication;
