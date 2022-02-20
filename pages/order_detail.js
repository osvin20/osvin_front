import TitleLayout from "../layout/TitleLayout";
import Link from "next/link";
import React from 'react';
import {useEffect,useState} from 'react';
import Swal from 'sweetalert2'
import axios from 'axios';

function OrderList({query}) {
  // 일반배송 탁송 방문수령
  const [od_del ,setOd_del] = React.useState("일반배송");

  const {od_id} = query;
  const [odlist, setOdlist] = useState([]);
  const [order, setOrder] = useState([]);

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

    <TitleLayout>
      <div className={'pagetit_div'}>
        <h1 className={"page_tit"}>ORDER DETAIL</h1>
      </div>
      <div className={'borderfix'}></div>
      <div className={"od_div"}>
        <div className={"od_flex"}>
          <p className={"od_num extra_bold"}>{order.od_id}</p>
          <p className={"od_date"}>{order.od_time}</p>
        </div>
        {/* 상태값에 따라 변경 */}
        {od_del == "일반배송"?<div className={'order_del'}>일반배송</div>:""}
        {od_del == "탁송"?<div className={'order_del'}>탁송</div>:""}
        {od_del == "방문수령"?<div className={'order_del'}>방문수령</div>:""}
        {odlist.map((val, key) =>(
          <div className={"oditem_info"} key={key}>
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
                <p className={"od_state bold_txt del_state"}>
                  {val.ct_status}
                  {val.ct_status == '배송'? <Link href="/">
                    <a className={''}>배송조회</a>
                  </Link>:""}
                </p>
              </div>
              <div className={"odinfo_price"}>
                <p>
                  배송비<span>{val.ct_send_cost}원</span>
                </p>
                <p className={"extra_bold"}>{val.it_price}원</p>
              </div>
            </div>
          </div>
        ))}
        {order.od_status == "주문"?
        <div className={"order_cancle"}>
          <Link href='/order_cancle'>
            <a>주문취소</a>
          </Link>
        </div>:""}
        {order.od_status == "배송"?
        <div className={"order_cancle order_decide"}>
          <Link href='/item_return'>
            <a>교환 및 환불</a>
          </Link>
          <button className={'decide_btn'}>구매확정</button>
        </div>:""}
        {order.od_status == "완료"?
        <div className={"order_cancle order_review"}>
        <Link href='/post_write'>
          <a>리뷰쓰기</a>
        </Link>
        </div>:""}
      </div>
      <div className={"od_div od_user"}>
        <div className={"od_flex"}>
          <p className={"od_num extra_bold"}>주문자 정보</p>
        </div>
        <p>
          이름
          <span>{order.od_name}</span>
        </p>
        <p>
          연락처
          <span>{order.od_tel}</span>
        </p>
      </div>
      <div className={"od_div oddel_info"}>
        <div className={"od_flex"}>
          <p className={"od_num extra_bold"}>배송지 정보</p>
        </div>
        <p>
          수령인
          <span>{order.od_b_name}</span>
        </p>
        <p>
          연락처
          <span>{order.od_b_tel}</span>
        </p>
        <p>
          주소
          <span>{order.od_b_addr1} {order.od_b_addr2} {order.od_b_addr3}</span>
        </p>
        <p>
          배송메모
          <span>{order.od_memo}</span>
        </p>
      </div>
      <div className={"od_div oddel_info"}>
        <div className={"od_flex"}>
          <p className={"od_num extra_bold"}>할인 정보</p>
        </div>
        <p>
          쿠폰 할인
          <span>-{order.od_send_coupon}원</span>
        </p>
        <p>
          에코포인트 사용
          <span>-{order.od_receipt_point}원</span>
        </p>
        <p className={'sale_total'}>
          할인 합계
          <span>-0원</span>
        </p>
      </div>
      <div className={"od_div oddel_info odtotal"}>
        <div className={"od_flex"}>
          <p className={"od_num extra_bold"}>최종결제금액</p>
        </div>
        <p>
          총 상품금액
          <span>{order.od_cart_price}원</span>
        </p>
        <p>
          총 배송비
          <span>{order.od_send_cost}원</span>
        </p>
        <p>
          할인 합계
          <span>-0원</span>
        </p>
        <p className={'od_total'}>
          총 결제금액
          <span className={'extra_bold'}>{order.od_receipt_price}원</span>
        </p>
        <p className={'od_means'}>
          {order.od_settle_case}
          <span>
          {/* order.od_bank_account */}
          </span>
        </p>
      </div>
    </TitleLayout>
  );
}
OrderList.getInitialProps = async ({req, query}) => {
  return {query}
}

export default OrderList;
