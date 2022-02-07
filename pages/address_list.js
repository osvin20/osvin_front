import TitleLayout from '../layout/TitleLayout'
import {useRouter} from 'next/router'
import {useEffect,useState} from 'react';
import Swal from 'sweetalert2'
import {useDispatch } from 'react-redux';
import axios from 'axios';
import Link from 'next/link'

export default function AddressList(){
  const [list,setList] = useState([]);
  useEffect(() =>{
    axios.get(process.env.api+"Order/AddressList",{
      params: {
        mb_token:localStorage.mb_token
      }
    }).then((res)=>{
      if(res.data){
        setList(res.data.data);
      }
    }).catch((error)=> {

    });
  },[]);
    return (
        <TitleLayout loginCheck={true}>
          <div className={'pagetit_div'}>
            <h1 className={'page_tit'}>ADDRESS</h1>
          </div>
          <div>
            <Link href="/address_form">
              <a className={'add_adrs'}>
                <img src="/img/plus.png" />
              </a>
            </Link>
          </div>
          <ul className={'adrs_list'}>
            {list.map((val,key) =>(
              <li>
                <div className={'adrs_flex_div'}>
                  <div className={'address_check'}>
                    {key == 0 &&
                      <label htmlFor="address_basic">기본 배송지</label>
                    }
                  </div>
                  <div className={'adrs_mod'}>
                    <Link href="/address_form">
                      <a>수정</a>
                    </Link>
                    <p className={'adrs_del'}>삭제</p>
                  </div>
                </div>
                <div className={'adrs_div'}>
                  <p>이름</p>
                  <div>
                    <input type="text" placeholder="오스빈" />
                  </div>
                </div>
                <div className={'adrs_div'}>
                  <p>휴대폰 번호</p>
                  <div>
                    <input type="text" placeholder="010-0000-0000" />
                  </div>
                </div>
                <div className={'adrs_div adrs_height'}>
                  <p>주소</p>
                  <div className={'adrs_flex'}>
                    <input type="text" placeholder="145236" />

                  </div>
                </div>
                <div className={'adrs_div'}>
                  <p>상세주소</p>
                  <div>
                    <input type="text" placeholder="00아파트 101동 105호" />
                  </div>
                </div>

              </li>
            ))}
          </ul>
        </TitleLayout>
    )
}
