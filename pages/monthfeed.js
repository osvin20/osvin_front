import Link from 'next/link'
import {useEffect,useState,useRef } from 'react';
import axios from 'axios';
import Swal from 'sweetalert2'
import Image from 'next/image'

export default function MonthFeed(){
  const [list , setList] = useState([]);
  const [page , setPage] = useState([]);
  useEffect(() => {
    axios.get(process.env.api+"Feed/List/0",{
      params:{
        orderBy:"cnt"
      }
    }).then((res)=>{
      if(res.data.state){
        setList(res.data.data);
      }
    }).catch((error)=> {
    });
  },[page]);
  const myLoader = (src) => {
    return src
  }
  return (
    <div className={'storefeed'}>
      <ul className={'storefeed_ul'}>
        {list.map((val,key) =>(
          <li key={key}>
            <Link href={'/post?wr_id='+val.wr_id}>
              <a>
                <Image
                  layout={"fill"}
                  loader={()=>myLoader(val.bf_file)}
                  src={'/img/no_img.png'}
                  onError={(e)=>{e.target.src = '/img/no_img.png'}}
                />
                <span className={'item_ranking extra_bold'}>{key+1}</span>
              </a>
            </Link>
          </li>
        ))}
      </ul>
    </div>
  );
  }
