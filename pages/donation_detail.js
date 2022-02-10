import NoneLayout from '../layout/NoneLayout'
import Link from 'next/link'
import {useEffect,useState} from 'react';
import Swal from 'sweetalert2'
import axios from 'axios';

export default function DonationDetail({query}){
  const {wr_id} = query;
  const [doneDtaList, setDoneDtaList] = useState([]);
  useEffect(() => {
    axios.get(process.env.api+'Borad/DonationInfo/'+wr_id
    ).then((res) => {
      if(typeof(res.data.data) == 'object'){
        setDoneDtaList(res.data.data);
      }
      console.log(res.data.data);
    }).catch((error) => {

    });
  },[]);
    return (
      <NoneLayout>
        <div className="donation_img">
          <img src={doneDtaList.bf_file}/>
        </div>
        <div className={'donation_content'}>
          <h2 className={'dona_tit extra_bold'}>{doneDtaList.wr_subject}</h2>
          {/* <p className={'donation_price extra_bold'}>
            기부금액
            <span>1,246,800</span>원
          </p> */}
          <div className={'dona_txt'}>
            {doneDtaList.wr_content}
          </div>
        </div>
      </NoneLayout>
    )
}
DonationDetail.getInitialProps = async({req, query}) => {
  return {query}
}
