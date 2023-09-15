
const accessTokenURL = `https://accounts.spotify.com/api/token`

export const getToken = () => {
    let accessToken = document.location.hash
    return accessToken.replace("#access_token=", "")

}

export const getMyPlaylist = async (playlistEndpoint) => {
    let response = await fetch(playlistEndpoint, {
        method: 'GET',
        headers:{
            Authorization: `Bearer ${getToken()}`
        }
    })

    console.log(await response.json())
}