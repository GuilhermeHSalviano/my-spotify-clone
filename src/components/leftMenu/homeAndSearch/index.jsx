import styles from "./homeAndSearch.module.scss"
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome"
import { faHouse, faMagnifyingGlass } from "@fortawesome/free-solid-svg-icons"
import { useState } from "react"
import { Link } from "react-router-dom"
import { getToken } from "../../../functions.js"


export default function HomeAndSearch() {
	const [home, setHome] = useState(true)
	const [search, setSearch] = useState(false)


  return (
    <div className={styles.container}>
        <Link 
			to='/home/:access_token'
			className={`${styles.container__link} ${home? styles["container__button-active"] : ""}`}
			onClick={() =>{setHome(true); setSearch(false)}}
			>
			<FontAwesomeIcon className={styles.container__icon} icon={faHouse} />
			<p>Home</p>
        </Link>
        <Link 
			to='/home/:access_token/search'
			className={`${styles.container__link} ${search? styles["container__button-active"] : ""}` }
			onClick={() =>{setHome(false); setSearch(true)}}
        >
          <FontAwesomeIcon className={styles.container__icon} icon={faMagnifyingGlass} />
            Search
        </Link>
    </div>
  )
}

/*In 23 line we have an exemple of how to call two functions inside a arrow function of onClick.
Note that is needed a semicolon between the functions.
*/