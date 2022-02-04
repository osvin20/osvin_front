import TitleLayout from '../layout/TitleLayout'
import Link from 'next/link'
import {useEffect,useState} from 'react';
import Swal from 'sweetalert2'
import axios from 'axios';


export default function Youtube(){
    const [ytubeList, setYtubeList] = useState([]);
    useEffect(()=>{
      axios.get(process.env.api+'Borad/YoutubeList'
      ).then((res) => {
        if(typeof(res.data.data) == 'object'){
          setYtubeList(res.data.data);
        }
      }).catch((error) => {

      });
    },[]);
    return (
        <TitleLayout>
            
            <div className={'pagetit_div'}>
              <h1 className={'page_tit'}>YOUTUBE</h1>
            </div>
            <div className={'borderfix'}></div>
            <div className={'youtube_prof'}>
              <div>
                <div className={'youtube_prof_img'}>
                  <img src='img/prof_04.jpg'/>
                </div>오스빈
              </div>
            </div>
            <div className={'upload_txt extra_bold'}>업로드한 &quot;동영상&quot;</div>
            <ul className={'ytb_list'}>
              {ytubeList.map((val, key)=>(
                <li key={key}>
                  <Link href={val.yo_url}>
                    <a>
                      <div className={'ytb_thumb'}>
                        <img src={
                            val.yo_img != ''?
                            val.yo_img:
                            '/img/no_img.png'
                          }
                        />
                      </div>
                      <div>
                        <p className={'ytb_tit'}>
                        역대급 가성비 빈티지샵 로드무역 옷무덤에서 보물찾기
                        </p>
                        <span className={'ytd_date'}>2021-08-20</span>
                      </div>
                    </a>
                  </Link>
                </li>
              ))}
            </ul>
        </TitleLayout>
    )
}
