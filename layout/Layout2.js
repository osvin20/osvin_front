import Head from 'next/head'
import Image from 'next/image'
import styles from '../styles/Style.module.css'
import Link from 'next/link'

export default function Layout({children}){
    return (
        <div className={styles.container}>
            <Head>
                <title>오스빈</title>
                <meta name="description" content="오스빈" />
                <link rel="icon" href="/favicon.ico" />
            </Head>
            <div className={'head'}>
                <h2>안녕?</h2>
                <Link href='/'>메인페이지</Link>
                <Link href='/menu'>메뉴1</Link>
            </div>
            
            {children}
            
            <footer className={styles.footer}>
                <a
                href="http://www.wizmade.com/"
                target="_blank"
                rel="noopener noreferrer"
                >
                Powered by
                <span className={styles.logo}>
                    <Image src="/vercel.svg" alt="Vercel Logo" width={72} height={16} />
                </span>
                </a>
            </footer>
        </div>
    )
}
