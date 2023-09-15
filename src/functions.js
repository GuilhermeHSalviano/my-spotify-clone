
const accessTokenURL = `https://accounts.spotify.com/api/token`

export const getToken = () => {
    let params = new URLSearchParams(document.location.search)
    let token = params.get('access_token')
    console.log(window.location.hash)
}

/*export const getAccessToken = async () => {
    let response = await fetch(accessTokenURL, {
        method: "POST",
        headers: {
            "ContentType": "application/x-www-form-urlencoded"
        },
        body: {}
    })
}*/

/*export const getPlaylist = async (playlistEndpoint) => {
    let response = await fetch(playlistEndpoint, {
        method: 'GET',
        headers:{
            Autori
        }
    })

    return await response.json()
}*/