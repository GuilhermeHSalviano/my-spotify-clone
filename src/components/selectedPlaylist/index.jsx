import styles from './selectedPlaylist.module.scss'
import { useState } from 'react'
import { useLocation } from 'react-router-dom';


export default function SelectedPlaylist() {
        const [mySelectedPlaylist, setMySelectedPlaylist] = useState(useLocation().state)
    return (
        <div className={styles.container}></div>
    )
}
