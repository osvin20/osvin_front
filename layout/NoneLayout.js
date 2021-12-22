import Head from "next/head";
import Image from "next/image";
import { useRouter } from "next/router";
import styles from "../styles/Style.module.css";
import Link from "next/link";
import FootTab from "/layout/FootTab.js";

export default function NoneLayout({ children }) {
  const router = useRouter();
  return (
    <div className={styles.container}>
      <Head>
        <title>오스빈</title>
        <meta name="description" content="오스빈" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <div className={"head back_hd none_hd"}>
        <img
          className={"back_ico"}
          src="/img/arrow_06.png"
          onClick={() => router.back()}
        />
      </div>

      {children}

      <div className={"mt55"}></div>

      <div>
        <FootTab></FootTab>
      </div>
    </div>
  );
}
