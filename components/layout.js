import Navigation from "./navigation";
import styles from '../styles/Layout.module.css'
export default function Layout(props) {
  return (
  <div className={styles.container}>
      <Navigation />
      <main className={styles.main}>
        {props.children}
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
