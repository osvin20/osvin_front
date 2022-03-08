
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
    const addRemoveFollow = (mb_id) =>{
      const form = new FormData()
      form.append('to_mb_id',mb_id);
      form.append('mb_token',localStorage.mb_token);
      axios.post(process.env.api+"Feed/AddRemoveFollow",form
      ).then((res)=>{
        Swal.fire(res.data.msg);
      })
    }

    useEffect(() => {
      axios.get(process.env.api+"Feed/FollowingStore",{
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
            <h1 className={'page_tit'}>FOLLOW STORE</h1>
          </div>

          <div className={'followstore'}>
            <p className={'fs_count'}>
              <span>{list.length}</span> 개의 스토어를 팔로우 중입니다.
            </p>
            <ul className={'fs_list'}>
              {list.map((val,key) =>(
                <li key={key}>
                  <Link href={`/store?mb_id=${val.to_mb_id}`}>
                    <a>
                      <img
                        src={val.mb_img}
                        onError={(e)=>{e.target.src = '/img/no_prof.png'}}
                        className={'follow_img'}
                      />
                      <div>
                        <p className={'follow_name'}>{val.mb_nick}</p>

                      </div>
                    </a>
                  </Link>
                  <CheckBox
                    id={"checkBox1"}
                    defCk={false}
                    offEl={
                      <button className={'follow_btn following_btn'}>
                        팔로잉
                      </button>
                    }
                    onEl={
                      <button className={'follow_btn'}>
                        팔로우
                      </button>
                    }
                  />
                </li>
              ))}
            </ul>
          </div>
        </TitleLayout>
    )
}
