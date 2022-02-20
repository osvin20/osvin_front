import Link from 'next/link'
import CheckBox from '../atomic/CheckBox.js';
import {useEffect,useState} from 'react';
import axios from 'axios';
import Swal from 'sweetalert2'


export default function StoreItem({mb_id}){
    const [ck ,setCk] = useState(false);
    const [list ,setList] = useState([]);
    const addRemove = (it_id) =>{
      const form = new FormData();
      form.append('mb_token',localStorage.mb_token);
      form.append('it_id',it_id);
      axios.post(process.env.api+"Wish/AddRemove",form
      ).then((res)=>{
        Swal.fire(res.data.msg);
      })
    }
    useEffect(() =>{
      axios.get(process.env.api+"Store/ItemList/"+mb_id,{
      params: {
        mb_token:localStorage.mb_token
      }
      }).then((res)=>{
        console.log(res.data.data);
        if(typeof(res.data.data) == "object"){
          setList(res.data.data);
        }
      }).catch((error)=> {

      });
    },[]);
    return (
      <div className={'storefeed zzimlist storeitem'}>
        <div className={'storeitem_count'}>
          <p>15</p>개의 판매상품
        </div>
        <ul>
          {list.map((val,key) =>(
            <li>
              <Link href={"/item?it_id="+val.it_id}>
                <a>
                  <img
                    src={process.env.domain+'data/item/'+val.it_img1}
                    onError={(e)=>{e.target.src = '/img/no_img.png'}}
                  />
                </a>
              </Link>
              <CheckBox
                id={"likeCheck"+key}
                defCk={val.zzimCk}
                offEl={
                  <div className={'heart_ico'}>
                    <img src="/img/heart2.png"/>
                  </div>
                }
                onEl={
                  <div className={'heart_ico heart_click'}>
                    <img src="/img/heart3.png"/>
                  </div>
                }
                onchangeHandler={()=>addRemove(val.it_id)}
              />
            </li>
          ))}
        </ul>
      </div>
    );
  }
