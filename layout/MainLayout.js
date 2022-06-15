import Head from 'next/head'
import Image from 'next/image'
import styles from '../styles/Style.module.css'
import Link from 'next/link'
import FootTab from '/layout/FootTab.js'
import { useLayoutEffect ,useState,useEffect } from "react";
import axios from 'axios';
import useSWR from 'swr';

export default function MainLayout({children,...props}){

    // 장바구니 카운터
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
    const [count , setCount] = useState(0);
    if (typeof window !== 'undefined') {
      const { data, error } = useSWR(
        process.env.api+'/Cart/Count?mb_token='+localStorage.mb_token,
        axios
      )
      useEffect(() => {
        if(typeof data == 'object'){
          if(data.data.state){
            setCount(data.data.data);
          }
        }
      },[data]);
    }
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
                    <img src="/img/cart2.png"/>
                    <span className={'cart_count'}>{count}</span>
                </a>
            </Link>
        </div>
    </div>
    )
}
export function HeadBody(props){
    const [count , setCount] = useState(0);
    if (typeof window !== 'undefined') {
      const { data, error } = useSWR(
        process.env.api+'/Cart/Count?mb_token='+localStorage.mb_token,
        axios
      )
      useEffect(() => {
        if(typeof data == 'object'){
          if(data.data.state){
            setCount(data.data.data);
          }
        }
      },[data]);
    }
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
                        <span className={'cart_count'}>{count}</span>
                    </a>
                </Link>
            </div>
        </div>
    )
}
