import styles from "./homeInfo.module.scss"

export default function HomeInfo({playlists}) {
  return (
    <div className={styles.container}>
      <h1 className={styles.container__title}>Bem vindo</h1>
    </div>
  )
}
