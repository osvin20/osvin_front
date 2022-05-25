import TitleLayout from '../layout/TitleLayout'
import Link from 'next/link'
import OsbinModal from "../layout/OsbinModal";
import {useRouter} from 'next/router'
import Swal from 'sweetalert2'
import {useEffect,useState,useRef } from 'react';
import axios from 'axios';
import DaumPostCode from 'react-daum-postcode';
function MyauctionInfo({query}){
  const {lo_idx} = query;
  const [open,setOpen] = useState(false);
  const [lo_zip,setLo_zip] = useState('');
  const [info,setInfo] = useState({});
  const [lo_address,setLo_address] = useState('');
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
    setLo_zip(data.zonecode);
    setLo_address(fullAddress);
  }
  const useChange = (init) =>{
    const [value,setValue] = useState(init);
    const onChange = (e) =>{
      setValue(e.target.value);
    }
    return {onChange,value}
  }
  const submitForm = () =>{
    const form = new FormData(formRef.current);
    form.append('mb_token',localStorage.mb_token);
    form.append('lo_idx',lo_idx);
    axios.post(process.env.api+"Auction/MyAuctionUpdate",form
    ).then((res)=>{
      if(res.data.state){
        Swal.fire(res.data.msg);
        router.push('/myauction');
      }
    }).catch((error)=> {

    });
  }
  const formRef = useRef(); //form data값 저장
  const router = useRouter();
  useEffect(() =>{
    axios.get(process.env.api+"Auction/MyAuctionInfo/"+lo_idx,{
      params: {
        mb_token:localStorage.mb_token
      }
    }).then((res)=>{
      setInfo(res.data.data);
    }).catch((error)=> {

    });
  },[]);
  return (
      <TitleLayout loginCheck={true}>
        <div className={'pagetit_div'}>
          <h1 className={'page_tit'}>주소등록</h1>
        </div>
        <ul className={'cart_list'}>
          <li>
            <Link href={'/auction_item_info?it_idx='+info.it_idx}>
              <a className={'cart_thumb'}>
                <img
                  src ={
                    info.it_img != ''?
                    info.it_img1:
                    "/img/no_img.png"
                  }/>
              </a>
            </Link>
            <div className={'cartitem'}>
              <div>
                <p className={'cart_shop'}>{info.mb_nick}</p>
                <Link href={'/auction_item_info?it_idx='+info.it_idx}>
                  <a>
                    <p className={'cartitem_name'}>{info.it_name}</p>
                  </a>
                </Link>

              </div>
              <div className={'cart_price_div'}>
                <p className={'del_cost'}>
                  시작가격 {info.it_price_text}
                </p>
                <p className={'cart_price'}>매입가 {info.it_price_my_text}원</p>
              </div>
            </div>

          </li>

        </ul>
        <form ref={formRef}>

          <div className={'address_form myauction_info'}>
            <div className={'adrs_div adrs_height'}>
              <p>우편번호</p>
              <div className={'adrs_flex'}>
                <input type="text" name={'lo_zip'} value={lo_zip}/>
                <button type='button' onClick={()=>setOpen(true)}>
                  우편번호 찾기
                </button>
              </div>
            </div>
            <div className={'adrs_div'}>
              <p>주소</p>
              <div>
                <input type="text" name={'lo_address'} value={lo_address}/>
              </div>
            </div>
            <div className={'adrs_div'}>
              <p>상세주소</p>
              <div>
                <input type="text" name={'lo_address2'}/>
              </div>
            </div>
          </div>
          {open &&
            <div className={'daumPostCode'}>
              <DaumPostCode onComplete={handleComplete} className="post-code" />
              <div className={'adrs_btn'} onClick={()=>setOpen(false)}>
                <span>닫기</span>
              </div>
            </div>
          }
        </form>
        <div className={'adrs_btn'}  onClick={submitForm}>
          <span>배송지등록</span>
        </div>

      </TitleLayout>
  )
}

MyauctionInfo.getInitialProps = async ({ req ,query }) => {
  return {query}
}
export default MyauctionInfo;
