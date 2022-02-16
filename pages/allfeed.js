import Link from 'next/link'
import {useEffect,useState,useRef } from 'react';
import axios from 'axios';
import Swal from 'sweetalert2'

export default function AllFeed(){
  const [list , setList] = useState([]);
  const [page , setPage] = useState([]);
  useEffect(() => {
    axios.get(process.env.api+"Feed/List/0",{

    }).then((res)=>{
      if(res.data.state){
        setList(res.data.data);
      }
    }).catch((error)=> {
    });
  },[page]);
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
      </div>
    );
  }
