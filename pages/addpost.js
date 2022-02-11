
import TitleLayout from '../layout/TitleLayout'
import Link from 'next/link'
import {useEffect,useState} from 'react';
import Swal from 'sweetalert2'
import axios from 'axios';

export default function AddPost(){
  const [odlist, setOdlist] = useState([]);
  const [it_id, setIt_id] = useState('');
  useEffect(() => {
    axios.get(process.env.api+'Order/OrderDetailList',{
      params: {
        mb_token:localStorage.mb_token
      }
    }).then((res) => {
      if(typeof(res.data.data) == 'object'){
        setOdlist(res.data.data);
      }
    }).catch((error) => {

    });
  },[])
  return (
      <TitleLayout>
          <div className={'pagetit_div'}>
            <h1 className={'page_tit'}>ITEM LIST</h1>
          </div>
          <div className={'post_btn'}>
              <Link href={'/post_write?it_id='+it_id}>
                  <a>
                      게시물 올리기
                  </a>
              </Link>
          </div>
          <ul className={'post_item'}>
            {odlist.map((val, key) => (
              <li key={key} onClick={()=>setIt_id(val.it_id)}>
                  <div className={'post_check'}>
                      <img
                        src={
                          val.it_img1 != ''?
                          val.it_img1:
                          '/img/no_img.png'
                        }
                      />
                      <input type="radio" id={"item"+key} name="postcheck"/>
                      <label htmlFor={"item"+key}></label>
                  </div>
                  <div className={'post_item_txt'}>
                      <p className={'item_store'}>
                          {val.mb_nick}
                      </p>
                      <p className={'item_name'}>
                          {val.it_name}
                      </p>
                  </div>
              </li>
            ))}
          </ul>
      </TitleLayout>
  )
}
