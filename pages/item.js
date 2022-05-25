
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
import {useDispatch } from 'react-redux';
import axios from 'axios';

function Item({query}){

    const {it_id} = query;
    const router = useRouter();
    const dispatch = useDispatch();
    const [ck ,setCk] = useState(false);
    const [item ,setItem] = useState([]);
    const [tag ,setTag] = useState([]);
    const [imgList ,setImgList] = useState(['/img/no_img.png ']);
    let settings = {
        dots: true,
        infinite: true,
        speed: 500,
        arrows:false,
        slidesToShow: 1,
        slidesToScroll: 1
    };
    const addRemove = () =>{
      const form = new FormData();
      if(typeof(localStorage.mb_token) != "string"){
        Swal.fire("로그인이 필요합니다");
        router.push('/login');
        return false;
      }
      form.append('mb_token',localStorage.mb_token);
      form.append('it_id',it_id);
      axios.post(process.env.api+"Wish/AddRemove",form
      ).then((res)=>{
        Swal.fire(res.data.msg);
      })
    }
    const addCart = (ct_select) =>{
      const form = new FormData();
      if(typeof(localStorage.mb_token) != "string"){
        Swal.fire("로그인이 필요합니다");
        router.push('/login');
        return false;
      }
      const ct_qty = 1;

      form.append('mb_token',localStorage.mb_token);
      form.append('it_id',item.it_id);
      form.append('it_name',item.it_name);
      form.append('ct_option',item.it_name); // 옵션구현전까지는
      form.append('it_sc_price',item.it_sc_price);
      form.append('ct_price',item.it_price);
      form.append('ct_qty',ct_qty);
      form.append('it_sc_type',item.it_sc_type);
      form.append('mb_sell_id',item.mb_id);
      form.append('ct_select',ct_select);
      axios.post(process.env.api+"Cart/Add",form
      ).then((res)=>{
        if(ct_select == 1){
          if(res.data.state){
            router.push('/order');
          }else{
            Swal.fire(res.data.msg);
          }
          return false;
        }
        if(res.data.state){
          Swal.fire({
            title:'장바구니',
            html:res.data.msg,
            icon:'success',
            showCancelButton: true,
            confirmButtonText: '장바구니가기',
            cancelButtonText: '쇼핑계속하기',
          }).then((result) => {
            if(result.isConfirmed) {
              router.push('/cart');
            }
          })
        }else{
          Swal.fire(res.data.msg);
        }
      }).catch((error)=> {

      });
    }

    useEffect(() =>{
      let imgArr = [];
      // 없는 상품시 액박방지
      if(it_id == undefined){it_id = "1640855921";}
      axios.get(process.env.api+"Item/Info/"+it_id,{
        params: {
          mb_token:localStorage.mb_token
        }
      }).then((res)=>{
        if(res.data.state){
          if(res.data){
            let it = res.data.data;

            for (var i = 1; i < 11; i++){
              if(it["it_img"+i] != ""){
                imgArr.push(it["it_img"+i]);
              }
            }
            setTag(it.it_shop_memo)
            setItem(it);
            setImgList(imgArr);
          }
        }
      }).catch((error)=> {
      });
    },[]);
    return(
        <ItemLayout>
          <div className={'item_pic'}>
            <Slider {...settings}>
              {imgList.map((val,key) =>(
                <div className={'content_box'} key={key}>
                  <img
                    src ={
                      val != ''?
                      process.env.domain+'data/item/'+val:
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
              <Link href={'/qna_write?it_id='+item.it_id}>
                <a className={'store_qna'}>
                  <img src="/img/chat2.png"/>문의하기
                </a>
              </Link>
            </div>
            <p className={'item_tit'}>{item.it_name}</p>
            <div className={'price_flex'}>
              <div className={'detail_price'}>
                <div>
                  <p className={'sale_price'}>
                    {item.it_price_text}원
                  </p>
                  {
                      //<p className={'sale_per'}>10%</p>
                      //<p className={'cost'}>56,000원</p>
                  }
                </div>
                <p className={'item_del_cost'}>
                  {(() => {
                    switch (item.it_sc_type) {
                      case '0':
                        return <>기본배송</>
                      case '1':
                        return <>무료배송</>
                      case '3':
                        return <>배송비<span>{item.it_sc_price}원</span></>
                    }
                  })()}
                </p>
              </div>
              <Link href={'/coupon_down?it_id='+item.it_id}>
                <a>
                  <img src='img/coupon2.png'/>
                </a>
              </Link>
            </div>
          </div>
          <div className={'item_detail'}>

            <div
              dangerouslySetInnerHTML={{ __html: item.it_mobile_explan }}
            />

          </div>
          <div className={'item_tag'}>
            <p>tag</p>
            <div className={'hothash'}>
              {tag.map((val,key) =>(
                <Link href={'/search_result?it_shop_memo='+val} key={key}>
                  <a>
                    # <span>{val}</span>
                  </a>
                </Link>
              ))}
            </div>
          </div>
          <div className={'item_buy'}>
            <CheckBox
              id={"checkBox4"}
              defCk={item.wi_check}
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
              onchangeHandler={addRemove}
            />
            <span className="cart_dir" onClick={()=>addCart(0)}>장바구니</span>
            <a onClick={()=>addCart(1)}>
              구매하기
            </a>
          </div>
        </ItemLayout>
    )
}
Item.getInitialProps = async ({ req ,query }) => {
  return {query}
}
export default Item;
