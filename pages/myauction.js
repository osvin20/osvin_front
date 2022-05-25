import TitleLayout from '../layout/TitleLayout'
import Link from 'next/link'
import {useEffect,useState,useRef } from 'react';
import axios from 'axios';
import { useRouter } from "next/router";
import Swal from 'sweetalert2'
import Tabs from '@material-ui/core/Tabs';
import Tab from '@material-ui/core/Tab';
import ViewItem from './viewitem'
import TabPanel from '../layout/TabPanel'
import useHistoryState from '../hook/useHistoryState';
import AppBar from '@material-ui/core/AppBar';
export default function Myauction(){
  const [acWaitList,setAcWaitList] = useState([]);
  const [acComList,setAcComList] = useState([]);
  const [ct_id,setCt_id] = useState([]);
  const [value, setValue] = useHistoryState(0);
  const handleChange = (event, newValue) => {
    setValue(newValue);
  };
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

  const getDataList = () =>{
    axios.get(process.env.api+"Auction/MyAuction",{
      params: {
        mb_token:localStorage.mb_token,
        lo_con:"000"
      }
    }).then((res)=>{
      if(res.data){
        setAcWaitList(res.data.data);
      }
    }).catch((error)=> {
    });
    axios.get(process.env.api+"Auction/MyAuction",{
      params: {
        mb_token:localStorage.mb_token,
        lo_con:"ALL"
      }
    }).then((res)=>{
      if(res.data){
        setAcComList(res.data.data);
      }
    }).catch((error)=> {
    });
  }
  useEffect(() =>{
    getDataList();
  },[]);

    return (
        <TitleLayout loginCheck={true}>
          <div className={'pagetit_div'}>
            <h1 className={'page_tit'}>나의경매</h1>
          </div>
          <div className={'feedcate' }>

            <Tabs value={value} onChange={handleChange} aria-label="simple tabs example">
              <Tab label="진행중" id={"simple-tab-0"} aria-controls={"simple-tabpanel-0"}/>
              <Tab label="낙찰완료" id={"simple-tab-1"} aria-controls={"simple-tabpanel-1"} />
            </Tabs>
            <div className={'feedcateline'}/>
            <TabPanel value={value} index={0}>
              <div className={'cart_div'}>
                {acWaitList.length == 0 &&
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
                <ul className={'cart_list'}>
                  {acWaitList.map((val,key) =>(
                    <li key={key}>
                      <Link href={'/auction_item_info?it_idx='+val.it_idx}>
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
                          <Link href={'/auction_item_info?it_idx='+val.it_idx}>
                            <a>
                              <p className={'cartitem_name'}>{val.it_name}</p>
                            </a>
                          </Link>

                        </div>
                        <div className={'cart_price_div'}>
                          <p className={'del_cost'}>
                            시작가격 {val.it_price_text}
                          </p>
                          <p className={'cart_price'}>매입가 {val.it_price_my_text}원</p>
                        </div>
                      </div>

                    </li>
                  ))}
                </ul>

                <div className={'pay_btn'}>
                  <Link href='/auction_list'>
                    <a >판매중인경매</a>
                  </Link>
                </div>
              </div>
            </TabPanel>
            <TabPanel value={value} index={1}>
              <div className={'cart_div'}>
                {acComList.length == 0 &&
                  <div className={'empty_cart'}>
                    <img src="img/cart.png"/>
                    <p>낙찰상품이 비어있습니다.</p>
                    <Link href='/auction_list'>
                      <a className={'main_dir'}>
                        구경하러 가기
                      </a>
                    </Link>
                    <p className={'empty_txt'}>꾸준히 경매를 신청하시면 낙찰되실 수 있어요!</p>
                  </div>
                }
                <ul className={'cart_list'}>
                  {acComList.map((val,key) =>(
                    <li key={key}>
                      <Link href={'/auction_item_info?it_idx='+val.it_idx}>
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
                          <p className={'cart_shop'}>
                            {val.mb_nick}
                            <Link href={'/myauction_info?lo_idx='+val.lo_idx}>
                              <a className={'lo_add_bnt'}>주소등록</a>
                            </Link>
                          </p>
                          <Link href={'/auction_item_info?it_idx='+val.it_idx}>
                            <a>
                              <p className={'cartitem_name'}>{val.it_name}</p>
                            </a>
                          </Link>
                          <p className={'lo_address'}>{val.lo_address}</p>
                        </div>
                        <div className={'cart_price_div'}>
                          <p className={'del_cost'}>
                            시작가격 {val.it_price_text} {val.lo_con_text}
                          </p>
                          <p className={'cart_price'}>매입가 {val.it_price_my_text}원</p>
                        </div>
                      </div>

                    </li>
                  ))}
                </ul>
                <div className={'pay_btn'}>
                  <Link href='/auction_list'>
                    <a >판매중인경매</a>
                  </Link>
                </div>
              </div>
            </TabPanel>
          </div>
        </TitleLayout>
    )
}
