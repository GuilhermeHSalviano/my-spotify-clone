import LeftMenu from "../../components/leftMenu/index.jsx"
import styles from "./homePage.module.scss"
import { Outlet } from 'react-router-dom'
import { createContext, useContext } from "react"


export const playlistsContext = createContext()


export default function HomePage({playlists}) {

	return (
		<main className={styles.container}>
			<playlistsContext.Provider value={playlists}>
				<LeftMenu/>
				<Outlet/>
			</playlistsContext.Provider>
		</main>
	)
}
