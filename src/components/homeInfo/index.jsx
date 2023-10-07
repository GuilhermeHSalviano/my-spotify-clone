import styles from "./homeInfo.module.scss";
import HomePlaylists from "./homePlaylists/index.jsx"

export default function HomeInfo({playlists}){
	return (
		<div className={styles.container}>
			<h1 className={styles.container__title}>Bem vindo</h1>
			<HomePlaylists playlists={playlists} />
		</div>
	)
}
