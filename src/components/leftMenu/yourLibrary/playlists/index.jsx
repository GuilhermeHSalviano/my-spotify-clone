import styles from "./playlists.module.scss"
import {getMyPlaylist, setToken} from "../../../../functions.js"
import { useState } from "react"


export default function Playlists() {
	let [playlists, setPlaylists] = useState([])
	

	async function settingPlaylistsToState(){
		setToken()
		let token = JSON.parse(sessionStorage.getItem('token'))
		let playlists = await getMyPlaylist("https://api.spotify.com/v1/me/playlists", token)
		setPlaylists(playlists.items)
	}
	window.onload = () => {
		settingPlaylistsToState();
	};

	  if(playlists == undefined){
		return ''
	  } else{
		return (
			<ul className={styles.container} data-ul> {playlists.map((playlist) => 
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
}
