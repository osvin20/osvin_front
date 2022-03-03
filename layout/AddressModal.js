import TitleLayout from './TitleLayout'
import Link from 'next/link'
import {useRouter} from 'next/router'
import {useEffect,useState,useRef} from 'react';
import axios from 'axios';

export default function AddressModal({selectAddress}){
  const [list,setList] = useState([]);
  useEffect(() => {
    // 배송지 조회
    axios.get(process.env.api+"Order/AddressList",{
      params: {
        mb_token:localStorage.mb_token
      }
    }).then((res)=>{
      if(res.data){
        setList(res.data.data);
      }
    }).catch((error)=>{});
  },[])
  const changeAddress =(key) => {
    selectAddress(key);
  }

  return (
      <div className={'address_modal_box'}>
        <div>
          <Link href="/address_form">
            <a className={'add_adrs'}>
              <img src="/img/plus.png" />
            </a>
          </Link>
        </div>
        <ul className={'adrs_list'}>
          {list.map((val,key) =>(
            <li key={key}>
              <div className={'adrs_flex_div'}>
                <div className={'address_check'}>

                </div>
                <div className={'adrs_mod'}>
                  <p className={'adrs_del'} onClick={()=>changeAddress(key)}>
                    선택
                  </p>
                </div>
              </div>
              <div className={'adrs_div'}>
                <p>이름</p>
                <div>
                  <input type="text" value={val.ad_name} />
                </div>
              </div>
              <div className={'adrs_div'}>
                <p>휴대폰 번호</p>
                <div>
                  <input type="text" value={val.ad_tel} />
                </div>
              </div>
              <div className={'adrs_div adrs_height'}>
                <p>우편번호</p>
                <div className={'adrs_flex'}>
                  <input type="text" value={val.ad_zip1+val.ad_zip2} />
                </div>
              </div>
              <div className={'adrs_div adrs_height'}>
                <p>주소</p>
                <div className={'adrs_flex'}>
                  <input type="text" value={val.ad_addr1} />
                </div>
              </div>
              <div className={'adrs_div'}>
                <p>상세주소</p>
                <div>
                  <input type="text" value={val.ad_addr2} />
                </div>
              </div>
            </li>
          ))}
        </ul>
      </div>
  )
}
