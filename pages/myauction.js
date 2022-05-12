import TitleLayout from '../layout/TitleLayout'
import Link from 'next/link'
import {useEffect,useState,useRef } from 'react';
import axios from 'axios';
import { useRouter } from "next/router";
import Swal from 'sweetalert2'

export default function Myauction(){
  const [itemList,setItemList] = useState([]);
  const [ct_id,setCt_id] = useState([]);
  const formRef = useRef(); //form data값 저장
  const router = useRouter()
  const useAllCheck = () =>{
    const [checked,setChecked] = useState(false);
    const onChange = (e,idx) =>{
      if(typeof(idx) == "number"){
        const temp = ct_id;
        if(e.target.checked){
          setCt_id([...ct_id, idx])
        }else{
          setCt_id(ct_id.filter(o=>o!==idx))
        }
      }else {
        if(e.target.checked){
          const temp = [];
          for (var i = 0; i < itemList.length; i++) {
            temp.push(i);
          }
          setCt_id(temp);
        }else {
          setCt_id([]);
        }
        setChecked(e.target.checked);
      }
    };
    return {checked ,onChange};
  }
  const allcK = useAllCheck();
  const [sum,setSum] = useState({
    item_sum:0,
    sc_sum:0,
    all_sum:0,
  });
  const cartRemove = (key) => {
    const form = new FormData();
    form.append('mb_token',localStorage.mb_token);
    axios.post(process.env.api+"Cart/Remove/"+itemList[key].ct_id,form
    ).then((res)=>{
      if(res.data.state){
        router.reload()
      }
    }).catch((error)=> {});

  }
  // 장바구니 일괄구매 합니다.
  const orderCart = () => {
    const form = new FormData(formRef.current);
    form.append('mb_token',localStorage.mb_token);
    axios.post(process.env.api+"Cart/OrderCart",form
    ).then((res)=>{
      if(res.data.state){
        router.push('/order')
      }else{
        Swal.fire(res.data.msg);
      }
    }).catch((error)=> {});
  }
  const getCartList = () =>{
    axios.get(process.env.api+"Auction/MyAuction",{
      params: {
        mb_token:localStorage.mb_token
      }
    }).then((res)=>{
      if(res.data){
        setItemList(res.data.data);
      }
    }).catch((error)=> {
    });
  }
  useEffect(() =>{
    getCartList();
  },[]);

    return (
        <TitleLayout loginCheck={true}>
          <div className={'pagetit_div'}>
            <h1 className={'page_tit'}>나의경매</h1>
          </div>

          <div className={'cart_div'}>
            {itemList.length == 0 &&
              <div className={'empty_cart'}>
                <img src="img/cart.png"/>
                <p>경매상품이 비어있습니다.</p>
                <Link href='/auction_list'>
                  <a className={'main_dir'}>
                    구경하러 가기
                  </a>
                </Link>
                <p className={'empty_txt'}>오스빈의 다양한 상품을 구경하며<br/>환경살리기 운동까지 참여해보세요!</p>
              </div>
            }
            <form ref={formRef}>
              <ul className={'cart_list'}>
                {itemList.map((val,key) =>(
                  <li key={key}>
                    <Link href={'/item?it_id='+val.it_id}>
                      <a className={'cart_thumb'}>
                        <img
                          src ={
                            val.it_img != ''?
                            val.it_img1:
                            "/img/no_img.png"
                          }/>
                      </a>
                    </Link>
                    <div className={'cartitem'}>
                      <div>
                        <p className={'cart_shop'}>{val.mb_nick}</p>
                        <Link href='/item'>
                          <a>
                            <p className={'cartitem_name'}>{val.it_name}</p>
                          </a>
                        </Link>
                      </div>
                      <div className={'cart_price_div'}>
                        <p className={'del_cost'}>
                          원가 {val.it_price_text}
                        </p>
                        <p className={'cart_price'}>매입가 {val.it_price_my_text}원</p>
                      </div>
                    </div>
                    <div className={'cart_del'}>
                      <div>
                        <img src="img/close.png" onClick={()=>cartRemove(key)}/>
                      </div>
                    </div>
                  </li>
                ))}
              </ul>
            </form>

            <div className={'pay_btn'}>
              <Link href='/auction_list'>
                <a >판매중인경매</a>
              </Link>
            </div>
          </div>
        </TitleLayout>
    )
}
