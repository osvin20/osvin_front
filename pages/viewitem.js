import Link from 'next/link'
import React,{useState,useEffect} from 'react';
import CheckBox from '../atomic/CheckBox.js';
import axios from 'axios';
import Swal from 'sweetalert2'
import {useRouter} from 'next/router'

export default function ViewItem({api}){
    const [itemList,setItemList] = useState([]);
    const router = useRouter()
    useEffect(() =>{
      console.log(localStorage.mb_token)
      axios.get(process.env.api+"Wish/"+api,{
      	params: {
          mb_token:localStorage.mb_token
        }
      }).then((res)=>{
        if(res.data){
          setItemList(res.data.data);
        }
      }).catch((error)=> {
      });
    },[]);
    const addRemove = (it_id) =>{
      const form = new FormData();
      form.append('mb_token',localStorage.mb_token);
      form.append('it_id',it_id);
      axios.post(process.env.api+"Wish/AddRemove",form
      ).then((res)=>{
        Swal.fire(res.data.msg);
        if(api == "List"){
            router.reload();
        }

      })
    }

    return (
      <div className={'storefeed zzimlist'}>
          <ul>
              {itemList.map((val,key) =>(
              <li key={key}>
                  <Link href={"/item?it_id="+val.it_id}>
                      <a>
                        <img
                          src ={
                            val.it_img1 != ''?
                            process.env.domain+'data/item/'+val.it_img1:
                            "/img/no_img.png"
                          }
                        />
                      </a>

                  </Link>
                  {val.it_stock_qty == 0&&
                    <div className={'soldout'}>
                        SOLD OUT
                    </div>
                  }
                  <CheckBox
                    id={"checkBox"+api+val.it_id}
                    defCk={val.wi_check}
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
