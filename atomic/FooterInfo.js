import {useEffect,useState} from 'react';
import axios from 'axios';

export default function FooterInfo(){
  const [info ,setInfo] = useState([]);
  useEffect(() => {
    axios.get(process.env.api+'Shop/Info',{
    }).then((res) => {
      setInfo(res.data.data);
    }).catch((error) => {

    });
  },[])
  return (
      <div className={'footerinfo'}>
        <div className={"company_info"}>
          <div>
            <p>대표자</p>
            <span>{info.de_admin_company_owner} | {info.de_admin_company_name}</span>
          </div>
          <div>
            <p>사업자등록번호</p>
            <span>{info.de_admin_company_saupja_no}</span>
          </div>
          <div>
            <p>통신판매업번호</p>
            <span>{info.de_admin_tongsin_no}</span>
          </div>
          <div>
            <p>주소</p>
            <span>{info.de_admin_company_addr}</span>
          </div>
          {/* <div>
            <p>주소(이커머스 사업부)</p>
            <span>경기도 고양시 킨텍스로 255 일산 디엠시티 스카이뷰 104동 1410호</span>
          </div> */}
          <div>
            <p>고객센터</p>
            <span>{info.de_admin_company_tel}</span>
          </div>

        </div>
      </div>
  )
}
