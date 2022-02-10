import TitleLayout from "../layout/TitleLayout";
import Link from "next/link";
import React from 'react';
import OsbinModal from "../layout/OsbinModal";
import {useRouter} from 'next/router'
import {useEffect,useState} from 'react';
import Swal from 'sweetalert2'
import axios from 'axios';

export default function QnaWrite({query}) {
  const {it_id} = query;
  const router = useRouter()
  // 체크박스 있는버전
  const useChange = (init) =>{
    const [value,setValue] = useState(init);
    const onChange = (e) =>{
      setValue(e.target.value);
    }
    return {onChange,value}
  }
  const useCheck = (init) =>{
    const [value,setValue] = useState(init);
    const [checked,setChecked] = useState(false);
    const onChange = (e) =>{
      if(e.target.checked){
        setValue(e.target.value);
      }else{
        setValue(undefined);
      }
      setChecked(e.target.checked)
    }
    return {onChange,value,checked}
  }
  const [item,setItem] = useState([]);
  const iq_subject_title = useChange('');
  const iq_subject = useChange('');
  const iq_question = useChange('');
  const iq_secret = useCheck(1);
  const submitForm = () => {

    if(iq_subject_title.value == ''){
      Swal.fire("문의유형을 선택해주세요")
      return false;
    }
    if(iq_subject.value == ''){
      Swal.fire("제목을 적어주세요")
      return false;
    }
    if(iq_question.value == ''){
      Swal.fire("내용을 적어주세요")
      return false;
    }
    const form = new FormData();
    if(iq_secret.checked){
      form.append('iq_secret',1);
    }
    form.append('iq_subject',`[${iq_subject_title.value}]${iq_subject.value}`);
    form.append('iq_question',iq_question.value);
    form.append('iq_secret',iq_secret.value);
    form.append('mb_token',localStorage.mb_token);
    form.append('mb_sell_id',item.mb_sell_id);
    form.append('it_id',it_id);
    axios.post(process.env.api+"Item/QaAdd",form
    ).then((res)=>{
      if(res.data.state){
        Swal.fire(res.data.msg);
        router.back()
      }else{
        Swal.fire(res.data.msg);
        setMsgOvj(res.data.data);
      }
    }).catch((error)=> {});
  }
  useEffect(() =>{
    axios.get(process.env.api+"Item/Info/"+it_id,{
      params: {
        mb_token:localStorage.mb_token
      }
    }).then((res)=>{
      if(res.data.state){
        setItem(res.data.data)
        console.log(res.data.data);
      }
    }).catch((error)=> {});
  },[]);

  return (
    <TitleLayout>
      <div className={'pagetit_div'}>
        <h1 className={"page_tit"}>Q&A</h1>
      </div>
      <div className={'borderfix'}></div>
      <div className={'qnawrite'}>
        <div className={'qnaitem'}>
          <div className={'qnaitem_img'}>
            <img
              src={process.env.domain+'data/item/'+item.it_img1}
              onError={(e)=>{e.target.src =  "/img/no_img.png"}}
            />
          </div>
          <div>
            <p>{item.mb_nick}</p>
            <span className={'extra_bold'}>{item.it_name}</span>
          </div>
        </div>
        <div className={'qna_sel'}>
          <p className={'qna_tit'}>문의유형</p>
          <div>
            <select {...iq_subject_title}>
              <option value={''}>선택해주세요.</option>
              <option value={'상품문의'}>상품문의</option>
              <option value={'배송문의'}>배송문의</option>
            </select>
            <img src='img/arrow_10.png'/>
          </div>
        </div>
        <div className={'qna_sel qna_input'}>
          <p className={'qna_tit'}>제목</p>
          <div>
            <input type='text' placeholder='15자 이내로 입력해주세요.' {...iq_subject}/>
          </div>
        </div>
        <div className={'qna_sel qna_input qna_txt'}>
          <p className={'qna_tit'}>내용</p>
          <div>
            <textarea {...iq_question}/>
          </div>
        </div>
        <div className={'lock_check'}>
          <input type="checkbox" id="qnalock" {...iq_secret}/>
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
        <div className={'qna_btn'} onClick={submitForm}>
          <span>등록</span>
        </div>
      </div>
    </TitleLayout>
  );
}
QnaWrite.getInitialProps = async ({ req ,query }) => {
  return {query}
}
