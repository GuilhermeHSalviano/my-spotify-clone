const baseURL = "https://api.spotify.com/v1"

export const setToken = () => {

   let accessToken = document.location.pathname
    let rawAccessToken = accessToken.replace("/home/access_token=", "")
    sessionStorage.setItem("token", JSON.stringify(rawAccessToken))
}

export const getToken = () =>{
    return JSON.parse(sessionStorage.getItem('token'))
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

export const getPlaylistById = async (playlistIdEndpoint, token, id) => {
    let response = await fetch(`${baseURL + playlistIdEndpoint + id}`, {
        method: 'GET',
        headers: {
            Authorization: `Bearer ${token}`
        }
    })
    let playlist = await response.json()
    return playlist
}