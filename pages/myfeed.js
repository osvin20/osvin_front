
import SubLayout from '../layout/SubLayout'
import Link from 'next/link'
import {useRouter} from 'next/router'
import {useEffect,useState,useRef } from 'react';
import axios from 'axios';
import Swal from 'sweetalert2'

export default function Myfeed(){

  const [member , setMember] = useState([]);
  const [memberCnt , setMemberCnt] = useState([]);
  const [list , setList] = useState([]);
  useEffect(() => {
    axios.get(process.env.api+"Member/Info",{
      params: {
        mb_token:localStorage.mb_token
      }
    }).then((res)=>{
      if(res.data.state){
        setMember(res.data.data);
      }
    }).catch((error)=> {
    });
    axios.get(process.env.api+"Feed/MyFeed/0",{
      params: {
        mb_token:localStorage.mb_token
      }
    }).then((res)=>{
      if(res.data.state){
        setList(res.data.data.list);
        setMemberCnt(res.data.data.member)
      }
    }).catch((error)=> {
    });
  },[]);
    return (
        <SubLayout loginCheck={true}>
          <div className={'user_info'}>
            <div className={'user_info_div'}>
              <div className={'user_prof'}>
                <img
                  src={member.mb_img}
                  onError={(e)=>{e.target.src = '/img/no_prof.png'}}
                />
              </div>
              <ul className={'user_fllow'}>
                <li>
                  <Link href={'/follow_list?mb_id='+member.mb_id}>
                    <a>
                      <p>팔로잉</p>
                      <span>{memberCnt.following}</span>
                    </a>
                  </Link>
                </li>
                <li>
                  <Link href={'/follow_list?tabnumber=1&mb_id='+member.mb_id}>
                    <a>
                      <p>팔로워</p>
                      <span>{memberCnt.follower}</span>
                    </a>
                  </Link>
                </li>
                <li>
                  <p>추천받은 수</p>
                  <span>{memberCnt.member_cnt}</span>
                </li>
              </ul>
            </div>
            <div className={'user_txt'}>
              <h2>{member.mb_nick}</h2>
              <p>{member.mb_memo}</p>
              <Link href="/myinfo">
                <a className={'prof_edit'}>
                  프로필 편집
                </a>
              </Link>
            </div>
          </div>
          <div className={'userfeed_pic'}>
            <ul>
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
          <Link href="/addpost">
            <a className={'feed_write'}>
              <img src="/img/plus.png"/>
            </a>
          </Link>
        </SubLayout>
    )
}
