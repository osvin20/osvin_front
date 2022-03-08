import TitleLayout from "../layout/TitleLayout";
import Link from "next/link";
import React from "react";
import {useRouter} from 'next/router'
import {useEffect,useState,useRef } from 'react';
import axios from 'axios';

export default function FollowFeed() {
  const [list ,setList] = useState([]);
  useEffect(() => {
    axios.get(process.env.api+"Feed/FollowingFeed",{
      params: {
        mb_token:localStorage.mb_token
      }
    }).then((res)=>{
      if(res.data.state){
        setList(res.data.data);
      }
    }).catch((error)=> {
    });
  },[]);

  return (
    <TitleLayout>
      <div className={'pagetit_div'}>
        <h1 className={'page_tit'}>FOLLOW FEED</h1>
      </div>
      <div className={"storefeed followfeed"}>
        <ul className={"storefeed_ul"}>
          {list.map((val,key) =>(
            <li key={key}>
              <Link href="/item">
                <a className={"storefeed_thumb"}>
                  <img
                    src={val.bf_file}
                    onError={(e)=>{e.target.src = '/img/no_img.png'}}
                  />
                </a>
              </Link>
            </li>
          ))}
        </ul>
      </div>
    </TitleLayout>
  );
}
