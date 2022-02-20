import Link from 'next/link'
import {useDispatch } from 'react-redux';
import {useEffect,useState} from 'react';
import axios from 'axios';

export default function HotStore(){

    const [hotstores, SetHotstores] = useState([]);
    useEffect(() => {
      axios.get(process.env.api+'Popular/TopStore'
      
      ).then((res) => {
        if(typeof(res.data.data) == 'object'){
          SetHotstores(res.data.data)
        }
      }).catch((error) => {})
    },[]);

    return (
      <div className={'storefeed zzimlist searchlist'}>
            <ul className={'hot_list'}>
              {hotstores.map((val, key) => (
                <li key={key}>
                    <p className={'hot_num'}>{key+1}</p>
                    <Link href={`/store?mb_id=${val.mb_id}`}>
                        <a className={'hotstore'}>
                        <div className={'hotstoreimg'}>
                            <img src={
                              val.mb_img != ''?
                              val.mb_img:
                              '/img/no_img.png'
                              }/>
                        </div>
                        <p className={'hotkw'}>{val.mb_nick}</p>
                        </a>
                    </Link>
                </li>
              ))}
            </ul>
      </div>
    );
  }
