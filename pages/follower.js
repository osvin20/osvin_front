import Link from 'next/link'
import CheckBox from '../atomic/CheckBox.js';
import OsbinModal from '../layout/OsbinModal.js';
import {useRouter} from 'next/router'
import {useEffect,useState,useRef } from 'react';
import axios from 'axios';
import Swal from 'sweetalert2'

export default function Follower({mb_id}){
    const [ck ,setCk] = useState(false);
    const [list ,setList] = useState([]);
    const [text ,setText] = useState('');
    const addRemoveFollow = (mb_id) =>{
      const form = new FormData()
      form.append('to_mb_id',mb_id);
      form.append('mb_token',localStorage.mb_token);
      axios.post(process.env.api+"Feed/AddRemoveFollow",form
      ).then((res)=>{
        Swal.fire(res.data.msg);
      })
    }
    const followerwerList = (val) =>{
      axios.get(process.env.api+"Feed/FollowerList/"+mb_id,{
        params: {
          sc_text:val
        }
      }).then((res)=>{
        if(res.data.state){
          setList(res.data.data);
        }
      }).catch((error)=> {
      });
    }
    useEffect(() => {
      followerwerList(text)
    },[]);
    return (
        <div className={'followlist'}>
          <div className={'search_div'}>
            <input
              placeholder="검색"
              value={text}
              onChange={e=>setText(e.target.value)}
            />
            <img
              src="/img/search_tab.png"
              onClick={()=>followerwerList(text)}
            />
          </div>
          <ul>
          {list.map((val,key) =>(
            <li key={key}>
              <Link href={'/userfeed?mb_id='+val.mb_id}>
                <a>
                  <div className='follow_user'>
                    <img
                      src={val.mb_img}
                      onError={(e)=>{e.target.src = '/img/no_prof.png'}}
                    />
                  </div>
                  {val.mb_nick}
                </a>
              </Link>
            </li>
          ))}
          </ul>
        </div>
    )
}
