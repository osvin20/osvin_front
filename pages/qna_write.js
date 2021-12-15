import TitleLayout from "../layout/TitleLayout";
import Link from "next/link";
import React from 'react';

export default function OrderDetail() {
  return (
    <TitleLayout>
      <h1 className={"page_tit"}>Q&A</h1>
      <div className={'borderfix'}></div>
      <div className={'qnawrite'}>
        <div className={'qnaitem'}>
          <div className={'qnaitem_img'}>
            <img src='img/item01.jpg'/>
          </div>
          <div>
            <p>오스빈스토어</p>
            <span className={'extra_bold'}>도리 믹스 박시 핏 니트</span>
          </div>
        </div>
        <div className={'qna_sel'}>
          <p className={'qna_tit'}>문의유형</p>
          <div>
            <select>
              <option>선택해주세요.</option>
              <option>상품문의</option>
              <option>배송문의</option>
            </select>
            <img src='img/arrow_10.png'/>
          </div>
        </div>
        <div className={'qna_sel qna_input'}>
          <p className={'qna_tit'}>제목</p>
          <div>
            <input type='text' placeholder='15자 이내로 입력해주세요.'/>
          </div>
        </div>
        <div className={'qna_sel qna_input qna_txt'}>
          <p className={'qna_tit'}>내용</p>
          <div>
            <textarea>ddd</textarea>
          </div>
        </div>
        <div className={'lock_check'}>
          <input type="checkbox" id="qnalock"/>
          <label htmlFor="qnalock">비밀글</label>
        </div>
        <div className={'qna_note'}>
          <p>상품 문의 안내</p>
          <p>
            -상품문의는 사이즈, 배송 등 상품에 대하여 스토어 담당자에게 문의하는 게시판입니다.
          </p>
          <p>
            -욕설, 비방, 거래 글, 분쟁유발, 명예훼손, 허위사실 유포, 타 쇼핑몰 언급, 광고성 등의 부적절한 게시글은 금지합니다.
          </p>
        </div>
        <div className={'qna_btn'}>
          <button>등록</button>
        </div>
      </div>
    </TitleLayout>
  );
}
