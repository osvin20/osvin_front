import Head from 'next/head'
import Image from 'next/image'
import styles from '../styles/Style.module.css'
import Link from 'next/link'
import FootTab from '/layout/FootTab.js'
import { useRouter } from "next/router";
import {useEffect,useState,useRef,useLayoutEffect} from 'react';
import Swal from 'sweetalert2'
import axios from 'axios';
import useSWR from 'swr';
import { useSelector, useDispatch } from 'react-redux';
import {setScrollVal} from '../store/modules/scroll';

export default function SubLayout({children,...props}){
    // 로그인체크
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
      if(typeof(localStorage.mb_token) != "string" && props.loginCheck == true){
        Swal.fire("로그인을 해주세요.");
        router.push('/login');
      }
    }, []);
    if(props.historyScroll == true){
      const dispatch = useDispatch();
      const scrollVal = useSelector(({scroll}) => scroll.scroll);
      const handleScroll = () => {
        const position = window.pageYOffset;
        dispatch(setScrollVal(position));
      };
      useLayoutEffect(() => {
        setTimeout(()=>{
          window.scrollTo(0,scrollVal);
        },500)
        window.addEventListener("scroll", handleScroll);
        return () => {
          window.removeEventListener("scroll", handleScroll);
        };
      }, []);
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
            <div className={'borderfix'}></div>

            {children}

            <div className={'mt55 mb60'}></div>

            <div>
                <FootTab pages={props.pages}></FootTab>
            </div>
        </div>
    )
}
