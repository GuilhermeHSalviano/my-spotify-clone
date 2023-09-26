
export const getToken = () => {
    let accessToken = document.location.hash
    let rawAccessToken = accessToken.replace("#access_token=", "")
    sessionStorage.setItem("token", JSON.stringify(rawAccessToken))
}

export const getMyPlaylist = async (playlistEndpoint) => {

    let response = await fetch(playlistEndpoint, {
        method: 'GET',
        headers:{
            Authorization: `Bearer ${JSON.parse(sessionStorage.getItem("token"))}`
        }
    })
    let playlists = await response.json()
    return playlists
}