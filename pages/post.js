
import TitleLayout from '../layout/TitleLayout'
import Link from 'next/link'
import Slider  from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import OsbinModal from '../layout/OsbinModal';
import ModModal from '../layout/ModModal'
import CheckBox from '../atomic/CheckBox.js';
import { makeStyles } from '@material-ui/core/styles';
import Accordion from '@material-ui/core/Accordion';
import AccordionSummary from '@material-ui/core/AccordionSummary';
import AccordionDetails from '@material-ui/core/AccordionDetails';
import Typography from '@material-ui/core/Typography';
import ExpandMoreIcon from '@material-ui/icons/ExpandMore';
import {useEffect,useState,useRef} from 'react';
import Swal from 'sweetalert2'
import axios from 'axios';

const useStyles = makeStyles((theme) => ({
    root: {
      width: '100%',
    },
    heading: {
      fontSize: theme.typography.pxToRem(15),
      fontWeight: theme.typography.fontWeightRegular,
    },
  }));

export default function Post({query}){
    const {wr_id} = query;
    const [ck ,setCk] = useState(false);
    const [good ,setGood] = useState(false);
    const [wr_cnt ,setWr_cnt] = useState(0);
    const [feed,setFeed] = useState([]);
    const [item,setItem] = useState([]);
    const [wr_content,setWr_content] = useState('');
    const [mb_id,setMb_id] = useState([]);
    const [feedImg,setFeedImg] = useState([{bf_file:"/img/no_img.png"}]);
    const [commentList,setCommentList] = useState([]);
    const [comment_cnt,setComment_cnt] = useState(0);
    const classes = useStyles();
    const [heart,setHeart] = useState(false);
    let settings = {
        dots: true,
        infinite: true,
        speed: 500,
        arrows:false,
        slidesToShow: 1,
        slidesToScroll: 1
    };
    const addRemove = () =>{
      axios.get(process.env.api+"Feed/AddRemoveGood/"+wr_id,{
        params: {
          mb_token:localStorage.mb_token
        }
      }).then((res)=>{
        //Swal.fire(res.data.msg);
        if(res.data.msg == "피드에 좋아요가 되었습니다."){
          setWr_cnt(wr_cnt+1);
          setHeart(true);
          setTimeout(() =>setHeart(false), 400);
        }else {
          setWr_cnt(wr_cnt-1);
        }
      })
    }
    const commentAddRemove = (wr_id) =>{
      axios.get(process.env.api+"Feed/AddRemoveGood/"+wr_id,{
        params: {
          mb_token:localStorage.mb_token
        }
      }).then((res)=>{
        if(res.data.msg == "피드에 좋아요가 되었습니다."){
          setHeart(true);
          setTimeout(() =>setHeart(false), 400);
        }
        getCommentList();
      })
    }
    const commentAdd = () => {
      const form = new FormData()
      form.append('mb_token',localStorage.mb_token);
      form.append('wr_content',wr_content);
      form.append('wr_id',wr_id);
      axios.post(process.env.api+"Feed/CommentAdd",form
      ).then((res)=>{
        Swal.fire(res.data.msg);
        setWr_content('');
        getCommentList();
        setComment_cnt(comment_cnt+1);
        }).catch((error)=>{
      });
    }
    const getCommentList = () => {
      axios.get(process.env.api+"Feed/CommentList/"+wr_id,{
        params: {
          mb_token:localStorage.mb_token
        }
      }).then((res)=>{
        if(res.data.state){
          setCommentList(res.data.data);
        }
      }).catch((error)=> {});
    }

    useEffect(() =>{
      setMb_id(localStorage.mb_id);
      axios.get(process.env.api+"Feed/Info/"+wr_id,{
        params: {
          mb_token:localStorage.mb_token
        }
      }).then((res)=>{
        if(res.data.state){
          setFeed(res.data.data.feed);
          setItem(res.data.data.item)
          setWr_cnt(res.data.data.feed.wr_cnt)
          setComment_cnt(res.data.data.feed.comment_cnt)
          if(res.data.data.feed.cnt > 0){
            setGood(true)
          }
          if(res.data.data.file.length > 0){
            setFeedImg(res.data.data.file)
          }
        }
      }).catch((error)=> {});
      getCommentList();
    },[]);
    return (
        <TitleLayout>
          {heart &&
            <div className='heart_box'>
              <div className='heart'>
              </div>
            </div>
          }
          <div className={'pagetit_div'}>
            <h1 className={'page_tit'}>POST</h1>
          </div>
          <div className={'borderfix'}></div>
          <div className={'post_content'}>
            <div className={'rv_prof'}>
              <Link href={"/userfeed?mb_id="+feed.mb_id}>
                <a className={'user_prof_div'}>
                  <div className={'user_prof_img'}>
                    <img
                      src={feed.wr_img}
                      onError={(e)=>{e.target.src =  "/img/no_img.png"}}
                    />
                  </div>
                  <p>{feed.wr_name}</p>
                </a>
              </Link>
              <p className={'rv_date'}>{feed.wr_datetime}
                {feed.mb_id == mb_id&&
                  <OsbinModal
                    title=""
                    bnt_title =""
                    dir_label ="네"
                    btn_label ="아니오"
                    class_name={"rv_mod_btn"}
                    modal_id={"review_detail_modal"}
                  >
                    <ModModal wr_id={wr_id}/>
                  </OsbinModal>
                }
              </p>
            </div>
            <div className={'item_pic'}>
              <Slider {...settings}>
                {feedImg.map((val,key) =>(
                  <div className={'content_box'} key={key}>
                    <img
                      src={val.bf_file}
                      onError={(e)=>{e.target.src =  "/img/no_img.png"}}
                    />
                  </div>
                ))}

              </Slider>
            </div>
            <ul className={'post_info'}>
              <li>
                <p>스토어명</p>
                <Link href="/store">
                  <a>오스빈스토어</a>
                </Link>
              </li>
              <li>
                <p>상품명</p>
                <Link href="/item">
                  <a>{item.it_name}</a>
                </Link>
              </li>
            </ul>
            <div className={'post_txt'}>
              {feed.wr_content}
            </div>
            <div className={'post_react'}>
              <div>
                <CheckBox
                  id={"checkBox4"}
                  defCk={good}
                  offEl={
                    <div className={'comment_heart'}>
                      <img src="/img/heart5.png"/>
                    </div>
                  }
                  onEl={
                    <div className={'comment_heart'}>
                      <img src="/img/heart6.png"/>
                    </div>
                  }
                  onchangeHandler={addRemove}
                />
                <p>{wr_cnt}</p>
              </div>
              <div>
                <img src="/img/chat.png"/>
                <p>{comment_cnt}</p>
              </div>
            </div>
          </div>
          <div className={'post_comment'}>
            <ul>
              {commentList.map((val,key) =>(
                <li key={key}>
                  <div className={'comment_div'}>
                    <div className={'user_comment'}>
                      <Link href={'/userfeed?mb_id='+val.mb_id}>
                        <a className={'comment_prof'}>
                          <img
                            src={val.mb_img}
                            onError={(e)=>{e.target.src = "/img/no_img.png"}}
                          />
                        </a>
                      </Link>
                      <div>
                        <div className={'comment'}>
                          <Link href='/userfeed'>
                            <a>
                              {val.wr_name}
                            </a>
                          </Link>
                          <Link href='/comment'>
                            <a className={'comment_dir'}>
                              {val.wr_content}
                            </a>
                          </Link>
                        </div>
                        <div className={'comment_info'}>
                          <p className={'comment_date'}>{val.wr_datetime}</p>
                          <p className={'comment_like'}>
                            좋아요 {val.cnt}개
                          </p>
                        </div>
                      </div>
                    </div>
                    <CheckBox
                      id={"checkBoxLike"+key}
                      defCk={val.mb_cnt}
                      offEl={
                        <div className={'comment_heart'}>
                          <img src="/img/heart5.png"/>
                        </div>
                      }
                      onEl={
                        <div className={'comment_heart'}>
                          <img src="/img/heart6.png"/>
                        </div>
                      }
                      onchangeHandler={()=>commentAddRemove(val.wr_id)}
                    />
                  </div>
                </li>
              ))}
            </ul>
            <div className={'comment_input'}>
              <img
                src={feed.mb_img}
                onError={(e)=>{e.target.src =  "/img/no_img.png"}}
              />
              <div>
                <textarea
                  placeholder="댓글 달기..."
                  value={wr_content}
                  onChange={e=>setWr_content(e.target.value)}
                />
                <button
                  className={'extra_bold'}
                  children={"게시"}
                  onClick={commentAdd}
                />
              </div>
            </div>
          </div>
        </TitleLayout>
    )
}
Post.getInitialProps = async ({ req ,query }) => {
  return {query}
}
