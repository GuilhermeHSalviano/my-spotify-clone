import { useState, useEffect } from "react";
import styles from "./myFooter.module.scss";


export default function MyFooter({selectedSong}) {
	let [name, setName] = useState("")
	let [band, setBand] = useState("")
	let [albumImage, setAlbumImage] = useState('')

	useEffect(() => {
		if(selectedSong){
			setName(selectedSong.track.name)
			setBand(selectedSong.track.artists[0].name)
			setAlbumImage(selectedSong.track.album.images[0].url)
		}

		if(name.length > 45){
			console.log('acima de 45 caracteres')
		}
	}, [selectedSong])

	return (
		<footer className={styles.container}>
			<div className={styles.container__folder}>
				<img src={albumImage} alt="foto do álbum da música selecionada" />
				<div className={styles.container__folder__band}>
					<p>{name}</p>
					<p>{band}</p>
				</div>
			</div>
		</footer>
	);
	
}
