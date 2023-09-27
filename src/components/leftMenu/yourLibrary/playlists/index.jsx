import styles from "./playlists.module.scss"
import {getMyPlaylist} from "../../../../functions.js"
import { useEffect } from "react"
import { useState } from "react"


export default function Playlists() {

	const [playlists, setPlaylists] = useState([])

	async function settingPlaylistsToState(){
		if(!sessionStorage.getItem('token')) return
		let playlists = await getMyPlaylist("https://api.spotify.com/v1/me/playlists")
			setPlaylists(playlists.items)
		
	}

	useEffect( () => {
		settingPlaylistsToState()
	}, [playlists])

	//if(!playlists) return ''

	return (
		<ul className={styles.container}> {playlists.map((playlist) => 
			<li className={styles.container__list} key={playlist.id}>
				<img className={styles.list__img} src={playlist.images[0].url} alt="" />
				<div className={styles.list__info}>
					<p className={styles.info__name}>{playlist.name}</p>
					<p  className={styles.info__owner} >{playlist.owner.display_name}</p>
				</div>
			</li>
		 )}</ul>
	)
}
