import TitleLayout from "../layout/TitleLayout";
import Link from "next/link";
import OsbinModal from "../layout/OsbinModal";
import {useRouter} from 'next/router'
import {useEffect,useState,useRef} from 'react';
import Swal from 'sweetalert2'
import axios from 'axios';

function OrderCancle({query}){
  const router = useRouter();
  const formRef = useRef(); //form data값 저장
  const {od_id} = query;
  const [order, setOrder] = useState([]);
  const [odlist, setOdlist] = useState([]);
  const submitForm = () =>{
    const form = new FormData(formRef.current);
    form.append('mb_token',localStorage.mb_token);
    axios.post(process.env.api+"Order/OrderCancelAdd",form
    ).then((res)=>{
      if(res.data.state){
        Swal.fire(res.data.msg);
        router.replace('/orderlist');
      }else{
        Swal.fire(res.data.msg);

      }
    }).catch((error)=> {});
  }
  useEffect(() => {
    const form = new FormData();
    form.append('od_id',od_id);
    axios.post(process.env.api+'Order/OrderCancelCk',form
    ).then((res) => {
      console.log(res.data.state);
      if(!res.data.state){
        Swal.fire(res.data.msg);
        router.replace('/orderlist');
      }
    }).catch((error) => {});
    axios.get(process.env.api+'Order/Info/'+od_id,{
      params: {
        mb_token:localStorage.mb_token
      }
    }).then((res) => {

      if(typeof(res.data.data.order) == 'object'){
        setOrder(res.data.data.order);
      }
      if(typeof(res.data.data.list) == 'object'){
        setOdlist(res.data.data.list);
        console.log(res.data.data.list);
      }
    }).catch((error) => {

    });

  },[])
  return (
    <TitleLayout>
      <form ref={formRef}>
        <div className={'pagetit_div'}>
          <h1 className={"page_tit"}>ORDER CANCLE</h1>
        </div>
        <div className={'borderfix'}></div>
        <div className={'qnawrite itemreturn'}>
          <div>
            {odlist.map((val, key) =>(
              <div className={'qnaitem'} key={key}>
                <div className={'qnaitem_img'}>
                  <img src={
                    val.it_img1 != ''?
                    val.it_img1:
                    '/img/no_img.png'
                  } />
                </div>
                <div>
                  <p>{val.mb_nick}</p>
                  <span className={'extra_bold'}>{val.it_name}</span>
                  <p className={'price extra_bold'}>{val.it_price}원</p>
                </div>
                <input type='hidden' name='it_name[]' value={val.it_name}/>
                <input type='hidden' name='it_id[]' value={val.it_id}/>
                <input type='hidden' name='ct_id[]' value={val.ct_id}/>
                <input type='hidden' name='od_id[]' value={val.od_id}/>
                <input type='hidden' name='it_img1[]' value={val.it_img1}/>
              </div>
            ))}
            <div className={'qna_sel'}>
              <p className={'qna_tit'}>취소 사유</p>
              <div>
                <select name='ca_memo1'>
                  <option>선택해주세요.</option>
                  <option>상품 또는 옵션을 잘못 선택</option>
                  <option>상품 추가 및 혜택 적용 후 재구매 예정</option>
                  <option>단순 변심 및 기타</option>
                </select>
                <img src='img/arrow_10.png'/>
              </div>
            </div>
            <div className={'qna_sel qna_input qna_txt'}>
              <p className={'qna_tit'}>상세 사유</p>
              <div>
                <textarea placeholder="상세 사유를 입력해주세요." name='ca_memo2'></textarea>
              </div>
            </div>
          </div>
          <div className={'return_btn'}>
            <div className="osbinModal">
              <p onClick={submitForm} className="info_submit">취소 요청하기</p>
            </div>
          </div>
        </div>
      </form>
    </TitleLayout>
  );
}
OrderCancle.getInitialProps = async ({req, query}) => {
  return {query}
}

export default OrderCancle;
