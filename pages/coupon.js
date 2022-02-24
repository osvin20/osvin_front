
import TitleLayout from '../layout/TitleLayout'
import Link from 'next/link'
import Swal from 'sweetalert2'
import axios from 'axios';
import {useRouter} from 'next/router'
import {useEffect,useState,useRef} from 'react';
import DaumPostCode from 'react-daum-postcode';

export default function Coupon(){
  const [list,setList] = useState([]);
  useEffect(() => {
    // 배송지 조회
    axios.get(process.env.api+"Item/CouponList",{
      params: {
        mb_token:localStorage.mb_token
      }
    }).then((res)=>{
      if(res.data.state){
        setList(res.data.data);
      }
    }).catch((error)=>{});
   }, []);
    return (
        <TitleLayout>
          <div className={'pagetit_div'}>
            <h1 className={'page_tit'}>COUPON</h1>
          </div>
          <div className={'couponpage'}>
            <p className={'coupon_count'}>
              보유쿠폰
              <span> {list.length}</span>개
            </p>
            <ul className={'couponlist'}>
              {list.map((val,key) =>(
                <li key={key}> 
                  <Link href={"/store?mb_id="+val.mb_sell_id}>
                    <a>
                      <div className={'couponinfo'}>
                        <img
                          src={val.mb_img}
                          className={'couponimg'}
                          onError={(e)=>{e.target.src =  "/img/no_img.png"}}
                        />
                        <div className={'coupon_flex'}>
                          <div>
                            <p className={'coupon_store'}>{val.mb_nick}</p>
                            <p className={'coupon_price'}>{val.cp_price_text}원</p>
                            <p className={'coupon_txt'}>{val.cp_subject}</p>
                          </div>
                          <p className={'coupon_date'}>{val.cp_end}까지</p>
                        </div>
                      </div>
                      <div className={'arrow_circle'}>
                        <img src="img/arrow_08.png"/>
                      </div>
                    </a>
                  </Link>
                </li>
              ))}
            </ul>
            </div>
        </TitleLayout>
    )
}
