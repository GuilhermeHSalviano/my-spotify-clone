import {Routes, Route} from 'react-router-dom'
import LeftMenu from "../../components/leftMenu/index.jsx"
import styles from "./homePage.module.scss"
import { Outlet } from 'react-router-dom'



export default function HomePage() {
	return (
		<main className={styles.container}>
			<LeftMenu/>
			<Outlet/>
		</main>
	)
}
