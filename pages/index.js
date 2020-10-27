import Head from 'next/head'
import Layout from '../components/layout'
import styles from '../styles/Home.module.css'

export default function Home() {
  return (
    <Layout>

      <Head>
        <title>Creamos</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>

        <h1 className={styles.title}>
          Creamos
        </h1>

        <p className={styles.description}>
          Comunidad de Creyentes 😇
        </p>


    
  </Layout>
  )
}
