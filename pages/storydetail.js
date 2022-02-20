
import TitleLayout from '../layout/TitleLayout'
import Link from 'next/link'
import {useEffect,useState} from 'react';
import axios from 'axios';
import Swal from 'sweetalert2'

export default function StoreDetail({query}){
  const {wr_id} = query;
  const [story, setStory] = useState([]);
  const imgList = ['bf_file0','bf_file1','bf_file2','bf_file3','bf_file4'];
  useEffect(() =>{
    axios.get(process.env.api+"Store/StoryInfo/"+wr_id,
    ).then((res)=>{
      if(typeof(res.data.data) == "object"){
        setStory(res.data.data);
      }
    }).catch((error)=> {});
  },[]);

    return (
        <TitleLayout>
          <div className={'pagetit_div'}>
            <h1 className={'page_tit'}>STORY</h1>
          </div>
          <div className={'borderfix'}></div>
          <div className={'story_detail'}>
            <div className={'post_content'}>
              <div className={'rv_prof'}>
                <Link href="/userfeed">
                  <a className={'story_info'}>
                    <div className={'story_info_img'}>
                      <img src="/img/prof_04.jpg"/>
                    </div>
                    <div>
                      <p>{story.wr_name}</p>
                      <span>{story.wr_last}</span>
                    </div>
                  </a>
                </Link>
              </div>
              <div className={'post_txt story_content'}>
                {story.wr_content}

                {imgList.map((vals,key) =>(
                  <>
                    {story[vals] != process.env.domain+"data/file/story/" &&
                      <img
                        key={key}
                        src={story[vals]}
                        onError={(e)=>{e.target.src = '/img/no_img.png'}}
                      />
                    }
                  </>
                  ))}
              </div>
            </div>
          </div>

        </TitleLayout>
    )
}
StoreDetail.getInitialProps = async ({ req ,query }) => {
  return {query}
}
