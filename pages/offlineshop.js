
import TitleLayout from '../layout/TitleLayout'
import Link from 'next/link'
import {useEffect,useState} from 'react';
import Swal from 'sweetalert2'
import axios from 'axios';

export default function OfflineShop(){
    const [ofshopdetail, setOfshopdetail] = useState([]);
    useEffect(() => {
      axios.get(process.env.api+'Borad/MemberOfflineList'
      ).then((res)=>{
        if(typeof(res.data.data) == 'object'){
          setOfshopdetail(res.data.data);
        }
      }).catch((error) => {

      })
    },[])
    return (
        <TitleLayout>
            <div className={'pagetit_div'}>
              <h1 className={'page_tit'}>OFFLINESHOP</h1>
            </div>
            <div className={'offshop_map'}>
                <img src="/img/map.jpg"/>
            </div>
            {/*<div>
                <div className={'map_search'}>
                    <div className={'search_div'}>
                        <input type="text"/>
                        <img src="/img/search.png"/>
                    </div>
                    <div c
                    
                    lassName={'search_sel'}>
                        <select>
                            <option>1km 미만</option>
                        </select>
                        <img src="/img/arrow_10.png"/>
                    </div>
                </div>
            </div>*/}
            <ul className={'offshoplist'}>
                {/* <li className={'offshop_none'}>
                    검색 결과가 없습니다.
                </li> */}
              {ofshopdetail.map((val, key) => (
                <li key={key}>
                <Link href={`/store?of_idx=${val.of_idx}`}>
                  <a>
                    <div className={'offshop_info'}>
                        <div>
                            <p className={'offshop_name'}>
                                {val.of_name}
                            </p>
                            <p className={'offshop_adrs'}>{val.of_address1}{val.of_address2}</p>
                        </div>
                        <p className={'offshop_phone'}>070-0000-0000</p>
                    </div>
                    <div className={'offshop_thumb'}>
                        <img src={
                          val.of_img != ''?
                          val.of_img:
                          '/img/no_img.png'
                        }/>
                    </div>
                  </a>
                </Link>
                </li>
              ))}
            </ul>
        </TitleLayout>
    )
}
