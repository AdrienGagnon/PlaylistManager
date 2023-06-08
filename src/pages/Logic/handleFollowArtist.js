import fetchWebApi from '../Data/fetchWebApi';

function handleFollowArtist(artist, followStatus) {
    //TODO: fix issue error 204
    // fetchWebApi(
    //     `v1/me/following?type=artist&ids=${artist.id}`,
    //     followStatus ? 'DELETE' : 'PUT',
    //     { ids: [`${artist.id}`] }
    // );
}

export default handleFollowArtist;
