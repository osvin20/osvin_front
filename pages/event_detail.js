import TitleLayout from "../layout/TitleLayout";
import Link from "next/link";
import React from "react";

import {useEffect,useState} from 'react';
import Swal from 'sweetalert2'
import axios from 'axios';

function EventDetail({query}) {
  const {ev_id} = query;
  const [evDetail, setEvDetail] = useState([]);
  useEffect(() =>{
    axios.get(process.env.api+"Borad/BoradEventInfo/"+ev_id,{
    }
      ).then((res)=>{
        if(typeof(res.data.data) == "object"){
          setEvDetail(res.data.data);
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
          {evDetail.ev_subject}
        </p>
        <div className={'event_date'}>
          {evDetail.ev_time}
        </div>
        <div className={'event_txt'}>
          <img src={
            evDetail.ev_img != ''?
            evDetail.ev_img:
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
