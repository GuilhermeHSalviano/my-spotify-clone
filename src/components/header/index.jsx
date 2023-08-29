import styles from "./myHeader.module.scss";

export default function MyHeader() {
  return (
    <>
        <header className={styles.container}>
            <p className={styles.container__words}>My Spotify Clone!</p>
        </header>
    </>
  )
}
