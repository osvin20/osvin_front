import TitleLayout from '../layout/TitleLayout'
import Link from 'next/link'
import {useEffect,useState} from 'react';
import Swal from 'sweetalert2'
import axios from 'axios';


export default function AuctionList(){
    const [ytubeList, setYtubeList] = useState([]);
    useEffect(()=>{
      axios.get(process.env.api+'Auction/List'
      ).then((res) => {
        if(typeof(res.data.data) == 'object'){
          setYtubeList(res.data.data);
        }
      }).catch((error) => {

      });
    },[]);
    return (
        <TitleLayout>

            <div className={'pagetit_div'}>
              <h1 className={'page_tit'}>AUCTION</h1>
            </div>
            <div className={'borderfix'}></div>
            <div className={'youtube_prof'}>
              <div>
                <div className={'youtube_prof_img'}>
                  <img src='img/admin.gif'/>
                </div>
                <p>매주 진행되는 경매상품의 <br/> 주인공이 되어보세요!</p>

              </div>
            </div>
            <div className={'upload_txt extra_bold'}>진행중인 &quot;경매이벤트&quot;</div>
            <ul className={'ytb_list'}>
              {ytubeList.map((val, key)=>(
                <li key={key}>
                  <Link href={`/auction_item_list?au_idx=${val.au_idx}`}>
                    <a>
                      <div className={'ytb_thumb'}>
                        <img src={
                            val.au_img != ''?
                            val.au_img:
                            '/img/no_img.png'
                          }
                        />
                      </div>
                      <div>
                        <p className={'ytb_tit'}>
                        [마감일자]
                        </p>
                        <span className={'ytd_date'}>{val.au_com_time} 까지</span>
                        <p className={'ytb_tit'}>
                        {val.au_name}
                        </p>

                      </div>
                    </a>
                  </Link>
                </li>
              ))}
            </ul>
        </TitleLayout>
    )
}
