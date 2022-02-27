import Head from 'next/head'
import Image from 'next/image'
import {useRouter} from 'next/router'
import styles from '../styles/Style.module.css'
import Link from 'next/link'
import FootTab from '/layout/FootTab.js'
import {useEffect,useState,useRef } from 'react';
import Swal from 'sweetalert2'
import useSWR from 'swr';
import axios from 'axios';

export default function NoneTab({children,loginCheck}){
    const router = useRouter();
    const [count , setCount] = useState(0);
    // 장바구니 카운터
    if(typeof window !== 'undefined') {
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

    useEffect(() => {
      if(typeof(localStorage.mb_token) != "string" && loginCheck == true){
        Swal.fire("로그인을 해주세요");
        router.push('/login');
      }
    }, []);
    return (
        <div className={styles.container}>
            <Head>
                <title>오스빈</title>
                <meta name="description" content="오스빈" />
                <link rel="icon" href="/favicon.ico" />
            </Head>
            <div className={'head back_hd'}>
                <img className={'back_ico'} src="/img/arrow_05.png" onClick={() => router.back()} />
                <Link href="/cart">
                    <a className={'cart_ico'}>
                        <img src="/img/cart2.png"/>
                        <span className={'cart_count'}>{count}</span>
                    </a>
                </Link>
            </div>
            <div className={'mt55'}></div>
            {children}
            <div className={'mt55'}></div>
        </div>
    )
}
