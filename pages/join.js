import LoginTheme from "../layout/LoginTheme";
import OsbinModal from "../layout/OsbinModal";
import Note from "../atomic/Note";
import Link from "next/link";
import { useRouter } from "next/router";
import {useEffect,useState,useRef } from 'react';
import axios from 'axios';
import Swal from 'sweetalert2'

export default function Join(){
  const router = useRouter();
  const joinFrom = useRef(); //form data값 저장
  const useChange = (init) =>{
    const [value,setValue] = useState(init);
    const onChange = (e) =>{
      setValue(e.target.value);
    }
    return {onChange,value}
  }
  const mb_id = useChange('');
  const mb_nick = useChange('');
  const mb_password = useChange('');
  const mb_password_ck = useChange('');
  const mb_hp = useChange('');
  const mb_auth = useChange('');
  const [allAgg,setAllAgg] = useState('');
  const [msgOvj,setMsgOvj] = useState('');

  const useCheck = () =>{
    const [checked,setChecked] = useState(false);
    const onChange = (e) =>{
      setChecked(e.target.checked);
    };
    return {onChange,checked};
  }
  //전체동의 구현
  const aggAll = useCheck();
  const agg1 = useCheck();
  const agg2 = useCheck();
  const agg3 = useCheck();
  const agg4 = useCheck();
  useEffect(() => {
    let es = {target:{checked:false}};
    es.target.checked = aggAll.checked;
    agg1.onChange(es);
    agg2.onChange(es);
    agg3.onChange(es);
    agg4.onChange(es);
  }, [aggAll.checked]);

  const smsAuth = () =>{
    const form = new FormData();
    form.append('mb_hp',mb_hp.value);
    axios.post(process.env.api+"Member/SmsAuth",form
    ).then((res)=>{
      Swal.fire(res.data.msg);
    }).catch((error)=> {

    });
  }

  const submitForm = () =>{
    const form = new FormData(joinFrom.current);
    if(!agg1.checked||!agg2.checked||!agg3.checked||!agg4.checked){
      Swal.fire("약관에 동의해주세요");
      return false;
    }

    form.append('mb_level','2');
    axios.post(process.env.api+"Member/Join",form
    ).then((res)=>{
      if(res.data.state){
        Swal.fire(res.data.msg);
        localStorage.setItem('mb_token',res.data.data.mb_token);
        localStorage.setItem('mb_login_ip',res.data.data.mb_login_ip);
        localStorage.setItem('mb_today_login',res.data.data.mb_today_login);
        localStorage.setItem('mb_id',res.data.data.mb_id);
        router.replace('/');
      }else{
        Swal.fire(res.data.msg);
        setMsgOvj(res.data.data);
      }
    }).catch((error)=> {

    });
  }
  return (
    <LoginTheme>
      <div className={"login_form join_form"}>
        <img
          className={"back"}
          src="/img/arrow_04.png"
          onClick={() => router.back()}
        />
        <h1>SIGN UP</h1>
        <div className={"join_form_div"}>
          <form ref={joinFrom}>
            <div className={"input_btn"}>
              <input placeholder="이메일을 입력해주세요." name="mb_id"  {...mb_id}/>
            </div>
            <Note noteText={msgOvj.mb_id}/>
            <div className={"input_btn"}>
              <input placeholder="닉네임을 입력해주세요." name="mb_nick"  {...mb_nick}/>
            </div>
            <Note noteText={msgOvj.mb_nick}/>
            <div className={"input_btn input_div"}>
              <input placeholder="비밀번호를 입력해주세요." type='password' name="mb_password"  {...mb_password}/>
            </div>
            <Note noteText={msgOvj.mb_password}/>
            <div className={"input_btn input_div"}>
              <input placeholder="비밀번호를 확인해주세요." type='password' name="mb_password_ck"  {...mb_password_ck}/>
            </div>
            <Note noteText={msgOvj.mb_password_ck}/>

            <div className={"input_btn input_send"}>
              <input placeholder="휴대폰 번호를 입력해주세요." name="mb_hp"  {...mb_hp}/>
              <div className="osbinModal" onClick={smsAuth}><span>인증번호 발송</span></div>
            </div>
            <Note noteText={msgOvj.mb_hp}/>
            <div className={"input_btn"}>
              <input placeholder="인증번호를 입력해주세요." name={'mb_auth'} {...mb_auth}/>
            </div>
            <Note/>
            <div className={"join_agree"}>
              <div>
                <input type="checkbox" id="all_agree" {...aggAll}/>
                <label htmlFor="all_agree">약관 전체동의</label>
              </div>


              <div className={"join_view"}>
                <input type="checkbox" id="all_agree1" {...agg1}/>
                <label htmlFor="all_agree1">(필수) 만 14세 이상입니다.</label>
                <OsbinModal
                  title=""
                  bnt_title ="보기"
                  class_name={"bnt"}
                  modal_id={"agree_modal"}
                >
                  <p className={"agree_txt"}>
                    (필수) 만 14세 이상입니다.
                  </p>
                </OsbinModal>
              </div>
              <div className={"join_view"}>
                <input type="checkbox" id="all_agree2" {...agg2}/>
                <label htmlFor="all_agree2">
                  (필수) 서비스 이용약관에 동의
                </label>
                <OsbinModal
                  title=""
                  bnt_title ="보기"
                  class_name={"bnt"}
                  modal_id={"agree_modal"}
                >
                  <p className={"agree_txt"}>
                    <iframe src={process.env.domain+'/agreement.php'} />
                  </p>
                </OsbinModal>
              </div>
              <div className={"join_view"}>
                <input type="checkbox" id="all_agree3" {...agg3}/>
                <label htmlFor="all_agree3">
                  (필수) 개인 정보 수집이용에 동의
                </label>
                <OsbinModal
                  title=""
                  bnt_title ="보기"
                  class_name={"bnt"}
                  modal_id={"agree_modal"}
                >
                  <p className={"agree_txt"}>
                    <iframe src={process.env.domain+'/privacy.php'} />
                  </p>
                </OsbinModal>
              </div>
              <div className={"join_view"}>
                <input type="checkbox" id="all_agree4" {...agg4}/>
                <label htmlFor="all_agree4">
                  (필수) 홍보 및 마케팅 이용에 동의
                </label>
                <OsbinModal
                  title=""
                  bnt_title ="보기"
                  class_name={"bnt"}
                  modal_id={"agree_modal"}
                  oncl
                >
                  <p className={"agree_txt"}>
                    <iframe src={process.env.domain+'/agreement3.php'} />
                  </p>
                </OsbinModal>
              </div>
            </div>
          </form>
        </div>
        <div className={"join_btn"}>
          <a onClick={submitForm}>
            <button>가입하기</button>
          </a>
        </div>
      </div>
    </LoginTheme>
  );
}
