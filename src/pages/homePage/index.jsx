import Header from "../../components/header/index.jsx"
import LeftMenu from "../../components/leftMenu/index.jsx"
import styles from "./homePage.module.scss"

export default function HomePage() {
	return (
		<main className={styles.container}>
			<Header/>
			<LeftMenu/>
		</main>
	)
}
