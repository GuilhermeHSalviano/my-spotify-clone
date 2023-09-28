import styles from "./yourLibrary.module.scss"
import Icons from "./icons/index.jsx"
import Playlists from "./playlists/index.jsx"

export default function YourLibrary() {
  	return (
    <div className={styles.container}>
        <Icons/>
        <Playlists/>
    </div>
  )
}





