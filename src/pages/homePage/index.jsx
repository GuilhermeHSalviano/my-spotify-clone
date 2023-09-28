import {Routes, Route} from 'react-router-dom'
import LeftMenu from "../../components/leftMenu/index.jsx"
import styles from "./homePage.module.scss"
import HomeInfo from '../../components/homeInfo/index.jsx'




export default function HomePage() {
	return (
		<main className={styles.container}>
			<LeftMenu/>
			
		</main>
	)
}
