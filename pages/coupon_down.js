import TitleLayout from '../layout/TitleLayout'
import Link from 'next/link'
import {useDispatch } from 'react-redux';
import {useEffect,useState} from 'react';
import axios from 'axios';
import Swal from 'sweetalert2'

function CouponDown({query}){
    const {it_id} = query;
    const [item, setItem] = useState([]);
    const [coupon, setCoupon] = useState([]);
    const couponAdd = (cz_id) =>{
      const form = new FormData();
      form.append('mb_token',localStorage.mb_token);
      form.append('cz_id',cz_id);
      axios.post(process.env.api+"Item/CouponAdd",form
      ).then((res)=>{
        Swal.fire(res.data.msg);

      }).catch((error)=> {

      });
    }
    useEffect(() => {
      axios.get(process.env.api+"Item/Info/"+it_id,{
        params: {
          mb_token:localStorage.mb_token
        }
      }).then((res)=>{
        /* if(res.data.state){
          console.log(res);
        } */
        if(typeof(res.data.data) == 'object'){
          setItem(res.data.data);
        }
      }).catch((error)=> {});

      axios.get(process.env.api+'Item/CouponZone/'+it_id
      ).then((res) => {
        if(typeof(res.data.data) == 'object'){
          setCoupon(res.data.data);
        }
        console.log(res.data.data);
      }).catch((error) => {});

    },[]);
    return (
        <TitleLayout>
          <div className={'pagetit_div'}>
            <h1 className={'page_tit'}>COUPON</h1>
          </div>
          <div className={'borderfix'}></div>
          <div className={'coupon_down'}>

            <div className={'coupon_all'}>
              <p className={'extra_bold'}>{item.it_name}</p>
              {/* <button className={'extra_bold'}>
                전체받기<img src="img/down.png" className={'downimg'}/>
              </button> */}
            </div>
            <ul className={'down_list'}>
              {coupon.map((val, key) => (
                /* <li className={'download_coupon'}> 다운로드시 class 추가*/
                  <li key={key}>
                    <div className={'coupon_info'}>
                      <p className={'coupon_price'}>
                        <span>{val.cp_price}</span>원
                      </p>
                      <span>{val.cz_subject}</span>
                      <p className={'coupon_date'}>{val.cz_end} 까지</p>
                    </div>
                    <div className={'couponico'}>
                      <div onClick={()=>couponAdd(val.cz_id)}>
                        <img src="img/w_down.png" className={'downimg'}/>
                      </div>
                    </div>
                  </li>
              ))}
            </ul>
          </div>
        </TitleLayout>
    )
}
CouponDown.getInitialProps = async ({ req ,query }) => {
  return {query}
}
export default CouponDown;
