import styles from "./homeAndSearch.module.scss"
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome"
import { faHouse, faMagnifyingGlass } from "@fortawesome/free-solid-svg-icons"
import { useState } from "react"


export default function HomeAndSearch() {
	const [home, setHome] = useState(true)
	const [search, setSearch] = useState(false)


  return (
    <div className={styles.container}>
        <button 
			className={`${styles.container__button} ${home? styles["container__button-active"] : ""}`}
			onClick={() =>{setHome(true); setSearch(false)}}
		>
        <FontAwesomeIcon className={styles.container__icon} icon={faHouse} />
            Home
        </button>
        <button 
			className={`${styles.container__button} ${search? styles["container__button-active"] : ""}` }
			onClick={() =>{setHome(false); setSearch(true)}}
		>
            <FontAwesomeIcon className={styles.container__icon} icon={faMagnifyingGlass} />
            Search
        </button>
    </div>
  )
}

/*In 23 line we have an exemple of how to call two functions inside a arrow function of onClick.
Note that is needed a semicolon between the functions.
*/