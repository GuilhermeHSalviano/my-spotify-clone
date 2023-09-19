import styles from "./playlists.module.scss"
import {getMyPlaylist} from "../../../../functions.js"
import { useEffect } from "react"
import { useState } from "react"



export default function Playlists() {

	async function settingPlaylistsToState(){
		let playlists = await getMyPlaylist("https://api.spotify.com/v1/me/playlists")
		setPlaylists(playlists.items)
	}

	const [playlists, setPlaylists] = useState('')

	useEffect( () => {
		settingPlaylistsToState()
	}, [])
	return (
		<div className={styles.container}>index</div>
	)
}
