import TitleLayout from "../layout/TitleLayout";
import Link from "next/link";
import React from "react";

export default function PostWrite() {
  return (
    <TitleLayout>
      <div className={'pagetit_div'}>
        <h1 className={"page_tit"}>POST</h1>
      </div>
      <div className={"qnawrite"}>
        <div className={"qnaitem"}>
          <div className={"qnaitem_img"}>
            <img src="img/item01.jpg" />
          </div>
          <div>
            <p>오스빈스토어</p>
            <span className={"extra_bold"}>도리 믹스 박시 핏 니트</span>
          </div>
        </div>
        <div className={"qna_sel qna_input qna_txt"}>
          <p className={"qna_tit"}>내용</p>
          <div>
            <textarea>ddd</textarea>
          </div>
        </div>
        <div className={"qna_sel qna_input rv_flie"}>
          <p className={"qna_tit"}>사진 첨부
            <span> (최대 5장)</span>
          </p>
          <input type="file" id="rv_file" />
          <label htmlFor="rv_file">첨부하기</label>
        </div>
        <div className={"file_thumb"}>
          <div>
            <img src="img/item01.jpg" />
          </div>
          <div>
            <img src="img/item02.jpg" />
          </div>
          <div>
            <img src="img/item01.jpg" />
          </div>
          <div>
            <img src="img/item02.jpg" />
          </div>
          <div>
            <img src="img/item01.jpg" />
          </div>
        </div>
        <div className={"qna_btn rv_btn post_btn"}>
          <Link href="/">
            <a>완료</a>
          </Link>
        </div>
      </div>
    </TitleLayout>
  );
}
