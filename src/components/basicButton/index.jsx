import styles from "./basicButton.module.scss"

export default function BasicButton() {
  	return (
		<>
			<button className={styles.container__button}>
				<a href="http://localhost:8888">Logar em Spotify</a>
			</button>
		</>
  	)
}
