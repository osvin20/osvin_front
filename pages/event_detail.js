import TitleLayout from "../layout/TitleLayout";
import Link from "next/link";
import React from "react";

import {useEffect,useState} from 'react';
import Swal from 'sweetalert2'
import axios from 'axios';

function EventDetail({query}) {
  const {ev_id} = query;
  const [evList, setEvList] = useState([]);
  useEffect(() =>{
    axios.get(process.env.api+"Borad/BoradEventInfo/1643189844",{
    }
      ).then((res)=>{
        if(typeof(res.data.data) == "object"){
          console.log(res.data.data)
          setEvList(res.data.data);
      }
      }).catch((error)=> {

      });
  },[]);
  return (
    <TitleLayout>
      <div className={'pagetit_div'}>
        <h1 className={'page_tit'}>EVENT</h1>
      </div>
      <div className={'borderfix'}>
      </div>
      <div className={'event_div'}>
        <p className={'event_tit'}>
          {evList.ev_subject}
        </p>
        <div className={'event_date'}>
          {evList.ev_time}
        </div>
        <div className={'event_txt'}>
          <img src={
            evList.ev_img != ''?
            evList.ev_img:
            "/img/no_img.png"
            }
            />
        </div>
      </div>
    </TitleLayout>
  );
}
EventDetail.getInitialProps = async ({ req ,query }) => {
  return {query}
}
export default EventDetail;
