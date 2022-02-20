import Link from 'next/link'
import {useEffect,useState} from 'react';
import axios from 'axios';
import Swal from 'sweetalert2'

export default function StoreStory({mb_id,mb_img}){
    const [list ,setList] = useState([]);
    const imgList = ['bf_file0','bf_file1','bf_file2','bf_file3','bf_file4'];
    useEffect(() =>{
      axios.get(process.env.api+"Store/StoryList/"+mb_id
      ).then((res)=>{
        console.log(res.data.data);
        if(typeof(res.data.data) == "object"){
          setList(res.data.data);
        }
      }).catch((error)=> {

      });
    },[]);

    return (
      <ul className={'storestory'}>
        {list.map((val,key) =>(
          <li key={key}>
            <Link href={'/storydetail?wr_id='+val.wr_id}>
              <a>
                <div className={'story_info'}>
                  <div className={'storereview_prof'}>
                    <img
                      src={mb_img}
                      onError={(e)=>{e.target.src = '/img/no_img.png'}}
                    />
                  </div>
                  <div>
                    <p>{val.wr_name}</p>
                    <span>{val.wr_last}</span>
                  </div>
                </div>
                <p className={'story_txt'}>
                  {val.wr_content}
                </p>
                <div className={'story_img'}>
                  {imgList.map((vals,key) =>(
                    <>
                      {val[vals] != process.env.domain+"data/file/story/" &&
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
          </li>
        ))}
      </ul>
    );
    }
