
import ItemLayout from '../layout/ItemLayout'
import Link from 'next/link'
import CheckBox from '../atomic/CheckBox.js';
import Slider  from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import OsbinModal from '../layout/OsbinModal';
import AlertModal  from '../layout/OsbinModal';
import {reAlert} from '../store/modules/alert_popup';
import {useRouter} from 'next/router'
import {useEffect,useState} from 'react';
import Swal from 'sweetalert2'
import withReactContent from 'sweetalert2-react-content'
import axios from 'axios';
import Countdown from 'react-countdown';
import useSWR from 'swr'


function Item({query}){
    const {it_idx} = query;
    const router = useRouter();
    const [item ,setItem] = useState([]);
    const [it_plus_price ,setIt_plus_price] = useState('1000');
    const [mb_nick ,setMb_nick] = useState('');
    const [mb_hp ,setMb_hp] = useState('');
    const [imgList ,setImgList] = useState(['/img/no_img.png']);
    let settings = {
        dots: true,
        infinite: true,
        speed: 500,
        arrows:false,
        slidesToShow: 1,
        slidesToScroll: 1
    };
    // 경매감일 카운트다운
    const renderer = ({ days,hours, minutes, seconds, completed }) => {
      if (completed) {
        return <></>;
      } else {
        return <span> {days}일 {hours}시간 {minutes}분 {seconds}초 </span>;
      }
    };
    const MySwal = withReactContent(Swal);

    const addCart = () =>{
      if(typeof(localStorage.mb_token) != "string"){
        Swal.fire("로그인이 필요합니다");
        router.push('/login');
        return false;
      }
      MySwal.fire({
        title: '상품 입찰하기',
        html:(
          <div>
            <div className={'info_input'}>
              <ul>
                <li>
                  <p>입금자명</p>
                  <div>
                    <input
                      type="text"
                      onChange={e=>{mb_nick = e.target.value}}
                    />
                  </div>
                  <p>연락처</p>
                  <div>
                    <input
                      type="text"
                      onChange={e=>mb_hp = e.target.value}
                    />
                  </div>
                </li>
              </ul>
            </div>
            <RadioAtom
              changVal={(val)=>it_plus_price = val}
            />

          </div>
        ),
        inputAttributes: {
          autocapitalize: 'off'
        },
        showCancelButton: true,
        confirmButtonText: '입찰하기',
        cancelButtonText:'닫기',
        showLoaderOnConfirm: true,
        preConfirm: () => {
          const form = new FormData();
          if(mb_nick == ""){
            Swal.showValidationMessage(
              '예금주를 입력해주세요.'
            )
            return false;
          }
          if(mb_hp == ""){
            Swal.showValidationMessage(
              '연락처를 입력해주세요.'
            )
            return false;
          }

          form.append('mb_token',localStorage.mb_token);
          form.append('it_plus_price',it_plus_price);
          form.append('it_idx',it_idx);
          form.append('mb_nick',mb_nick);
          form.append('mb_hp',mb_hp);
          return axios.post(process.env.api+"Auction/AuctionBid",form
          ).then((res)=>{

          }).catch((error)=> {

          });
        },
        allowOutsideClick: () => !Swal.isLoading()
      }).then((result) => {
        if(result.isConfirmed){
          Swal.fire('입찰이 정상적으로 완료되었습니다.')
        }
      })

    }
    const { data, error } = useSWR(
      process.env.api+"Auction/ItemInfo/"+it_idx,
      axios,
      {refreshInterval:3000}
    )
    useEffect(() => {
      if(typeof data == 'object'){
          console.log(data.data.data)
          let it = data.data.data;
          let imgArr = [];
          for (var i = 1; i < 6; i++){
            if(it["it_img"+i] != ""){
              imgArr.push(it["it_img"+i]);
            }
          }
          setItem(it);
          setImgList(imgArr);
      }
    },[data]);



    return(
        <ItemLayout>
          <div className={'item_pic'}>
            <Slider {...settings}>
              {imgList.map((val,key) =>(
                <div className={'content_box'} key={key}>
                  <img
                    src ={
                      val != ''?
                      val:
                      "/img/no_img.png"
                    }
                    onError={(e)=>{e.target.src =  "/img/no_img.png"}}
                  />
                </div>
              ))}
            </Slider>
            <div className={'item_back'}>
              <img className={'back_ico'} src="/img/arrow_06.png" onClick={() => router.back()}/>
            </div>
          </div>
          <div className={'detail_info'}>
            <div className={'store_flex'}>
              <Link href={'/store?mb_id='+item.mb_id}>
                <a className={'item_store'}>
                  <div className={'item_store_img'}>
                    <img
                      src ={
                        item.mb_img != ''?
                        item.mb_img:
                        "/img/no_img.png"
                      }
                      onError={(e)=>{e.target.src =  "/img/no_img.png"}}
                    />
                  </div>
                  {item.mb_nick}
                </a>
              </Link>

              <a className={'store_qna'}>
                <img src="/img/chat2.png"/>2명 참가중
              </a>

            </div>
            <p className={'item_tit'}>{item.it_name}</p>
            <div className={'price_flex'}>
              <div className={'detail_price'}>
                <div>
                  <p className={'sale_price'}>
                    진행가 {item.it_price_sum_text}원
                  </p>

                </div>
                <p className={'item_del_cost'}>
                  기본가 {item.it_price_text}원
                </p>
              </div>
              <a className={'au_com_time_s_box'}>
                {item.au_com_time_s &&
                  <p className={'au_com_time'}>
                    <Countdown
                      date={Date.now() + item.au_com_time_s}
                      renderer={renderer}
                    />
                    남음
                  </p>
                }
              </a>
            </div>
          </div>
          <div className={'item_detail'}>
            <div
              dangerouslySetInnerHTML={{ __html: item.it_content }}
            />
          </div>
          <div className={'item_buy'}>
            <a onClick={()=>addCart(1)}>
              입찰하기
            </a>
          </div>
        </ItemLayout>
    )
}

export const RadioAtom = ({changVal}) =>{
  const useRadioChecked = (init) =>{
    let initObj = [];
    initObj[init] = true;
    const [checked,setChecked] = useState(initObj);
    const [val,setVal] = useState();
    const onChange = (e) =>{
      let temp = [];
      temp[e.target.value] = true;
      changVal(e.target.value);
      setChecked(temp)
    }
    return {onChange,checked}
  }
  const radioVal = useRadioChecked('1000');
  return(
    <div className={'radio_sel'}>
      <input
        type="radio"
        id="normal_pay1"
        name="radioVal"
        value='1000'
        onChange={radioVal.onChange}
        checked={radioVal.checked['1000']&&true}
      />
      <label htmlFor="normal_pay1" className={'cardpay'}>
        <p>+1,000원</p>
      </label>
      <input
        type="radio"
        id="normal_pay2"
        name="radioVal"
        value='5000'
        onChange={radioVal.onChange}
        checked={radioVal.checked['5000']&&true}
      />
      <label htmlFor="normal_pay2" className={'cashpay'}>
        <p>+5,000원</p>
      </label>
      <input
        type="radio"
        id="mobile"
        name="radioVal"
        value='10000'
        onChange={radioVal.onChange}
        checked={radioVal.checked['10000']&&true}
      />
      <label htmlFor="mobile" className={'mbpay'}>
        <p>+10,000원</p>
      </label>
    </div>
  )
}

Item.getInitialProps = async ({ req ,query }) => {
  return {query}
}


export default Item;
