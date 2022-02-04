import TitleLayout from '../layout/TitleLayout'
import Link from 'next/link'
import Swal from 'sweetalert2'
import {reAlert} from '../store/modules/alert_popup';
import {useDispatch } from 'react-redux';
import {useEffect,useState} from 'react';
import axios from 'axios';

export default function Donation(){
    const [donaList, setDoneList] = useState([]);
    useEffect(() => {
      axios.get(process.env.api+'Borad/DonationList'
      ).then((res) => {
        if(typeof(res.data.data) == 'object'){
          setDoneList(res.data.data)
        }
      }).catch((error) => {

      });
    },[]);
    
    return (
        <TitleLayout>
            <div className={'pagetit_div'}>
              <h1 className={'page_tit'}>DONATION</h1>
            </div>
            <div className={'borderfix'}></div>
            <ul className={'donation_list'}>
              {donaList.map((val, key) => (
                <li key={key}>
                  <Link href={val.wr_link1}>
                    <a>
                      <div className={'donation_thumb'}>
                        <img src={
                          val.bf_file != ''?
                          val.bf_file:
                          '/img/no_img.png'
                        }/>
                      </div>
                      <p className={'donation_tit'}>
                        {val.wr_seo_title}
                      </p>
                    </a>
                  </Link>
                </li>
              ))}
            </ul>
        </TitleLayout>
    )
}
