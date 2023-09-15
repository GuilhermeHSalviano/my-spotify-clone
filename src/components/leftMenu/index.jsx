import HomeAndSearch from "./homeAndSearch/index.jsx"
import YourLibrary from "./yourLibrary/index.jsx"
import styles from "./leftMenu.module.scss"

export default function LeftMenu() {
	return (
		<section className={styles.container}>
			<HomeAndSearch/>
			<YourLibrary/>
		</section>
	)
	}
