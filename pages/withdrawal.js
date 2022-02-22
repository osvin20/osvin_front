import TitleLayout from '../layout/TitleLayout'
import Link from 'next/link'
import OsbinModal from '../layout/OsbinModal';
import AlertModal  from '../layout/OsbinModal';
import {reAlert} from '../store/modules/alert_popup';
import { useRouter } from "next/router";
import {useDispatch } from 'react-redux';
import axios from 'axios';
import {useEffect,useState,useRef } from 'react';
import Swal from 'sweetalert2'


export default function Withdrawal(){
    const router = useRouter();
    const useChange = (init) =>{
      const [value,setValue] = useState(init);
      const onChange = (e) =>{
        setValue(e.target.value);
      }
      return {onChange,value}
    }
    const [checked,setChecked] = useState(false);

    const memberLeave = () =>{
      if(!checked){
        Swal.fire("약관에 동의해주세요");
        return false;
      }
      const form = new FormData();
      form.append('mb_token',localStorage.mb_token);
      form.append('mb_password',mb_password.value);
      axios.post(process.env.api+"Member/Leave",form
      ).then((res)=>{
        Swal.fire(res.data.msg);
        if(res.data.state){
          localStorage.clear();
          router.push("/login");
        }

      }).catch((error)=> {

      });
    }

    const mb_password = useChange('');
    const dispatch = useDispatch();
    return (
        <TitleLayout>
            <div className={'pagetit_div'}>
              <h1 className={'page_tit'}>DELETE ACCOUNT</h1>
            </div>
            <ul className={'withdrawal_form'}>
              <li>
                <p>
                  비밀번호
                </p>
                <input type="password" {...mb_password}/>
              </li>
              <li>
                <p>
                  탈퇴 시 유의사항
                </p>
                <div className={'withdrawal_note'}>
                  오스빈 회원 탈퇴 유의사항입니다.
                </div>
              </li>
              <li>
              <div className={'member_del_ck'}>
                <input type="checkbox" id="withdrawal_ck" checked={checked} onChange={(e)=>setChecked(e.target.checked)}/>
                <label htmlFor="withdrawal_ck">
                  안내 사항을 모두 확인하였으며, 이에 동의합니다.
                </label>
              </div>
              </li>
            </ul>
            <div className={'withdrawal_btn_div'}>
              <OsbinModal
                title=""
                bnt_title ="탈퇴하기"
                btn_label ="아니오"
                class_name={"withdrawal_btn"}
                modalFun ={memberLeave}
                modal_id={"withdrawal_modal"}
              >
                <p className={"phone_modal"}>정말로 탈퇴하시겠습니까?</p>
              </OsbinModal>
            </div>

        </TitleLayout>
    )
}
