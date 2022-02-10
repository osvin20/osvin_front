
import TitleLayout from '../layout/TitleLayout'
import Link from 'next/link'
import OsbinModal from "../layout/OsbinModal";
import {useRouter} from 'next/router'
import {useEffect,useState,useRef } from 'react';
import axios from 'axios';
import Swal from 'sweetalert2'

export let member_del ="정말 탈퇴하시겠습니까?";
export let phone_num = "인증에 성공하였습니다.";
export default function MyInfo(){
  const router = useRouter();
  const refForm = useRef(); //form data값 저장
  const useChange = (init) =>{
    const [value,setValue] = useState(init);
    const onChange = (e) =>{
      if(typeof(e) == "object"){
        setValue(e.target.value);
      }else{
        setValue(e);
      }
    }
    return {onChange,value}
  }
  const removeMbImg = () =>{
    const form = new FormData();
    form.append('mb_token',localStorage.mb_token);
    axios.post(process.env.api+"Member/RemoveMbImg",form
    ).then((res)=>{
      Swal.fire("이미지가 변경되었습니다.");
      setUserImg('/img/no_prof.png');
    }).catch((error)=> {

    });
  }
  const submitForm = () =>{
    const form = new FormData(refForm.current);
    form.append('mb_token',localStorage.mb_token);
    axios.post(process.env.api+"Member/Update",form
    ).then((res)=>{
      if(res.data.state){
        Swal.fire(res.data.msg);
        router.replace('/mypage');
      }else{
        Swal.fire(res.data.msg);
      }
    }).catch((error)=> {

    });
  }

  const [userImg , setUserImg] = useState('/img/no_prof.png');
  const mb_nick = useChange('');
  const mb_memo = useChange('');
  const imgPreView = (e) =>{
    const fileBlob = e.target.files[0]
    const reader = new FileReader();
    reader.readAsDataURL(fileBlob);
    return new Promise((resolve) => {
      reader.onload = () => {
        setUserImg(reader.result);
        resolve();
      };
    });
  }
  useEffect(() => {
    axios.get(process.env.api+"Member/Info",{
      params: {
        mb_token:localStorage.mb_token
      }
    }).then((res)=>{
      if(res.data.state){
        const mb = res.data.data;
        mb_nick.onChange(mb.mb_nick);
        mb_memo.onChange(mb.mb_memo);
        setUserImg(mb.mb_img);
      }
    }).catch((error)=> {
    });
  },[]);
  return (
      <TitleLayout loginCheck={true}>
        <div className={'pagetit_div'}>
          <h1 className={'page_tit'}>MY INFO</h1>
        </div>
        <form ref={refForm}>
          <div className={'myinfo'}>
            <div className={'prof_pic'}>
              <div className={'prof_change'}>
                <img
                  src={userImg}
                  onError={(e)=>{e.target.src = '/img/no_prof.png'}}
                />
                <input
                  type="file"
                  name="mb_img"
                  accept="img/*"
                  id="prof_file"
                  onChange={imgPreView}
                />
                <label htmlFor="prof_file">EDIT</label>
              </div>
              <p onClick={removeMbImg}>기본 이미지로 변경</p>
            </div>
            <div className={'info_input'}>
              <ul>
                <li>
                  <p>
                    닉네임
                  </p>
                  <div>
                    <input type="text" name='mb_nick' {...mb_nick}/>
                  </div>
                </li>
                <li>
                  <p>
                    소개말
                  </p>
                  <div>
                    <input type="text" name='mb_memo' {...mb_memo}/>
                  </div>
                </li>
                <li>
                  <p>
                    비밀번호
                  </p>
                  <div>
                    <input type="password" name='mb_password'/>
                  </div>
                </li>
                <li>
                  <p>
                    비밀번호 확인
                  </p>
                  <div>
                    <input type="password" name='mb_password_ck'/>
                  </div>
                </li>
                {/* <li>
                  <p>
                  휴대폰 번호
                  </p>
                  <div>
                  <input type="text"/>
                  <button className={'send_btn'}>
                  인증번호 전송
                  </button>
                  </div>
                  </li>
                  <li className={'phonenum'}>
                  <p>
                  휴대폰 번호
                  </p>
                  <div>
                  <input type="text"/>

                  <OsbinModal
                  title=""
                  bnt_title="인증하기"
                  class_name={"phone_submit"}
                  >
                  <p className={'phone_modal'}>{phone_num}</p>
                  </OsbinModal>
                  </div>
                </li> */}
              </ul>
              <div class="osbinModal" onClick={submitForm}>
                <span class="info_submit">수정완료</span>
              </div>

              <Link href='withdrawal'>
                <a className={'member_del'}>
                  탈퇴하기
                </a>
              </Link>
            </div>
          </div>
        </form>
      </TitleLayout>
  )
}
