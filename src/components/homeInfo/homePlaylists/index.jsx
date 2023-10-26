import styles from "./homePlaylists.module.scss"
import { selectPlaylist} from "../../../functions.js"
import { useNavigate } from "react-router-dom"

export default function HomePlaylists({playlists}) {
	let selectedPlaylists = playlists.slice(0, 6)
	const navigate = useNavigate()


	return (
		<ul className={styles.container}>
			{selectedPlaylists.map((index => 
				<li className={styles.container__list} key={index.id} onClick={() => {selectPlaylist(index.id, navigate)}} >
					<img className={styles.list__img} src={index.images[0].url} alt="alguns álbuns da playlist selecionada" />
					<p className={styles.list__p}>{index.name}</p>
				</li>	
			))}
		</ul>
	)
}
