
const accessTokenURL = `https://accounts.spotify.com/api/token`

export const setToken = () => {

   let accessToken = document.location.pathname
    let rawAccessToken = accessToken.replace("/home/access_token=", "")
    sessionStorage.setItem("token", JSON.stringify(rawAccessToken))
}

export const getMyPlaylist = async (playlistEndpoint, token) => {

    let response = await fetch(playlistEndpoint, {
        method: 'GET',
        headers:{
            Authorization: `Bearer ${token}`
        }
    })
    let playlists = await response.json()
    return playlists
}