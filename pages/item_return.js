import TitleLayout from "../layout/TitleLayout";
import Link from "next/link";
import React from 'react';
import OsbinModal from "../layout/OsbinModal";
import {useRouter} from 'next/router'

export default function ItemReturn() {
  const router = useRouter()
  return (
    <TitleLayout>
      <div className={'pagetit_div'}>
        <h1 className={"page_tit"}>ITEM RETURN</h1>
      </div>
      <div className={'borderfix'}></div>
      <div className={'qnawrite itemreturn'}>
        <div>
          <div className={'qnaitem'}>
            <div className={'qnaitem_img'}>
              <img src='img/item01.jpg'/>
            </div>
            <div>
              <p>오스빈스토어</p>
              <span className={'extra_bold'}>도리 믹스 박시 핏 니트</span>
              <p className={'price extra_bold'}>51,000원</p>
            </div>
          </div>
          <div className={'qna_sel'}>
            <p className={'qna_tit'}>반품 사유</p>
            <div>
              <select>
                <option>선택해주세요.</option>
                <option>변심에 의한 구매의사 취소</option>
                <option>다른 옵션이나 상품을 잘못 주문</option>
                <option>상품 파손 또는 불량</option>
                <option>다른 상품 오배송</option>
              </select>
              <img src='img/arrow_10.png'/>
            </div>
          </div>
          <div className={'qna_sel qna_input qna_txt'}>
            <p className={'qna_tit'}>반품 사유</p>
            <div>
              <textarea placeholder="상세 사유를 입력해주세요."></textarea>
            </div>
          </div>
        </div>
        <div className={'return_btn'}>
          <button></button>
          <OsbinModal
            title=""
            bnt_title ="반품 요청하기"
            btn_label ="확인"
            action_label ="확인"
            class_name={"info_submit"}
            modal_id={"return_modal"}
            modalFun ={()=>router.push("/orderlist")}
          >
            <p className={"phone_modal"}>반품 요청이 완료되었습니다.</p>
          </OsbinModal>
        </div>
      </div>
    </TitleLayout>
  );
}
