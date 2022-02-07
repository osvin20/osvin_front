import TitleLayout from '../layout/TitleLayout'
import Link from 'next/link'
import OsbinModal from "../layout/OsbinModal";
import {useRouter} from 'next/router'
import Swal from 'sweetalert2'
import {useEffect,useState,useRef } from 'react';
import axios from 'axios';
import DaumPostCode from 'react-daum-postcode';

export default function AddressForm(){
  const [open,setOpen] = useState(false);
  const [ad_zip,setAd_zip] = useState('');
  const [ad_address1,setAd_address1] = useState('');
  const handleComplete = (data) => {
    let fullAddress = data.address;
    let extraAddress = '';

    if (data.addressType === 'R'){
        if (data.bname !== '') {
            extraAddress += data.bname;
        }
        if (data.buildingName !== '') {
            extraAddress += (extraAddress !== '' ? `, ${data.buildingName}` : data.buildingName);
        }
        fullAddress += (extraAddress !== '' ? ` (${extraAddress})` : '');
        console.log(fullAddress);
        setOpen(false)
    }

    setAd_zip(data.zonecode);
    setAd_address1(fullAddress);
    //fullAddress -> 전체 주소반환

  }
  const useChange = (init) =>{
    const [value,setValue] = useState(init);
    const onChange = (e) =>{
      setValue(e.target.value);
    }
    return {onChange,value}
  }
  const submitForm = () =>{
    const form = new FormData(formRef.current);
    form.append('mb_token',localStorage.mb_token);
    axios.post(process.env.api+"Order/AddressAdd",form
    ).then((res)=>{
      if(res.data.state){
        Swal.fire(res.data.msg);
        router.replace('/address_list');
      }else{
        let msg = res.data.data[Object.keys(res.data.data)[0]];
        Swal.fire(msg);
      }
    }).catch((error)=> {

    });
  }
  const formRef = useRef(); //form data값 저장
  const router = useRouter()
    return (
        <TitleLayout loginCheck={true}>
          <div className={'pagetit_div'}>
            <h1 className={'page_tit'}>ADDRESS</h1>
          </div>
          <form ref={formRef}>
            <div className={'address_form'}>
              <div className={'address_check'}>
                <input type="checkbox" id="address_basic"/>
                <label htmlFor="address_basic">기본 배송지로 설정</label>
              </div>
              <div className={'adrs_div'}>
                <p>이름</p>
                <div>
                  <input type="text" name={'ad_name'}/>
                </div>
              </div>
              <div className={'adrs_div'} >
                <p>휴대폰 번호</p>
                <div>
                  <input type="text" name={'ad_tel'}/>
                </div>
              </div>
              <div className={'adrs_div adrs_height'}>
                <p>우편번호</p>
                <div className={'adrs_flex'}>
                  <input type="text" name={'ad_zip'} value={ad_zip}/>
                  <button type='button' onClick={()=>setOpen(true)}>
                    우편번호 찾기
                  </button>
                </div>
              </div>
              <div className={'adrs_div'}>
                <p>주소</p>
                <div>
                  <input type="text" name={'ad_addr1'} value={ad_address1}/>
                </div>
              </div>
              <div className={'adrs_div'}>
                <p>상세주소</p>
                <div>
                  <input type="text" name={'ad_addr2'}/>
                </div>
              </div>
            </div>
            {open &&
              <div className={'daumPostCode'}>
                <DaumPostCode onComplete={handleComplete} className="post-code" />
                <div className={'adrs_btn'} onClick={()=>setOpen(false)}>
                  <span>닫기</span>
                </div>
              </div>
            }
          </form>
          <div className={'adrs_btn'}  onClick={submitForm}>
            <span>배송지등록</span>
          </div>

        </TitleLayout>
    )
}
