import TitleLayout from '../layout/TitleLayout'
import {useRouter} from 'next/router'
import {useEffect,useState} from 'react';
import Swal from 'sweetalert2'
import {useDispatch } from 'react-redux';
import axios from 'axios';
import Link from 'next/link'

export default function AddressList(){
  const [list,setList] = useState([]);
  const router = useRouter();
  const addressRemove = (ad_id) =>{
    const form = new FormData();
    form.append('mb_token',localStorage.mb_token);
    form.append('ad_id',ad_id);
    axios.post(process.env.api+"Order/AddressRemove",form
    ).then((res)=>{
      if(res.data.state){
        Swal.fire(res.data.msg);
        router.reload();
      }
    }).catch((error)=> {});
  }

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
              <li key={key}>
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
                    <p
                      className={'adrs_del'}
                      onClick={()=>addressRemove(val.ad_id)}
                    >
                    삭제
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
        </TitleLayout>
    )
}
