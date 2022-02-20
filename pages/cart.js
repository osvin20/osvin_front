import TitleLayout from '../layout/TitleLayout'
import Link from 'next/link'
import {useEffect,useState,useRef } from 'react';
import axios from 'axios';
import { useRouter } from "next/router";
import Swal from 'sweetalert2'

export default function Cart(){
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
        setItemList(itemList.filter(
          val=>val.ct_id !== itemList[key].ct_id
        ));
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
  useEffect(() =>{
    axios.get(process.env.api+"Cart/List",{
      params: {
        mb_token:localStorage.mb_token
      }
    }).then((res)=>{
      if(res.data){
        setItemList(res.data.data.list);
        setSum(res.data.data.sum);
      }
    }).catch((error)=> {
    });
  },[]);

    return (
        <TitleLayout loginCheck={true}>
          <div className={'pagetit_div'}>
            <h1 className={'page_tit'}>CART</h1>
          </div>

          <div className={'cart_div'}>
            <div className={'cart_check'}>
              <input type="checkbox" id="all_check" {...allcK}/>
              <label htmlFor="all_check">전체선택</label>
            </div>
            {itemList.length == 0 &&
              <div className={'empty_cart'}>
                <img src="img/cart.png"/>
                <p>장바구니가 비어있습니다.</p>
                <Link href='/'>
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
                    <div>
                      <input
                        type="checkbox"
                        id={"itemcheck"+key}
                        name={'ct_id[]'}
                        value={val.ct_id}
                        checked={ct_id.indexOf(key) >= 0 ? true : false }
                        onChange={(e)=>allcK.onChange(e,key)}
                      />
                      <label htmlFor={"itemcheck"+key}></label>
                    </div>
                    <Link href={'/item?it_id='+val.it_id}>
                      <a className={'cart_thumb'}>
                        <img
                          src ={
                            val.it_img != ''?
                            process.env.domain+'data/item/'+val.it_img:
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
                        <p className={'cart_price'}>{val.ct_price_text}원</p>
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
            <div className={'cart_info'}>
              <div>
                <p>총 상품금액</p>
                <p>{sum.item_sum}원</p>
              </div>
              <div>
                <p>총 배송비</p>
                <p>{sum.sc_sum}원</p>
              </div>
              <div className={'cart_total'}>
                <p>총 결제금액</p>
                <p>{sum.all_sum}원</p>
              </div>
            </div>
            <div className={'pay_btn'} onClick={orderCart}>
              <a>구매하기</a>
            </div>
          </div>
        </TitleLayout>
    )
}
