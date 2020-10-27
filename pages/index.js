import Head from 'next/head'
import styles from '../styles/Home.module.css'

export default function Home() {
  return (
    <div className={styles.container}>
      <Head>
        <title>Creamos</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <main className={styles.main}>
        <h1 className={styles.title}>
          Creamos
        </h1>

        <p className={styles.description}>
          Comunidad de Creyentes 😇
        </p>

      </main>

      <footer className={styles.footer}>
        <a
          href="https://casaa.vercel.app"
          target="_blank"
          rel="noopener noreferrer"
        >
          Diseñed by SOKI && Casaa 🔺
        </a>
      </footer>
    </div>
  )
}
