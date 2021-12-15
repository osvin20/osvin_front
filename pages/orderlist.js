import TitleLayout from "../layout/TitleLayout";
import Link from "next/link";
import React from 'react';
import OsbinModal from '../layout/OsbinModal';
import AddressModal from '../layout/AddressModal'

export default function OrderDetail() {
  // 주문완료 배송중 배송완료
  const [od_con ,setOd_con] = React.useState("배송완료");
  // 일반배송 탁송 방문수령
  const [od_del ,setOd_del] = React.useState("일반배송");

  return (
    <TitleLayout>
      <h1 className={"page_tit"}>ORDER DETAIL</h1>
      <div className={'borderfix'}></div>
      <div className={"od_div"}>
        <Link href="/order_detail">
          <a className={"od_flex"}>
            <p className={"od_num extra_bold"}>2021112654785</p>
            <p className={"od_date"}>2021-08-20 10:10
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
            <img src="img/item03.jpg" />
          </div>
          <div className={"odinfo_txt"}>
            <div>
              <p>오스빈스토어</p>
              <p className={"oditem_name extra_bold"}>
                지아 울 레이어드 니트 블라우스
              </p>
              {/* 상태값에 따라 변경 */}
              {od_con == "주문완료"?<p className={"od_state extra_bold"}>주문완료</p>:""}
              {od_con == "배송중"?
              <p className={"od_state extra_bold del_state"}>
                배송중
                <Link href="/">
                  <a>배송조회</a>
                </Link>
              </p>:""}
              {od_con == "배송완료"?<p className={"od_state extra_bold"}>구매확정</p>:""}
            </div>
            <div className={"odinfo_price"}>
              <p>
                배송비<span>2500원</span>
              </p>
              <p className={"extra_bold"}>30,000원</p>
            </div>
          </div>
        </div>
        {od_con == "주문완료"?
        <div className={"order_cancle"}>
          <button>주문취소</button>
        </div>:""}
        {od_con == "배송중"?
        <div className={"order_cancle order_decide"}>
          <button>교환 및 환불</button>
          <button className={'decide_btn'}>구매확정</button>
        </div>:""}
        {od_con == "배송완료"?
        <div className={"order_cancle order_review"}>
          <Link href='/post_write'>
            <a>리뷰쓰기</a>
          </Link>
        </div>:""}
      </div>
      <div className={"od_div"}>
        <Link href="/order_detail">
          <a className={"od_flex"}>
            <p className={"od_num extra_bold"}>2021112654785</p>
            <p className={"od_date"}>2021-08-20 10:10
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
            <img src="img/item02.jpg" />
          </div>
          <div className={"odinfo_txt"}>
            <div>
              <p>오스빈스토어</p>
              <p className={"oditem_name extra_bold"}>
                도리 믹스 패턴 박시 핏 니트
              </p>
              {/* 상태값에 따라 변경 */}
              {od_con == "주문완료"?<p className={"od_state extra_bold"}>주문완료</p>:""}
              {od_con == "배송중"?
              <p className={"od_state extra_bold del_state"}>
                배송중
                <Link href="/">
                  <a className={''}>배송조회</a>
                </Link>
              </p>:""}
              {od_con == "배송완료"?<p className={"od_state extra_bold"}>구매확정</p>:""}
            </div>
            <div className={"odinfo_price"}>
              <p>
                배송비<span>2500원</span>
              </p>
              <p className={"extra_bold"}>35,000원</p>
            </div>
          </div>
        </div>
        {od_con == "주문완료"?
        <div className={"order_cancle"}>
          <button>주문취소</button>
        </div>:""}
        {od_con == "배송중"?
        <div className={"order_cancle order_decide"}>
          <button>교환 및 환불</button>
          <button className={'decide_btn'}>구매확정</button>
        </div>:""}
        {od_con == "배송완료"?
        <div className={"order_cancle order_review"}>
          <Link href='/post_write'>
            <a>리뷰쓰기</a>
          </Link>
        </div>:""}
      </div>
      <div className={'mb75'}></div>
    </TitleLayout>
  );
}
