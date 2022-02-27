import TitleLayout from '../layout/TitleLayout'
import Link from 'next/link'
import {useEffect,useState } from 'react';
import axios from 'axios';
import {setTabNumber} from '../store/modules/tab_number';
import {useSelector, useDispatch } from 'react-redux';
export default function Category(){
  const [cataList,setCateList] = useState([]);
  const dispatch = useDispatch();
  useEffect(()=>{
    axios.get(process.env.api+"Cate/List",{
    	params: {}
    }).then((res)=>{
      if(res.data){
        setCateList(res.data.data);
      }
    }).catch((error)=>{

    });
  },[])
  return (
    <TitleLayout>
      <div className={'pagetit_div'}>
        <h1 className={'page_tit'}>CATEGORY</h1>
      </div>
      <ul className={'cate_list'}>
        <li>
          <Link href="/itemlist">
            <a>
              <div className={'cate_img'}>
                <img className={'cate_img'} src="/img/cate01.jpg"/>
              </div>
              <p className={'cate_tit'}>전체</p>
            </a>
          </Link>
        </li>
        {cataList.map((val,key) =>(
          <li key={key}>
            <Link
              href={"/itemlist?ca_id="+val.ca_id}
            >
              <a>
                <div className={'cate_img'}>
                  <img
                    className={'cate_img'}
                    src={
                      val.ca_img != ''?
                      process.env.domain+'img/'+val.ca_img:
                      "/img/no_img.png"
                    }
                  />
                </div>
                <p className={'cate_tit'}>{val.ca_name}</p>
              </a>
            </Link>
          </li>
        ))}

      </ul>
    </TitleLayout>
  )
}
