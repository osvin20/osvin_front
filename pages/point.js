import TitleLayout from '../layout/TitleLayout'
import Link from 'next/link'
import {useDispatch } from 'react-redux';
import {useEffect,useState} from 'react';
import axios from 'axios';

export default function Point(){
    const [point, setPoint] = useState(0);
    const [list, setList] = useState([]);
    useEffect (() => {
      axios.get(process.env.api+'Member/PointList',{
        params:{
          mb_token:localStorage.mb_token,
        }
      }).then((res)=>{
        if(typeof(res.data.data) == 'object'){
          setList(res.data.data.list);
          setPoint(res.data.data.sumPoint);
        }
      }).catch((error) => {

      })
    },[])
    return (
        <TitleLayout>
          <div className={'pagetit_div'}>
            <h1 className={'page_tit'}>POINT</h1>
          </div>
          <div className={'point_div'}>
            <div className={'pointbox'}>
              <div>
                <p className={'point'}>
                  보유포인트
                  <img src="img/point2.png"/>
                </p>
                <p className={'point_bold'}>{point} P</p>
              </div>
              <div>
                <p>당월 소멸예정포인트</p>
                <p>0</p>
              </div>
            </div>
          </div>
          <div className={'point_list'}>
            <p>
              포인트 내역
              <span>
                최근 3개월 내역까지 노출
              </span>
            </p>
            <ul>
              {list.map((val, key) => (
                <li key={key}>
                  <div>
                    <p>
                      <span>{val.po_content}</span>
                    </p>
                    <p className={'point_date'}>{val.po_datetime}</p>
                  </div>
                  <p className={'point_bold'}>{val.po_point} P</p>
                </li>
              ))}
            </ul>
          </div>
        </TitleLayout>
    )
}
