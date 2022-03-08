
import LoginTheme from '../layout/LoginTheme'
import Link from 'next/link'

import {useRouter} from 'next/router'
import {useEffect,useState,useRef } from 'react';
import axios from 'axios';

export default function Welcome({query}){
  const {mb_token} = query;
  const [member,setMember] = useState([]);
  useEffect(() => {
    axios.get(process.env.api+"Member/Info",{
      params: {
        mb_token:mb_token
      }
    }).then((res)=>{
      if(res.data.state){
        setMember(res.data.data);
        localStorage.setItem('mb_token',res.data.data.mb_token);
        localStorage.setItem('mb_login_ip',res.data.data.mb_login_ip);
        localStorage.setItem('mb_today_login',res.data.data.mb_today_login);
        localStorage.setItem('mb_id',res.data.data.mb_id);
      }
    }).catch((error)=> {
    });
  },[]);
    return (
        <LoginTheme>
            <div className={'welcome'}>
                <div className={'welcome_div'}>
                    WELCOME
                </div>
                <div>
                    <h1>
                        <span>{member.mb_nick}</span>님
                    </h1>
                    <p>
                        {member.mb_nick} 님 환영합니다.!<br></br>
                        지금부터 오스빈의 다양한 상품을 구경하고<br></br>
                        환경캠페인에 동참해보세요!
                    </p>
                </div>
                <Link href='/'>
                        <a className={'join_start'}>
                            쇼핑하기
                        </a>
                </Link>
            </div>
        </LoginTheme>
    )
}
Welcome.getInitialProps = async ({ req ,query }) => {
  return {query}
}
