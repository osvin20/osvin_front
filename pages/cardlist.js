import TitleLayout from "../layout/TitleLayout";
import Link from "next/link";
import Swal from 'sweetalert2'
import axios from 'axios';
import {useRouter} from 'next/router'
import {useEffect,useState,useRef} from 'react';

export default function CardList(){
  const router = useRouter();
  const [list , setList] = useState([]);
  const cardAddUrl = () =>{
    const form = new FormData();
    var newURL = window.location.protocol + "//" + window.location.host + "/" + window.location.pathname;
    form.append('cancel_url',newURL);
    form.append('mb_token',localStorage.mb_token);
    axios.post(process.env.api+"Card/CardAddUrl",form
    ).then((res)=>{
        if(res.data.state){
          router.push(res.data.data.redirect_url);
        }else{
          Swal.fire(msg);
        }
    }).catch((error)=> {});
  }
  const removeCard = (cd_idx) =>{
    Swal.fire({
      title: '정말 삭제합니까?',
      text: "지워진 카드는 복구가 불가합니다.",
      icon: 'warning',
      showCancelButton: true,
      confirmButtonColor: '#ca8756',
      cancelButtonColor: '#ddd',
      confirmButtonText: '삭제합니다',
      cancelButtonText: '아니오',
    }).then((result) => {
      if (result.isConfirmed) {
        const form = new FormData();
        form.append('cd_idx',cd_idx);
        form.append('mb_token',localStorage.mb_token);
        axios.post(process.env.api+"Card/Remove",form
        ).then((res)=>{
          if(res.data.state){
            Swal.fire(
              '삭제되었습니다.',
              '소중한 데이터를 안전하게 제거했습니다.',
              'success'
            )
            router.reload();
          }
        }).catch((error)=> {
        });

      }
    })
  }
  useEffect(() => {
    axios.get(process.env.api+"Card/CardList",{
      params: {
        mb_token:localStorage.mb_token
      }
    }).then((res)=>{
      if(res.data.state){
        setList(res.data.data)
      }
    }).catch((error)=> {
    });
  },[]);

  return (
    <TitleLayout>
      <div className={'pagetit_div'}>
        <h1 className={'page_tit'}>MY CARD</h1>
      </div>
      <div className={'cardlist'}>
        <a className={'plus_ico'} onClick={cardAddUrl}>
          <img src="/img/plus.png" />
        </a>
        <ul>
          {list.map((val,key) =>(
            <li key={key}>
              <div>
                <p>{val.card_name}카드</p>
                <span>{val.card_info}</span>
              </div>
              <p
                className={'card_del'}
                onClick={()=>removeCard(val.cd_idx)}
              >
                삭제
              </p>
            </li>
          ))}
        </ul>
      </div>
    </TitleLayout>
  );
}
