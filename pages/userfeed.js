
import SubLayout from '../layout/SubLayout'
import Link from 'next/link'
import {useRouter} from 'next/router'
import {useEffect,useState} from 'react';
import {useDispatch } from 'react-redux';
import axios from 'axios';
import CheckBox from '../atomic/CheckBox.js';
import Swal from 'sweetalert2'

export default function UserFeed({query}){
  const {mb_id} = query;
  const [list , setList] = useState([]);
  const [member , setMember] = useState([]);
  const [myMb_id,setMyMb_id] = useState('');
  const router = useRouter();
  const [follow,setFollow] = useState(false);
  const addRemoveFollow = () =>{
    const form = new FormData()
    form.append('to_mb_id',mb_id);
    form.append('mb_token',localStorage.mb_token);
    axios.post(process.env.api+"Feed/AddRemoveFollow",form
    ).then((res)=>{
      Swal.fire(res.data.msg);
    })
  }
  const addBlock = () =>{
    Swal.fire({
      title: '정말 차단합니까?',
      text: "차단된 사용자의 피드에는 접근이 불가합니다.",
      icon: 'warning',
      showCancelButton: true,
      confirmButtonColor: '#ca8756',
      cancelButtonColor: '#ddd',
      confirmButtonText: '차단합니다.',
      cancelButtonText: '아니오',
    }).then((result) => {
      if (result.isConfirmed) {
        const form = new FormData();
        form.append('block_id',mb_id);
        form.append('mb_token',localStorage.mb_token);
        axios.post(process.env.api+"Feed/AddBlock",form
        ).then((res)=>{
          if(res.data.state){
            Swal.fire(
              '차단되었습니다',
              '사용자로 인해 불편을 드려서 죄송합니다.',
              'success'
            )
            router.back();
          }else {
            Swal.fire(res.data.msg);
          }
        }).catch((error)=> {
        });
      }
    })
  }
  useEffect(() =>{
    setMyMb_id(localStorage.mb_id);

    axios.get(process.env.api+"Feed/GetBlock",{
      params: {
        block_id:mb_id,
        mb_token:localStorage.mb_token
      }
    }).then((res)=>{
      if(res.data.state){

      }else{
        Swal.fire('차단한 사용자입니다.');
        router.back();
      }
    }).catch((error)=> {
    });

    axios.get(process.env.api+"Feed/UserFeed/0",{
      params: {
        mb_id:mb_id,
        mb_token:localStorage.mb_token
      }
    }).then((res)=>{
      if(res.data.state){
        setList(res.data.data.list);
        setMember(res.data.data.member);
        setFollow(res.data.data.member.follow);
      }
    }).catch((error)=> {
    });
  },[]);



  return (
      <SubLayout>
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
                <Link href={'/follow_list?mb_id='+mb_id}>
                  <a>
                    <p>팔로잉</p>
                    <span>{member.following}</span>
                  </a>
                </Link>
              </li>
              <li>
                <Link href={'/follow_list?tabnumber=1&mb_id='+mb_id}>
                  <a>
                    <p>팔로워</p>
                    <span>{member.follower}</span>
                  </a>
                </Link>
              </li>
              <li>
                <p>추천받은 수</p>
                <span>{member.member_cnt}</span>
              </li>
            </ul>
          </div>
          <div className={'user_txt'}>
            <h2>{member.mb_nick}</h2>
            <p>{member.mb_memo}</p>
            {myMb_id != member.mb_id ?
              <>
                <CheckBox
                  id={"checkBox1"}
                  defCk={follow}
                  offEl={
                    <button className={'follow_btn'}>
                      팔로우
                    </button>
                  }
                  onEl={
                    <button className={'follow_btn following_btn'}>
                      팔로잉
                    </button>
                  }
                  onchangeHandler={addRemoveFollow}
                />
                <button className={'block_edit'} onClick={addBlock}>
                  차단
                </button>
              </>
              :
              <Link href="/myinfo">
                <a className={'prof_edit'}>
                  프로필 편집
                </a>
              </Link>
            }
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
UserFeed.getInitialProps = async ({ req ,query }) => {
  return {query}
}
