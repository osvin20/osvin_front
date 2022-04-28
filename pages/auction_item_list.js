import NoneLayout from '../layout/NoneLayout'
import Link from 'next/link'
import {useEffect,useState} from 'react';
import Swal from 'sweetalert2'
import axios from 'axios';
import Countdown from 'react-countdown';
import TitleLayout from '../layout/TitleLayout'
import useSWR from 'swr';

export default function AuctionItemList({query}){
    const {au_idx} = query;
    const [auctionInfo, setAuctionInfo] = useState([]);
    const [itemList, setItemList] = useState([]);
    // 경매감일 카운트다운
    const renderer = ({ days,hours, minutes, seconds, completed }) => {
      if (completed) {
        return <></>;
      } else {
        return <span> {days}일 {hours}시간 {minutes}분 {seconds}초 </span>;
      }
    };


    useEffect(() => {
      axios.get(process.env.api+'Auction/Info/'+au_idx
      ).then((res) => {
        if(typeof(res.data.data) == 'object'){
          setAuctionInfo(res.data.data.au);
        }
      }).catch((error) => {

      });

    },[]);

    const { data, error  } = useSWR(
      process.env.api+'Auction/ItemList/'+au_idx,
      axios,
      {refreshInterval:8000}
    )
    useEffect(() => {
      if(typeof data == 'object'){
          console.log(data.data.data)
          setItemList(data.data.data)
      }
    },[data]);

    return (
      <TitleLayout>
        <div className={'pagetit_div'}>
          <h1 className={'page_tit'}>AUCTION ITEM</h1>
        </div>
        <div className={'borderfix'}></div>
        <div className={'auction_item_list'}>
          <p className={'au_com_time'}>
            경매 마감까지
            {auctionInfo.au_com_time_s &&
              <Countdown
                date={Date.now() + auctionInfo.au_com_time_s}
                renderer={renderer}
              />
            }남음
          </p>
          <h2 className={'dona_tit extra_bold'}>{auctionInfo.au_name}</h2>
          <ul className={'ac_item'}>
            {itemList.map((val,key) =>(
              <li key={key}>
                <Link href={"/auction_item_info?it_idx="+val.it_idx}>
                  <a className={'img_box'}>
                    <div>
                      <img
                        src ={
                          val.it_img1 != ''?
                          val.it_img1:
                          "/img/no_img.png"
                        }
                      />
                    </div>
                  </a>
                </Link>
                <Link href={"/item?it_id="+val.it_id}>
                  <a>
                    <div className={'iteminfo'}>
                      <p className={'itemname'}>{val.it_name}</p>
                      <p className={'itemprice'}>
                        진행가 <span>{val.it_price_text}</span>
                        원
                      </p>
                    </div>
                  </a>
                </Link>
              </li>
            ))}
          </ul>
        </div>
      </TitleLayout>
    )
}
AuctionItemList.getInitialProps = async({req, query}) => {
  return {query}
}
