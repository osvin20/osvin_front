import Link from 'next/link'
import {useEffect,useState} from 'react';
import axios from 'axios';
import Swal from 'sweetalert2'


export default function StoreReview({mb_id}){
  const [list ,setList] = useState([]);
  const imgList = ['bf_file0','bf_file1','bf_file2','bf_file3','bf_file4'];
  useEffect(() =>{
    axios.get(process.env.api+"Store/FeedList/"+mb_id
    ).then((res)=>{

      if(typeof(res.data.data) == "object"){
        setList(res.data.data);
      }
    }).catch((error)=> {

    });
  },[]);
    return (
    <ul className={'reviewlist storereview'}>
      {list.map((val,key) =>(
        <li>
          <Link href='/userfeed'>
            <a className={'storereview_img'}>
              <div className={'storereview_prof'}>
                <img
                  src={val.mb_img}
                  onError={(e)=>{e.target.src = '/img/no_img.png'}}
                />
              </div>
              <div>
                <p className={'rl_name'}>{val.wr_name}</p>
                <p className={'rl_shop'}>{val.wr_last}</p>
              </div>
            </a>
          </Link>
          <Link href={'/post?wr_id='+val.wr_id}>
            <a>
              <p className={'review_txt'}>
                {val.wr_content}
              </p>
              <div className={'review_img'}>
                {imgList.map((vals,key) =>(
                  <>
                    {val[vals] != process.env.domain+"data/file/feed/" &&
                      <div key={key}>
                        <img
                          key={key}
                          src={val[vals]}
                          onError={(e)=>{e.target.src = '/img/no_img.png'}}
                        />
                      </div>
                    }
                  </>
                ))}
              </div>
            </a>
          </Link>
          <Link href={'/item?it_id='+val.it_id}>
            <a>
              <div className={'storereview_info'}>
                <img
                  src={process.env.domain+'data/item/'+val.it_img1}
                  onError={(e)=>{e.target.src = '/img/no_img.png'}}

                />
                <div>
                  <p>{val.it_name}</p>
                  <p className={'extra_bold'}>{val.it_price_text}원</p>
                </div>
              </div>
            </a>
          </Link>
        </li>
      ))}
    </ul>
    );
}
