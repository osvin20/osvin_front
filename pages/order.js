
import NoneTab from '../layout/NoneTab'
import Link from 'next/link'
import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Accordion from '@material-ui/core/Accordion';
import AccordionSummary from '@material-ui/core/AccordionSummary';
import AccordionDetails from '@material-ui/core/AccordionDetails';
import Typography from '@material-ui/core/Typography';
import ExpandMoreIcon from '@material-ui/icons/ExpandMore';
import OsbinModal from '../layout/OsbinModal';
import AddressModal from '../layout/AddressModal'
import Swal from 'sweetalert2'
import axios from 'axios';
import {useRouter} from 'next/router'
import {useEffect,useState,useRef} from 'react';
import DaumPostCode from 'react-daum-postcode';

const useStyles = makeStyles((theme) => ({
    root: {
      width: '100%',
    },
    heading: {
      fontSize: theme.typography.pxToRem(15),
      fontWeight: theme.typography.fontWeightRegular,
    },
  }));
export default function Order(){
  const classes = useStyles();
  const [open,setOpen] = useState(false);
  const [mobile_url ,setMobile_url] = useState('');
  const [addrList,setAddrList] = useState([]);
  const [itemList,setItemList] = useState([]);
  const [allPrice,setAllPrice] = useState(0);
  const [disPrice,setDisPrice] = useState(0); // 할인금액
  const [sum,setSum] = useState([]); // 고정 합계금액
  const router = useRouter()
  const useChange = (init) =>{
    const [value,setValue] = useState(init);
    const onChange = (e) =>{
      if(typeof(e) == "object"){
        setValue(e.target.value);
      }else{
        setValue(e);
      }
    }
    return {onChange,value}
  }
  const handleComplete = (data) => {
    let fullAddress = data.address;
    let extraAddress = '';
    if (data.addressType === 'R'){
        if (data.bname !== '') {
            extraAddress += data.bname;
        }
        if (data.buildingName !== '') {
            extraAddress += (extraAddress !== '' ? `, ${data.buildingName}` : data.buildingName);
        }
        fullAddress += (extraAddress !== '' ? ` (${extraAddress})` : '');
        console.log(fullAddress);
        setOpen(false)
    }
    od_b_zip.onChange(data.zonecode);
    od_b_addr1.onChange(fullAddress)

    //fullAddress -> 전체 주소반환

  }
  const useRadioChecked = (init) =>{
    let initObj = [];
    initObj[init] = true;
    const [checked,setChecked] = useState(initObj);
    const [val,setVal] = useState();
    const onChange = (e) =>{
      let temp = [];
      temp[e.target.value] = true;
      setChecked(temp)
    }
    return {onChange,checked}
  }
  const getOrderPg = () =>{
    if(!payagree1 || !payagree2 || !payagree3){
      Swal.fire("약관에 동의해주세요");
      return false;
    }
    const form = new FormData(formRef.current);
    const amount = allPrice.replace(',','');
    const od_send_cost = sum.sc_sum.replace(',','');
    const od_cart_price = sum.item_sum.replace(',','');

    form.append('amount',amount);
    form.append('mb_token',localStorage.mb_token);
    form.append('od_id',itemList[0].od_id);
    form.append('od_cart_count',itemList.length);
    form.append('od_send_cost',od_send_cost);
    form.append('od_cart_price',od_cart_price);
    form.append('prduct_name', itemList[0].it_name+"외 "+itemList.length+"건");

    axios.post(process.env.api+"Order/GetOrderPg",form
    ).then((res)=>{
        if(res.data.state){
          if(isMobile()){
            setMobile_url(res.data.data.mobile_url)
          }else {
            setMobile_url(res.data.data.online_url)
          }
        }else{
          Swal.fire(msg);
        }
    }).catch((error)=> {});
  }
  const pgcode = useRadioChecked('creditcard');
  const formRef = useRef(); //form data값 저장
  const od_b_name = useChange('');
  const od_b_tel = useChange('');
  const od_b_zip = useChange('');
  const od_b_addr1 = useChange('');
  const od_b_addr2 = useChange('');
  const od_memo = useChange('');
  const mb_point = useChange(0);
  const [payagree1,setPayagree1] = useState(false);
  const [payagree2,setPayagree2] = useState(false);
  const [payagree3,setPayagree3] = useState(false);


  useEffect(() => {
    // 배송지 조회
    axios.get(process.env.api+"Order/AddressList",{
      params: {
        mb_token:localStorage.mb_token
      }
    }).then((res)=>{
      if(res.data){
        setAddrList(res.data.data);
        od_b_name.onChange(res.data.data[0].ad_name);
        od_b_tel.onChange(res.data.data[0].ad_tel);
        od_b_zip.onChange(res.data.data[0].ad_zip1+res.data.data[0].ad_zip2);
        od_b_addr1.onChange(res.data.data[0].ad_addr1);
        od_b_addr2.onChange(res.data.data[0].ad_addr2);
      }
    }).catch((error)=>{});
    // 주문값 조회
    axios.get(process.env.api+"Order/List",{
      params: {
        mb_token:localStorage.mb_token
      }
    }).then((res)=>{
      if(typeof(res.data.data.list) != 'object'){
        Swal.fire("주문서에 접근할 수 없습니다.");
        router.push('/');
        return false;
      }
      if(res.data){
        setItemList(res.data.data.list);
        setSum(res.data.data.sum);
        setAllPrice(res.data.data.sum.all_sum);
      }
    }).catch((error)=>{});
    //결제 데이터를받음
    window.addEventListener("message",(e) => {
      if(e.origin == 'https://osvintique.com'){
        let res = JSON.parse(e.data);
        if(res.code == "0"){
          console.log(res);
          Swal.fire("결제가 완료되었습니다.");
          router.push('/order_confirm?od_id='+res.order_no);
          setMobile_url('');
        }else{
          Swal.fire(res.message);
          setMobile_url('');
        }
      }
    });
   }, []);
  return (
    <NoneTab loginCheck={true}>
      {mobile_url != '' &&
        <iframe className={'pg_page'} src={mobile_url} />
      }
      <form ref={formRef}>
        <div className={'pagetit_div'}>
          <h1 className={'page_tit'}>ORDER</h1>
        </div>
        <div className={'borderfix'}></div>
        <div className={'notice_list order_div'}>
          <div className={'border_top'}></div>
          <Accordion defaultExpanded>
            <AccordionSummary
              expandIcon={<ExpandMoreIcon />}
              aria-controls="panel1a-content"
              id="panel1a-header"
            >
              <Typography className={classes.heading}>
                <div className={'order_tit extra_bold'}>
                  상품정보
                </div>
              </Typography>
            </AccordionSummary>
            <AccordionDetails>
              <Typography>
                <ul className={'order_ul'}>
                  {itemList.map((val,key) =>(
                    <li key ={key}>
                      <Link href={'/item?it_id='+val.it_id}>
                        <a>
                          <div className={'order_item'}>
                            <img
                              src ={
                                val.it_img != ''?
                                process.env.domain+'data/item/'+val.it_img:
                                "/img/no_img.png"
                              }/>
                          </div>
                          <div className={'orderitem_info'}>
                            <div>
                              <p className={'order_shop'}>{val.mb_nick}</p>
                              <p className={'order_name bold_txt'}>{val.it_name}</p>
                            </div>
                            <div className={'orderitem_price'}>
                              <p className={'del_cost'}>
                                배송비
                                {(() => {
                                  switch (val.it_sc_type) {
                                    case '0':
                                      return <><span>2500원(묶음)</span></>
                                    case '1':
                                      return <><span>무료배송</span></>
                                    case '3':
                                      return <><span>{val.it_sc_price}원</span></>
                                  }
                                })()}
                              </p>
                              <p className={'price extra_bold'}>
                                {val.ct_price_text}원
                              </p>
                            </div>
                          </div>
                        </a>
                      </Link>
                    </li>
                  ))}
                </ul>
              </Typography>
            </AccordionDetails>
          </Accordion>
        </div>
        <div className={'notice_list order_div'}>
          <div className={'border_top'}></div>
          <Accordion defaultExpanded>
            <AccordionSummary
              expandIcon={<ExpandMoreIcon />}
              aria-controls="panel1a-content"
              id="panel1a-header"
            >
              <Typography className={classes.heading}>
                <div className={'order_tit extra_bold'}>
                  주문자 정보
                </div>
              </Typography>
            </AccordionSummary>
            <AccordionDetails>
              <Typography>
                <ul className={'order_ul'}>
                  <li className={'order_input'}>
                    <p>이름</p>
                    <div className={'order_input_div'}>
                      <input type='text' placeholder="주문자 성함을 입력해주세요." name='od_b_name' {...od_b_name}/>
                    </div>
                  </li>
                  <li className={'order_input'}>
                    <p>연락처</p>
                    <div className={'order_input_div'}>
                      <input type='text' placeholder="주문자 연락처를 입력해주세요." name='od_b_tel' {...od_b_tel}/>
                    </div>
                  </li>
                </ul>
              </Typography>
            </AccordionDetails>
          </Accordion>
        </div>
        <div className={'notice_list order_div'}>
          <div className={'border_top'}></div>
          <Accordion defaultExpanded>
            <AccordionSummary
              expandIcon={<ExpandMoreIcon />}
              aria-controls="panel1a-content"
              id="panel1a-header"
            >
              <Typography className={classes.heading}>
                <div className={'order_tit extra_bold'}>
                  배송지 정보
                  <OsbinModal
                    title=""
                    //   modalFun ={()=>router.push("/")}
                    bnt_title ="배송지 목록"
                    class_name={"del_list"}
                  >
                    <AddressModal/>
                  </OsbinModal>
                </div>
              </Typography>
            </AccordionSummary>
            <AccordionDetails>
              <Typography>
                <ul className={'order_ul'}>
                  <li className={'order_input order_button'}>
                    <p>주소</p>
                    <div className={'order_input_div'}>
                      <input type='text' placeholder="우편번호" {...od_b_zip} name='od_b_zip' readOnly/>
                      <button type='button' onClick={()=>setOpen(true)} className={'adrs_find'}>우편번호 찾기</button>
                    </div>
                  </li>
                  <li className={'order_input'}>
                    <p></p>
                    <div className={'order_input_div'}>
                      <input type='text' placeholder="주소"  name='od_b_addr1' {...od_b_addr1} readOnly/>
                    </div>
                  </li>
                  <li className={'order_input'}>
                    <p></p>
                    <div className={'order_input_div'}>
                      <input type='text' placeholder="상세주소를 입력해주세요." name='od_b_addr2' {...od_b_addr2} />
                    </div>
                  </li>
                  <li className={'order_input order_sel'}>
                    <p>배송메모</p>
                    <div className={'order_input_div'}>
                      <input type='text' placeholder="배송메모를 입력해주세요." name='od_memo' {...od_memo}/>
                    </div>
                  </li>
                </ul>
              </Typography>
            </AccordionDetails>
          </Accordion>
        </div>
        <div className={'notice_list order_div'}>
          <div className={'border_top'}></div>
          <Accordion defaultExpanded>
            <AccordionSummary
              expandIcon={<ExpandMoreIcon />}
              aria-controls="panel1a-content"
              id="panel1a-header"
            >
              <Typography className={classes.heading}>
                <div className={'order_tit extra_bold'}>
                  에코포인트 사용
                </div>
              </Typography>
            </AccordionSummary>
            <AccordionDetails>
              <Typography>
                <div className={'eco_point'}>
                  <p>
                    보유 에코포인트
                    <span>
                      5100P
                    </span>
                  </p>
                  <div>
                    <input type="text" {...mb_point}/>P
                    <button>전액사용</button>
                  </div>
                </div>
              </Typography>
            </AccordionDetails>
          </Accordion>
        </div>
        <div className={'notice_list order_div'}>
          <div className={'border_top'}></div>
          <Accordion defaultExpanded>
            <AccordionSummary
              expandIcon={<ExpandMoreIcon />}
              aria-controls="panel1a-content"
              id="panel1a-header"
            >
              <Typography className={classes.heading}>
                <div className={'order_tit extra_bold'}>
                  결제 정보
                </div>
              </Typography>
            </AccordionSummary>
            <AccordionDetails>
              <Typography>
                {/* <div className={'osbin_pay'}>

                  <ul>
                  <li className={'card_none'}>
                  <Link href='/cardform'>
                  <a>
                  <div className={'plus_ico'}>
                  <img src="/img/plus.png"/>
                  </div>
                  <p>카드를 등록해보세요.</p>
                  <span>카드를 한 번만 등록해놓으면<br/>매번 쉽게 결제할 수 있어요!</span>
                  </a>
                  </Link>
                  </li>
                  <li>
                  <input type="radio" id="osbinpay1" name="osbinpay"/>
                  <label htmlFor="osbinpay1">
                  <div className={'paycard hdcard'}>
                  <div className={'paycard_info'}>
                  <p>현대카드</p>
                  <p>745896******1452</p>
                  </div>
                  </div>
                  </label>
                  </li>
                  <li>
                  <input type="radio" id="osbinpay2" name="osbinpay"/>
                  <label htmlFor="osbinpay2">
                  <div className={'paycard kbcard'}>
                  <div className={'paycard_info'}>
                  <p>국민카드</p>
                  <p>745896******1452</p>
                  </div>
                  </div>
                  </label>
                  </li>
                  <li>
                  <input type="radio" id="osbinpay3" name="osbinpay"/>
                  <label htmlFor="osbinpay3">
                  <div className={'paycard bccard'}>
                  <div className={'paycard_info'}>
                  <p>비씨카드</p>
                  <p>745896******1452</p>
                  </div>
                  </div>
                  </label>
                  </li>
                  </ul>
                </div> */}

                <div className={'normalpay_sel'}>
                  <input
                    type="radio"
                    id="normal_pay1"
                    name="pgcode"
                    value='creditcard'
                    onChange={pgcode.onChange}
                    checked={pgcode.checked['creditcard']&&true}
                  />
                  <label htmlFor="normal_pay1" className={'cardpay'}>
                    <p>신용카드</p>
                  </label>
                  <input
                    type="radio"
                    id="normal_pay2"
                    name="pgcode"
                    value='virtualaccount'
                    onChange={pgcode.onChange}
                    checked={pgcode.checked['virtualaccount']&&true}
                  />
                  <label htmlFor="normal_pay2" className={'cashpay'}>
                    <p>실시간<br/>계좌이체</p>
                  </label>
                  <input
                    type="radio"
                    id="mobile"
                    name="pgcode"
                    value='mobile'
                    onChange={pgcode.onChange}
                    checked={pgcode.checked['mobile']&&true}
                  />
                  <label htmlFor="mobile" className={'mbpay'}>
                    <p>휴대폰<br/>결제</p>
                  </label>
                </div>
                {/*<div className={'card_sel'}>
                  <div>
                  <select>
                  <option>카드를 선택해주세요.</option>
                  </select>
                  <img src="/img/arrow_10.png"/>
                  </div>
                  <div>
                  <select>
                  <option>일시불</option>
                  </select>
                  <img src="/img/arrow_10.png"/>
                  </div>
                  <p className={'pay_note'}>
                  총 결제 금액 5만원부터 할부결제가 가능합니다.
                  </p>
                </div>*/}
              </Typography>
            </AccordionDetails>
          </Accordion>
        </div>
        <div className={'notice_list order_div'}>
          <div className={'border_top'}></div>
          <Accordion defaultExpanded>
            <AccordionSummary
              expandIcon={<ExpandMoreIcon />}
              aria-controls="panel1a-content"
              id="panel1a-header"
            >
              <Typography className={classes.heading}>
                <div className={'order_tit extra_bold'}>
                  최종결제금액
                </div>
              </Typography>
            </AccordionSummary>
            <AccordionDetails>
              <Typography>
                <div className={'total_pay'}>
                  <ul>
                    <li>
                      <p>총 상품금액</p>
                      <p>
                        <span>
                          {sum.item_sum}
                        </span>원
                      </p>
                    </li>
                    <li>
                      <p>총 배송비</p>
                      <p>
                        <span>
                          {sum.sc_sum}
                        </span>원
                      </p>
                    </li>
                    <li>
                      <p>총 할인금액</p>
                      <p>-
                        <span>
                          {disPrice}
                        </span>원
                      </p>
                    </li>
                  </ul>
                  <div className={'total_bold'}>
                    <p>총 결제금액</p>
                    <p>
                      <span>{allPrice}</span>원
                    </p>
                  </div>
                </div>
              </Typography>
            </AccordionDetails>
          </Accordion>
        </div>
        <div className={'notice_list order_div pay_div'}>
          <div className={'border_top'}></div>
          <Accordion defaultExpanded>
            <AccordionSummary
              expandIcon={<ExpandMoreIcon />}
              aria-controls="panel1a-content"
              id="panel1a-header"
            >
              <Typography className={classes.heading}>
                <div className={'order_tit extra_bold'}>
                  구매조건/약관 및 개인정보 이용동의
                </div>
              </Typography>
            </AccordionSummary>
            <AccordionDetails>
              <Typography>
                <ul className={'pay_agree'}>
                  <li>
                    <input type="checkbox" id="payagree1" onChange={(e)=>setPayagree1(e.target.checked)}/>
                    <label htmlFor="payagree1">오스빈 약관 동의</label>
                    <OsbinModal
                      title=""
                      bnt_title ="보기"
                      action_label ="확인"
                      class_name ="modal_open"
                      modal_id={"agree_modal"}
                    >
                      <p className={"agree_txt"}>
                        <iframe src={process.env.domain+'/agreement.php'} />
                      </p>
                    </OsbinModal>
                  </li>
                  <li>
                    <input type="checkbox" id="payagree2" onChange={(e)=>setPayagree2(e.target.checked)}/>
                    <label htmlFor="payagree2">개인정보 수집 및 이용에 대한 안내</label>
                    <OsbinModal
                      title=""
                      bnt_title ="보기"
                      action_label ="확인"
                      class_name ="modal_open"
                      modal_id={"agree_modal"}
                    >
                      <p className={"agree_txt"}>
                        <iframe src={process.env.domain+'/privacy.php'} />
                      </p>
                    </OsbinModal>
                  </li>
                  <li>
                    <input type="checkbox" id="payagree3" onChange={(e)=>setPayagree3(e.target.checked)}/>
                    <label htmlFor="payagree3">구매조건 및 개인정보 제3자 제공</label>
                    <OsbinModal
                      title=""
                      bnt_title ="보기"
                      class_name ="modal_open"
                      modal_id={"agree_modal"}
                    >
                      <p className={"agree_txt"}>
                        <iframe src={process.env.domain+'/agreement3.php'} />
                      </p>
                    </OsbinModal>
                  </li>
                </ul>
              </Typography>
            </AccordionDetails>
          </Accordion>
        </div>
        <div className={'mb75'}></div>
        <div className={'pay_btn paybtn'} onClick={getOrderPg}>
          <a>결제하기</a>
        </div>
      </form>
      {open &&
        <div className={'daumPostCode'}>
          <DaumPostCode onComplete={handleComplete} className="post-code" />
          <div className={'adrs_btn'} onClick={()=>setOpen(false)}>
            <span>닫기</span>
          </div>
        </div>
      }
    </NoneTab>
  )
}
export function isMobile() {
  var user = navigator.userAgent; var is_mobile = false;
  if( user.indexOf("iPhone") > -1 || user.indexOf("Android") > -1 ) {
    is_mobile = true;
  }
  return is_mobile;
}
