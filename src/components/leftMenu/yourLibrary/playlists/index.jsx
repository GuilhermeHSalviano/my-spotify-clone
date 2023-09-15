import styles from "./playlists.module.scss"
import {getMyPlaylist, getToken} from "../../../../functions.js"

getMyPlaylist("https://api.spotify.com/v1/me/playlists")

export default function Playlists() {
  return (
    <div className={styles.container}>index</div>
  )
}
