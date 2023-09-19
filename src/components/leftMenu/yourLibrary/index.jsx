import styles from "./yourLibrary.module.scss"
import Icons from "./icons/index.jsx"
import Playlists from "./playlists/index.jsx"
import { getToken } from "../../../functions.js"
import { useEffect } from "react"

export default function YourLibrary() {
	useEffect(()=>{
		getToken()
	})

  	return (
    <div className={styles.container}>
        <Icons/>
        <Playlists/>
    </div>
  )
}





