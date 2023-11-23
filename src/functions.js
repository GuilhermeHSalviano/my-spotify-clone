const baseURL = "https://api.spotify.com/v1"

export const setToken = () => {

    let accessToken = document.location.pathname
    let rawAccessToken = accessToken.replace("/home/access_token=", "")
    if(rawAccessToken.length < 2){
        return false
    } else{
        sessionStorage.setItem("token", JSON.stringify(rawAccessToken))
        return true
    }
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

export const getPlaylistById = async (id) => {
    let token = getToken()
    let response = await fetch(`${baseURL + '/playlists/' + id}`, {
        method: 'GET',
        headers: {
            Authorization: `Bearer ${token}`
        }
    })
    let playlist = await response.json()
    return playlist
}

export async function selectPlaylist(id, navigate){
    let selectedPlaylist = await getPlaylistById(id)
    navigate('/home/:access_token/selectedPlaylist', {state: selectedPlaylist})
}

export function milisecondsConverter(miliseconds){
    let min = Math.floor((miliseconds/1000/60) << 0)
    let sec = Math.floor((miliseconds/1000) % 60)
    if(sec < 10){
        sec = `0${sec}`
    }
    return `${min}:${sec}`
}

export function toSortTracks(array, propertyChose){
    array.sort((a, b) =>{
        return a.propertyChose - b.propertyChose
    })
}