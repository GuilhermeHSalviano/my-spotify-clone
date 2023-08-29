import styles from "./login.module.scss"
import BasicButton from "../basicButton/index.jsx"

export default function Login() {
    return (
        <>
            <main className={styles.container}>
                <section className={styles.container__login}>
                    <h1>Bem vindo ao My Spotify Clone!</h1>
                    <h2>Para acessar o site, clique no botão abaixo e faça seu login na conta Spotify</h2>
                    <BasicButton/>
                </section>
            </main>
        </>
    )
}
