
import TitleLayout from '../layout/TitleLayout'
import Link from 'next/link'
import CheckBox from '../layout/CheckBox.js';
import {useRouter} from 'next/router'
import {useEffect,useState,useRef } from 'react';
import axios from 'axios';
import Swal from 'sweetalert2'

export default function FollowStore(){
    const [ck ,setCk] = useState(false);
    const [list ,setList] = useState([]);
    const [text ,setText] = useState('');
    const router = useRouter();
    const addRemoveFollow = (block_id) =>{
      const form = new FormData()
      form.append('block_id',block_id);
      form.append('mb_token',localStorage.mb_token);
      axios.post(process.env.api+"Feed/RemoveBlock",form
      ).then((res)=>{
        Swal.fire(res.data.msg);
        router.reload();
      })
    }

    useEffect(() => {
      axios.get(process.env.api+"Feed/BlockList",{
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
            <h1 className={'page_tit'}>BLOCK MEMBER</h1>
          </div>

          <div className={'followstore'}>
            <p className={'fs_count'}>
              <span>{list.length}</span> 개의 유저를 차단중입니다.
            </p>
            <ul className={'fs_list'}>
              {list.map((val,key) =>(
                <li key={key}>
                  <a>
                    <div>
                      <p className={'follow_name'}>{val.block_id}</p>
                    </div>
                  </a>
                  <button onClick={()=>addRemoveFollow(val.block_id)} className={'follow_btn following_btn'}>
                    차단해제
                  </button>
                </li>
              ))}
            </ul>
          </div>
        </TitleLayout>
    )
}
