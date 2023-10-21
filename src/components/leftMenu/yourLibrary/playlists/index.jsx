import styles from "./playlists.module.scss"
import { useState } from "react"
import { useContext } from "react"
import { playlistsContext } from "../../../../pages/homePage/index.jsx"
import { Link } from "react-router-dom"
import { getPlaylistById } from "../../../../functions.js"

export default function Playlists() {
	let [playlists, setPlaylists] = useState(useContext(playlistsContext))
	let [playlist, setPlaylist] = useState('')

	async function selectPlaylist(id){
		let selectedPlaylist = await getPlaylistById(id)
		setPlaylist(selectedPlaylist)
	}
	
	  if(playlists == undefined){
		return ''
	  } else{
		return (
			<ul className={styles.container} data-ul> {playlists.map((playlist) => 
				<Link 
					to='/home/:access_token/selectedPlaylist' 
					className={styles.container__link}
					onClick={()=> selectPlaylist(playlist.id)}
				>
					<li className={styles.container__list} key={playlist.id}>
						<img className={styles.list__img} src={playlist.images[0].url} alt="" />
						<div className={styles.list__info}>
							<p className={styles.info__name}>{playlist.name}</p>
							<p  className={styles.info__owner} >{playlist.owner.display_name}</p>
						</div>
					</li>
				</Link>
			)}</ul>
		)
	  }
}
