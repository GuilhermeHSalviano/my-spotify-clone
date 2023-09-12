import styles from "./homeAndSearch.module.scss"
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome"
import { faHouse, faMagnifyingGlass } from "@fortawesome/free-solid-svg-icons"

export default function HomeAndSearch() {
  return (
    <div className={styles.container}>
        <button className={styles.container__button}>
        <FontAwesomeIcon className={styles.container__icon} icon={faHouse} />
            Home
        </button>
        <button className={styles.container__button}>
            <FontAwesomeIcon className={styles.container__icon} icon={faMagnifyingGlass} />
            Search
        </button>
        
    </div>
  )
}
