import Head from 'next/head'
import Image from 'next/image'
import styles from '../styles/Style.module.css'
import Link from 'next/link'


export default function ItemLayout({children}){
    return (
        <div className={styles.container}>
            <Head>
                <title>오스빈</title>
                <meta name="description" content="오스빈" />
                <link rel="icon" href="/favicon.ico" />
            </Head>
            <div className={'head sub_head'}>
                <div className={'main_logo'}>
                    <Link href='/'>
                        <a>
                            <img src="/img/logo2.png"/>
                        </a>
                    </Link>
                </div>
                <div className={'cart_ico'}>
                    <Link href='/cart'>
                        <a>
                            <img src="/img/cart2.png"/>
                            <span className={'cart_count'}>7</span>
                        </a>
                    </Link>
                </div>
            </div>

            <div className={'mt55'}></div>
            <div className={'border'}></div>

            {children}

            <div className={'mt55 mb60'}></div>

        </div>
    )
}
