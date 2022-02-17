import Link from 'next/link'
import {useEffect,useState,useRef } from 'react';
import axios from 'axios';
import Swal from 'sweetalert2'
import useHistoryState from '../hook/useHistoryState';
import restoreScrollPosition  from 'next-restore-scroll'
import { useRouter } from 'next/router';
export default function AllFeed(){
  const [list , setList] = useHistoryState([],'list');
  const [offset , setOffset] = useHistoryState(0,'offset');
  const [ck,setCk] = useState(list.length != 0 ? false:true); //useEffect가 재랜더 하는 부분을 막아줌
  const router = useRouter();
  const allfeedList = () =>{
    axios.get(process.env.api+"Feed/List/"+offset,{
    }).then((res)=>{
      if(res.data.state && res.data.data.length != 0){
        setList([...list,...res.data.data]);
      }else{
        Swal.fire('마지막 페이지입니다.')
      }
    }).catch((error)=> {
    });
  }
  useEffect(() => {
    if(ck){
      allfeedList();
    }else{
      setCk(true)
    }
  },[offset]);
    return (
      <div className={'storefeed'}>
        <ul className={'storefeed_ul'}>
          {list.map((val,key) =>(
            <li key={key}>
              <Link href={'/post?wr_id='+val.wr_id}>
                <a>
                  <img
                    src={val.bf_file}
                    onError={(e)=>{e.target.src = '/img/no_img.png'}}
                  />
                </a>
              </Link>
            </li>
          ))}
        </ul>
        <div className={"info_btn_box"}>
          <button className={"info_btn"} onClick={()=>setOffset(offset+1)}>더보기</button>
        </div>
      </div>
    );
  }
