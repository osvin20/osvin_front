import Link from "next/link";
import {useEffect,useState,useRef } from 'react';
import axios from 'axios';
import Swal from 'sweetalert2'
import useHistoryState from '../hook/useHistoryState';
import restoreScrollPosition  from 'next-restore-scroll'
import { useRouter } from 'next/router';


export default function StoreFeed() {
  const [list , setList] = useHistoryState([],'sellList');
  const storeFeedList = () =>{
    axios.get(process.env.api+"Feed/SellerFeedList",
    ).then((res)=>{
      if(res.data.state && res.data.data.length != 0){
        setList(res.data.data);
      }else{
        Swal.fire('마지막 페이지입니다.')
      }
    }).catch((error)=> {
    });
  }
  useEffect(() => {
    storeFeedList();
  },[]);
  return (
    <div className={"storefeed"}>
      <ul className={"storefeed_ul"}>
      {list.map((val,key) =>(
        <li key={key}>
          <Link href={"/item?it_id="+val.it_id}>
            <a className={"storefeed_thumb"}>
              <img
                src={process.env.domain+'data/item/'+val.it_img}
                onError={(e)=>{e.target.src = '/img/no_img.png'}}
              />
            </a>
          </Link>
          <Link href={"/store?mb_id="+val.mb_id}>
            <a className={"store_div"}>
              <div className="shop_thumb">
                <img
                  src={val.mb_img}
                  onError={(e)=>{e.target.src = '/img/no_img.png'}}
                 />
              </div>
              <div>
                <p>{val.mb_nick}</p>
                <div className={"store_follow"}>
                  <img src="/img/user2.png" />
                  <span>{val.follow_cnt}</span>
                </div>
              </div>
            </a>
          </Link>
        </li>
        ))}
      </ul>
    </div>
  );
}
