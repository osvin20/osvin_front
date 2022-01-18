
import ItemLayout from '../layout/ItemLayout'
import Link from 'next/link'
import {useRouter} from 'next/router'
import {useEffect,useState} from 'react';
import CheckBox from '../layout/CheckBox.js';
import Slider  from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import OsbinModal from '../layout/OsbinModal';
import AlertModal  from '../layout/OsbinModal';
import {reAlert} from '../store/modules/alert_popup';
import {useDispatch } from 'react-redux';
import axios from 'axios';

function Item({query}){
    const {it_id} = query;
    const dispatch = useDispatch();
    const [ck ,setCk] = useState(false);
    const [item ,setItem] = useState([]);
    const [imgList ,setImgList] = useState([]);
    const router = useRouter()
    let settings = {
        dots: true,
        infinite: true,
        speed: 500,
        arrows:false,
        slidesToShow: 1,
        slidesToScroll: 1
    };
    useEffect(() =>{
      let imgArr = [];
      axios.get(process.env.api+"Item/Info/"+it_id
      ).then((res)=>{
        if(res.data){
          let it = res.data.data;
          for (var i = 1; i < 11; i++){
            if(it["it_img"+i] != ""){
              imgArr.push(it["it_img"+i]);
            }
          }
          setItem(it);
          setImgList(imgArr);
        }
      }).catch((error)=> {

      });
    },[]);
    return(
        <ItemLayout>
            <div className={'item_pic'}>
                <Slider {...settings}>
                    {imgList.map((val,key) =>(
                      <div className={'content_box'}>
                          <img
                            src ={
                              val != ''?
                              process.env.domain+'data/item/'+val:
                              "/img/no_img.png"
                            }
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
                    <Link href='/store'>
                        <a className={'item_store'}>
                            <div className={'item_store_img'}>
                              <img src="/img/shop_01.jpg"/>
                            </div>
                            오스빈 스토어
                        </a>
                    </Link>
                    <Link href='/qna_write'>
                        <a className={'store_qna'}>
                            <img src="/img/chat2.png"/>문의하기
                        </a>
                    </Link>
                </div>
                <p className={'item_tit'}>도리 믹스 패턴 박시 핏 니트</p>
                <div className={'price_flex'}>
                  <div className={'detail_price'}>
                    <div>
                      <p className={'sale_price'}>
                          51,000원
                      </p>
                      <p className={'sale_per'}>10%</p>
                      <p className={'cost'}>56,000원</p>
                    </div>
                    <p className={'item_del_cost'}>
                      배송비
                      <span>2500원</span>
                    </p>
                  </div>
                  <Link href='/coupon_down'>
                    <a>
                      <img src='img/coupon2.png'/>
                    </a>
                  </Link>
                </div>
            </div>
            <div className={'item_detail'}>
                <img src="/img/detail_pic.jpg"/>
            </div>
            <div className={'item_tag'}>
                <p>tag</p>
                <div className={'hothash'}>
                <Link href='/search_result'>
                  <a>
                      # <span>빈티지목걸이</span>
                  </a>
                </Link>
                <Link href='/search_result'>
                  <a>
                      # <span>다이어리</span>
                  </a>
                </Link>
                <Link href='/search_result'>
                  <a>
                      # <span>만년필</span>
                  </a>
                </Link>
                <Link href='/search_result'>
                  <a>
                      # <span>화장대</span>
                  </a>
                </Link>
                <Link href='/search_result'>
                  <a>
                      # <span>엔틱수납장</span>
                  </a>
                </Link>
                <Link href='/search_result'>
                  <a>
                      # <span>클래식</span>
                  </a>
                </Link>
                <Link href='/search_result'>
                  <a>
                      # <span>빈티지드레스</span>
                  </a>
                </Link>
                </div>
            </div>
            <div className={'item_buy'}>
                <CheckBox
                  id={"checkBox4"}
                  defCk={false}
                  offEl={
                    <div className={'item_heart'}>
                        <img src="/img/heart4.png"/>
                    </div>
                  }
                  onEl={
                    <div className={'item_heart'}>
                        <img src="/img/heart6.png"/>
                    </div>
                  }
                />
                <OsbinModal
                  title=""
                  bnt_title ="장바구니"
                  btn_label ="쇼핑 계속하기"
                  action_label ="장바구니로 가기"
                  class_name={"cart_dir"}
                  modalFun ={()=>router.push("/cart")}
                  modal_id={"withdrawal_modal"}
                  modal_class={"cart_modal"}
                >
                  <p className={"phone_modal"}>상품을 장바구니에 담았습니다.</p>
                </OsbinModal>
                <Link href='/order'>
                    <a>
                    구매하기
                    </a>
                </Link>
            </div>
        </ItemLayout>
    )
}
Item.getInitialProps = async ({ req ,query }) => {
  return {query}
}
export default Item;
