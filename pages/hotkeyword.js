import Link from 'next/link'
import {useDispatch } from 'react-redux';
import {useEffect,useState} from 'react';
import axios from 'axios';
import { number } from 'prop-types';

export default function HotKeyword(){
  const [hotkeywd, SetHotkeywd] = useState([]);
  useEffect(() => {
    axios.get(process.env.api+'Popular/List'
    ).then( (res) => {
      if(typeof(res.data.data) == 'object'){
        SetHotkeywd(res.data.data)
      }
    }).catch( (error) => {

    })
  },[]);
  return (
    <div className={'storefeed zzimlist searchlist'}>
      <ul className={'hot_list'}>
        {hotkeywd.map((val, key) => (
          <li key={key}>
            <p className={'hot_num'}>{key+1}</p>
            <div>
              <Link href={`/search_result?it_shop_memo=${val.pp_word}`}>
                <a>
                  <p className={'hotkw'}>{val.pp_word}</p>
                </a>
              </Link>
            </div>
          </li>
        ))}
      </ul>
    </div>
  );
}
