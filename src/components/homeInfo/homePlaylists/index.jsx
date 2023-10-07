import styles from "./homePlaylists.module.scss"
import { getPlaylistById, getToken } from "../../../functions.js"

export default function HomePlaylists({playlists}) {
	let selectedPlaylists = playlists.slice(0, 6)

	/*const getSelectedPlaylist = async (id) => {
		let token = getToken()
		let response = await fetchPlaylistById('/playlists/', token, id )
		console.log(response)
	}*/

	return (
		<ul className={styles.container}>
			{selectedPlaylists.map((index => 
				<li className={styles.container__list} key={index.id} onClick={() => {getPlaylistById(index.id)}} >
					<img className={styles.list__img} src={index.images[0].url} alt="alguns álbuns da playlist selecionada" />
					<p className={styles.list__p}>{index.name}</p>
				</li>	
			))}
		</ul>
	)
}
