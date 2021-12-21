import TitleLayout from "../layout/TitleLayout";
import Link from "next/link";
import React from 'react';

export default function OrderDetail() {
  // 주문완료 배송중 배송완료
  const [od_con ,setOd_con] = React.useState("배송완료");
  // 일반배송 탁송 방문수령
  const [od_del ,setOd_del] = React.useState("일반배송");

  return (
    <TitleLayout>
      <div className={'pagetit_div'}>
        <h1 className={"page_tit"}>ORDER DETAIL</h1>
      </div>
      <div className={'borderfix'}></div>
      <div className={"od_div"}>
        <div className={"od_flex"}>
          <p className={"od_num extra_bold"}>2021112654785</p>
          <p className={"od_date"}>2021-08-20 10:10</p>
        </div>
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
              {od_con == "주문완료"?<p className={"od_state bold_txt"}>주문완료</p>:""}
              {od_con == "배송중"?
              <p className={"od_state bold_txt del_state"}>
                배송중
                <Link href="/">
                  <a className={''}>배송조회</a>
                </Link>
              </p>:""}
              {od_con == "배송완료"?<p className={"od_state bold_txt"}>구매확정</p>:""}
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
          <button>리뷰쓰기</button>
        </div>:""}
      </div>
      <div className={"od_div od_user"}>
        <div className={"od_flex"}>
          <p className={"od_num extra_bold"}>주문자 정보</p>
        </div>
        <p>
          이름
          <span>홍길동</span>
        </p>
        <p>
          연락처
          <span>010-0000-0000</span>
        </p>
      </div>
      <div className={"od_div oddel_info"}>
        <div className={"od_flex"}>
          <p className={"od_num extra_bold"}>배송지 정보</p>
        </div>
        <p>
          수령인
          <span>홍길동</span>
        </p>
        <p>
          연락처
          <span>010-0000-0000</span>
        </p>
        <p>
          주소
          <span>부산광역시 금정구 금정로225 00아파트 110동 402호</span>
        </p>
        <p>
          배송메모
          <span>문 앞에 놓아주세요.</span>
        </p>
      </div>
      <div className={"od_div oddel_info"}>
        <div className={"od_flex"}>
          <p className={"od_num extra_bold"}>할인 정보</p>
        </div>
        <p>
          쿠폰 할인
          <span>-5,000원</span>
        </p>
        <p>
          에코포인트 사용
          <span>-500원</span>
        </p>
        <p className={'sale_total'}>
          할인 합계
          <span>-5,500원</span>
        </p>
      </div>
      <div className={"od_div oddel_info odtotal"}>
        <div className={"od_flex"}>
          <p className={"od_num extra_bold"}>최종결제금액</p>
        </div>
        <p>
          총 상품금액
          <span>125,000원</span>
        </p>
        <p>
          총 배송비
          <span>5,000원</span>
        </p>
        <p>
          할인 합계
          <span>-5,000원</span>
        </p>
        <p className={'od_total'}>
          총 결제금액
          <span className={'extra_bold'}>125,500원</span>
        </p>
        <p className={'od_means'}>
          결제수단
          <span>
            국민카드 745896******1452 (3개월)
          </span>
        </p>
      </div>
    </TitleLayout>
  );
}
