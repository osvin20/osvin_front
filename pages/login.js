
import LoginTheme from '../layout/LoginTheme'
import Link from 'next/link'
import { useRouter } from "next/router";
import {useEffect,useState,useRef } from 'react';
import axios from 'axios';
import Swal from 'sweetalert2'
export default function Login(){
  const loginFrom = useRef(); //form data값 저장
  const router = useRouter();
  const [url,setUrl] = useState("");
  const submitForm = () =>{
    const form = new FormData(loginFrom.current);
    axios.post(process.env.api+"Member/Login",form
    ).then((res)=>{
      if(res.data.state){
        localStorage.setItem('mb_token',res.data.data.mb_token);
        localStorage.setItem('mb_login_ip',res.data.data.mb_login_ip);
        localStorage.setItem('mb_today_login',res.data.data.mb_today_login);
        localStorage.setItem('mb_id',res.data.data.mb_id);
        router.replace('/');
      }else{
        Swal.fire(res.data.msg);
      }
    })
  }
  useEffect(() => {
    const mapScript = document.createElement("script");
    mapScript.async = true;
    mapScript.src = `//appleid.cdn-apple.com/appleauth/static/jsapi/appleid/1/en_US/appleid.auth.js`;
    document.head.appendChild(mapScript);
    setUrl(window.location.host);
  },[])
  return (
    <LoginTheme>
      <meta name="appleid-signin-client-id" content="com.osvin"/>
      <meta name="appleid-signin-scope" content="email"/>
      <meta name="appleid-signin-redirect-uri" content="https://osvintique.com/api/Member/AppleLogin"/>
      <meta name="appleid-signin-state" content={url}/>
      <meta name="appleid-signin-use-popup" content="false"/>
      <div className={'login_form'}>
        <div className={'login_logo'}>
          <img src="/img/logo3.png"/>
        </div>
        <form ref={loginFrom}>
          <div className={'login_input'}>
            <input placeholder='EMAIL' type='text' name='mb_id'></input>
            <input placeholder='PASSWORD'  type='password' name='mb_password'></input>
          </div>
          <div className={'join_direct'}>
            <div>
              <Link href='/join'>
                <a>
                  회원가입
                </a>
              </Link>

            </div>
            <Link href='/find'>
              <a>
                이메일·비밀번호 찾기
              </a>
            </Link>
          </div>
          <div className={'login_btn'} onClick={submitForm}>
            <a>LOGIN</a>
          </div>
        </form>
        <div className={'social_login'}>
          <div>
            <span></span>
            <p>SOCIAL LOGIN</p>
            <span></span>
          </div>
          <div className={'sns_ico'}>
            <Link href={`${process.env.domain}/bbs/login.php?provider=kakao&url=https%3A%2F%2Fosvintique.com%2Fplugin%2Fsocial%2Fpopup.php%3Fprovider%3Dkakao`}>
              <a>
                <img src="/img/kakao.png"/>
              </a>
            </Link>
            <a className={'apple'}>
              <div id="appleid-signin"/>
              <img src="/img/apple.png"/>
            </a>
          </div>
        </div>
      </div>
    </LoginTheme>

  )

}
