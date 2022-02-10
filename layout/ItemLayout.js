import Head from 'next/head'
import Image from 'next/image'
import styles from '../styles/Style.module.css'
import Link from 'next/link'
import {useEffect,useState,useRef } from 'react';
import axios from 'axios';
import useSWR from 'swr';

export default function ItemLayout({children}){
  
  const [count , setCount] = useState(0);
  // 장바구니 카운터
  if (typeof window !== 'undefined') {
    const { data, error } = useSWR(
      process.env.api+'/Cart/Count?mb_token='+localStorage.mb_token,
      axios
    )
    useEffect(() => {
      if(typeof data == 'object'){
        if(data.data.state){
          console.log(data.data.data);
          setCount(data.data.data);
        }
      }
    },[data]);
  }

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
                          <span className={'cart_count'}>{count}</span>
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
