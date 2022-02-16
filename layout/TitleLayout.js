import Head from "next/head";
import Image from "next/image";
import { useRouter } from "next/router";
import styles from "../styles/Style.module.css";
import Link from "next/link";
import FootTab from "/layout/FootTab.js";
import Swal from 'sweetalert2';
import Script from 'next/script'
import {loginCheckFun} from './Common.js';
import {useEffect,useState,useRef } from 'react';
import axios from 'axios';
import useSWR from 'swr';
function TitleLayout({children,query,loginCheck}) {
  const router = useRouter();
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
          setCount(data.data.data);
        }
      }
    },[data]);
  }

  useEffect(() => {
    loginCheckFun(loginCheck,router);
  }, []);

  return (
    <div className={styles.container}>
      <Head>
        <title>오스빈</title>
        <meta name="description" content="오스빈" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      
      <div className={"head back_hd"}>
        <img
          className={"back_ico"}
          src="/img/arrow_05.png"
          onClick={() => router.back()}
        />
        <Link href="/cart">
          <a className={"cart_ico"}>
            <img src="/img/cart2.png" />
            <span className={"cart_count"}>{count}</span>
          </a>
        </Link>
      </div>

      <div className={"mt55"}></div>

      {children}

      <div className={"mt55"}></div>

      <div>
        <FootTab></FootTab>
      </div>
    </div>
  );
}


export default TitleLayout;
