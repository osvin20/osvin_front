import Head from 'next/head'
import Image from 'next/image'
import styles from '../styles/Style.module.css'
import Link from 'next/link'
import { useRouter } from "next/router";
import {useEffect} from 'react';

export default function LoginTheme({children}){
    const router = useRouter();
    useEffect(() => {
      if(typeof(localStorage.mb_token) == "string"){
        router.push('/');
      }
    }, []);
    return (
        <div className={styles.container}>
            <Head>
                <title>오스빈</title>
                <meta name="description" content="오스빈" />
                <link rel="icon" href="/favicon.ico" />
            </Head>
            <div className={'login_bg'}>

            </div>

            {children}

        </div>
    )
}
