import Head from 'next/head'
import Image from 'next/image'
import ArticleList from '../components/ArticleList'
import Header from '../components/Header'
import Meta from '../components/Meta'
import { server } from '../config/config'
import styles from '../styles/Layout.module.css'

export default function Home({articles}) {
  return (
    <div className={styles.container}>
		<Meta/>
		<main className={styles.main}>
			<Header/>
			<ArticleList articles={articles}/>
		</main>
    </div>
  )
}

export const getStaticProps = async () => {
	const res = await fetch(`${server}/api/articles`);
	const articles = await res.json();

	return {
		props: {
			articles
		}
	}
}
