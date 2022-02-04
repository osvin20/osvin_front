import Head from "next/head";
import Image from "next/image";
import { useRouter } from "next/router";
import styles from "../styles/Style.module.css";
import Link from "next/link";
import FootTab from "/layout/FootTab.js";
import Swal from 'sweetalert2';
import {loginCheckFun} from './Common.js';
import {useEffect,useState,useRef } from 'react';

function TitleLayout({children,query,loginCheck}) {
  const router = useRouter();
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
            <span className={"cart_count"}>7</span>
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
