import {useEffect,useState,useRef } from 'react';
import axios from 'axios';
import Swal from 'sweetalert2'
import { useRouter } from "next/router";

export function loginCheckFun(check,router){


  if(typeof(localStorage.mb_token) != "string" && check == true){
    Swal.fire("로그인을 해주세요");
    router.push('/login');
    return;
  }
  if(typeof(localStorage.mb_id) == "string"){
    axios.get(process.env.api+"/Member/Token",{
      params: {
        mb_id:localStorage.mb_id
      }
    }).then((res)=>{
      console.log(res.data);
      if(localStorage.mb_token != res.data.mb_token){
        localStorage.clear();
        Swal.fire("로그인을 해주세요");
        router.push('/login');
      }
    }).catch((error)=> {
    });
  }
}
