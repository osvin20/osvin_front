
import TitleLayout from '../layout/TitleLayout'
import Link from 'next/link'
import {useEffect,useState} from 'react';
import Swal from 'sweetalert2'
import axios from 'axios';

function OrderConfirm({query}){
    const {od_id} = query;
    const [odconfm, setOdconfm] = useState([]);
    const [odconfmlist, setOdconfmlist] = useState([]);

    useEffect(() => {
      axios.get(process.env.api+'Order/Info/'+od_id,{
        params: {
          mb_token:localStorage.mb_token
        }
      }).then((res) => {
        if(typeof(res.data.data.order) == 'object'){
          setOdconfm(res.data.data.order);
        }
        if(typeof(res.data.data.list) == 'object'){
          setOdconfmlist(res.data.data.list);
          console.log(res.data.data.list);
        }
      }).catch((error) => {

      });
    },[])

    return (
        <div className="orderconfirm">
            <div className={'success'}>
                <img src="/img/check.png"/>
                <p>
                주문이 정상적으로<br/>완료되었습니다.
                </p>
            </div>
            <div className={'oc_div'}>
                <p className={'tit'}>배송지 정보</p>
                <ul className={'del_info'}>
                    <li>
                        <p>{odconfm.od_b_name}</p>
                        <span>{odconfm.od_b_tel}</span>
                    </li>
                    <li>
                        <p>{odconfm.od_b_zip1}{odconfm.od_b_zip2}</p>
                        <span>{odconfm.od_b_addr1}{odconfm.od_b_addr2}{odconfm.od_b_addr3}</span>
                    </li>
                    <li>
                        {odconfm.od_memo}
                    </li>
                </ul>
            </div>
            <div className={'oc_div'}>
                <p className={'tit'}>상품 정보</p>
                <ul className={'oc_item'}>
                    {odconfmlist.map((val, key) =>(
                      <li key={key}>
                          <div className={'item_img'}>
                              <img src={
                                val.it_img1 != ''?
                                val.it_img1:
                                '/img/no_img.png'
                              }/>
                          </div>
                          <div className={'oc_info'}>
                              <div>
                                  <p>{val.mb_nick}</p>
                                  <p className={'oc_itemname extra_bold'}>{val.it_name}</p>
                              </div>
                              <div className={'oc_price'}>
                                  <p>
                                      배송비<span>{val.ct_send_cost}원</span>
                                  </p>
                                  <p className={'extra_bold'}>{val.it_price}원</p>
                              </div>
                          </div>
                      </li>
                    ))}
                </ul>
            </div>
            <div className={'oc_div oc_pay'}>
                <div>
                    <p className={'extra_bold'}>총 결제금액</p>
                    <div className={'extra_bold'}>
                        {odconfm.od_receipt_price}원
                    </div>
                </div>
            </div>
            <div className={'oc_btn'}>
                <Link href={`/order_detail?od_id=${odconfm.od_id}`}>
                    <a className={'detail_dir'}>주문 상세보기</a>
                </Link>
                <Link href="/">
                    <a className={'home_dir'}>홈으로 가기</a>
                </Link>
            </div>
        </div>
    )
}
OrderConfirm.getInitialProps = async ({req, query}) => {
  return {query}
}
export default OrderConfirm;
