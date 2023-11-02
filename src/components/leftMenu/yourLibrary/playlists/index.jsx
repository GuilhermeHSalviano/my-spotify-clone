import styles from "./playlists.module.scss"
import { useState } from "react"
import { useContext } from "react"
import { playlistsContext } from "../../../../pages/homePage/index.jsx"
import { Link } from "react-router-dom"
import { selectPlaylist } from "../../../../functions.js"
import { useNavigate } from "react-router-dom";

export default function Playlists() {
	let [playlists] = useState(useContext(playlistsContext))
	const navigate = useNavigate()

	
	
	  if(playlists == undefined){
		return ''
	  } else{
		return (
			<ul className={styles.container} data-ul> {playlists.map((playlist) => 
				<Link 
					className={styles.container__link}
					onClick={()=> selectPlaylist(playlist.id, navigate)}
					key={playlist.id}
				>
					<li className={styles.container__list} key={playlist.id}>
						<img className={styles.list__img} src={playlist.images[0].url} alt="" />
						<div className={styles.list__info}>
							<p className={styles.info__name}>{playlist.name}</p>
							<p className={styles.info__owner} >{playlist.owner.display_name}</p>
						</div>
					</li>
				</Link>
			)}</ul>
		)
	  }
}
