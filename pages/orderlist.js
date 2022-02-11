import TitleLayout from "../layout/TitleLayout";
import Link from "next/link";
import React from 'react';
import OsbinModal from '../layout/OsbinModal';
import AddressModal from '../layout/AddressModal'
import {useEffect,useState} from 'react';
import Swal from 'sweetalert2'
import axios from 'axios';

export default function OrderList() {
  // 일반배송 탁송 방문수령
  const [od_del ,setOd_del] = React.useState("일반배송");
  
  const [odlist, setOdlist] = useState([]);

  useEffect(() => {
    axios.get(process.env.api+'Order/CartList',{
      params: {
        mb_token:localStorage.mb_token
      }
    }).then((res) => {
      if(typeof(res.data.data) == 'object'){
        setOdlist(res.data.data);
      }
    }).catch((error) => {

    });
  },[])


  return (
    <TitleLayout>
      <div className={'pagetit_div'}>
        <h1 className={"page_tit"}>ORDER DETAIL</h1>
      </div>
      <div className={'borderfix'}></div>
      {odlist.map((val, key) => (
        <div className={"od_div"} key={key}>
        <Link href={`/order_detail?od_id=${val.od_id}`}>
          <a className={"od_flex"}>
            <p className={"od_num extra_bold"}>{val.od_id}</p>
            <p className={"od_date"}>{val.od_time}
              <span className={'order_arrow'}>
                <img src="img/arrow_11.png" />
              </span>
            </p>
          </a>
        </Link>
        {/* 상태값에 따라 변경 */}
        {od_del == "일반배송"?<div className={'order_del'}>일반배송</div>:""}
        {od_del == "탁송"?<div className={'order_del'}>탁송</div>:""}
        {od_del == "방문수령"?<div className={'order_del'}>방문수령</div>:""}
        <div className={"oditem_info"}>
          <div className={"od_thumb"}>
            <img src={
              val.it_img1 != ''?
              val.it_img1:
              '/img/no_img.png'
            } />
          </div>
          <div className={"odinfo_txt"}>
            <div>
              <p>{val.mb_nick}</p>
              <p className={"oditem_name extra_bold"}>
                {val.it_name}
              </p>
              {/* 상태값에 따라 변경 */}
              <p className={"od_state extra_bold del_state"}>
                {val.od_status}
                {val.od_status == "배송"?
                  <Link href="/">
                    <a>배송조회</a>
                  </Link>:''}
              </p>
            </div>
            <div className={"odinfo_price"}>
              <p>
                배송비<span>{val.od_send_cost}원</span>
              </p>
              <p className={"extra_bold"}>{val.od_receipt_price}원</p>
            </div>
          </div>
        </div>
        {val.od_status == "주문"?
        <div className={"order_cancle"}>
          <Link href='/order_cancle'>
            <a>주문취소</a>
          </Link>
        </div>:""}
        {val.od_status == "배송"?
        <div className={"order_cancle order_decide"}>
          <button>교환 및 환불</button>
          <button className={'decide_btn'}>구매확정</button>
        </div>:""}
        {val.od_status == "완료"?
        <div className={"order_cancle order_review"}>
          <Link href='/post_write'>
            <a>상품피드작성</a>
          </Link>
        </div>:""}
        </div>
      ))}
      <div className={'mb75'}></div>
    </TitleLayout>
  );
}
