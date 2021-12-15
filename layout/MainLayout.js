import Head from 'next/head'
import Image from 'next/image'
import styles from '../styles/Style.module.css'
import Link from 'next/link'
import FootTab from '/layout/FootTab.js'
import { useLayoutEffect ,useState } from "react";


export default function MainLayout({children,...props}){
    const [scrollHead, setScrollHead] = useState(<HeadTop/>);
    const handleScroll = () =>{
        if(window.scrollY > 100){
            setScrollHead(<HeadBody/>)
        }else{
            setScrollHead(<HeadTop/>)
        }
    }
    useLayoutEffect(() => {
        window.addEventListener('scroll', handleScroll);
    },[]);
    return (
        <div className={styles.container}>
            <Head>
                <title>오스빈</title>
                <meta name="description" content="오스빈" />
                <link rel="icon" href="/favicon.ico" />
            </Head>
            {scrollHead}
         
            {children}
           
            <div>
                <FootTab pages={props.pages}></FootTab>
            </div>
        </div>
    )
}
export function HeadTop(props){
    return(
        <div className={'head'}>
        <div className={'main_logo'}>
            <Link href='/'>
                <a>
                    <img src="/img/main_logo.png"/>
                </a>
            </Link>
        </div>
        <div className={'cart_ico'}>
            <Link href='/cart'>
                <a>
                    <img src="/img/main_cart.png"/>
                    <span className={'cart_count'}>7</span>
                </a>
            </Link>
        </div>
    </div>
    )
}
export function HeadBody(props){
    return(
        <div className={'head main_head_top'}>
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
    )
}
