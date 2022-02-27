
import SubLayout from '../layout/SubLayout'
import Link from 'next/link'
import CheckBox from '../atomic/CheckBox.js';
import AppBar from '@material-ui/core/AppBar';
import Tabs from '@material-ui/core/Tabs';
import Tab from '@material-ui/core/Tab';
import StoreStory from './storestory'
import StoreNotice from './storenotice'
import StoreItem from './storeitem'
import StoreReview from './storereview'
import StoreQna from './storeqna'
import TabPanel from '../layout/TabPanel'
import useHistoryState from '../hook/useHistoryState';
import {useEffect,useState} from 'react';
import {useRouter} from 'next/router'
import axios from 'axios';
import Swal from 'sweetalert2'

export default function Store({query}){
  const {mb_id} = query;
  const [ck ,setCk] = useState(false);
  const [value, setValue] = useHistoryState(0);
  const [member, setMember] = useState([]);
  const router = useRouter();
  const handleChange = (event, newValue) => {
    setValue(newValue);
  };
  const addRemoveFollow = () =>{
    const form = new FormData()
    form.append('to_mb_id',mb_id);
    form.append('mb_token',localStorage.mb_token);
    axios.post(process.env.api+"Feed/AddRemoveFollow",form
    ).then((res)=>{
      Swal.fire(res.data.msg);
    })
  }
  useEffect(() =>{
    if(mb_id == ''){
      Swal.fire("올바른접근이 아닙니다.");
      router.back();
    }
    axios.get(process.env.api+"Store/Info/"+mb_id,{
      params: {
        mb_token:localStorage.mb_token
      }
    }).then((res)=>{
      if(res.data.state){
        setMember(res.data.data);
      }else {
        Swal.fire("올바른접근이 아닙니다.");
        router.back();
      }

    }).catch((error)=> {

    });
  },[]);
  return (
    <SubLayout>
      <div className={'shop_info'}>
        <div className={'shop_info_div'}>
          <img
            src={member.mb_img}
            className={'shop_img'}
            onError={(e)=>{e.target.src = '/img/no_img.png'}}
          />
          <div>
            <div>
              <p className={'shop_name'}>
                {member.mb_nick}
              </p>
              <p>{member.mb_memo}</p>
              <div className={'eco_ico'}>
                {/* <img src="/img/eco_kit2.png"/>
                친환경 배송키트 사용 판매자입니다! */}
              </div>
            </div>
            <p className={'follower'}>
              팔로워<span>{member.follow_cnt}</span>
            </p>
          </div>
          {/* <div className={'ecokit'}>
            <img src="/img/eco_kit.png"/>
          </div> */}
        </div>
        <div className={'store_follow_btn'}>
          <CheckBox
            id={"checkBox1"}
            defCk={member.followerCk}
            offEl={
              <button className={'follow_btn'}>
                팔로우
              </button>
            }
            onEl={
              <button className={'follow_btn following_btn'}>
                팔로잉
              </button>
            }
            onchangeHandler={addRemoveFollow}
          />
        </div>
      </div>
      <div className={'feedcate storecate'}>
        <AppBar position="static" centerTitle="true">
          <Tabs value={value} onChange={handleChange} aria-label="simple tabs example">
            <Tab label="스토리" id={"simple-tab-0"} aria-controls={"simple-tabpanel-0"}/>
            <Tab label="공지사항" id={"simple-tab-1"} aria-controls={"simple-tabpanel-1"} />
            <Tab label="판매상품" id={"simple-tab-2"} aria-controls={"simple-tabpanel-2"} />
            <Tab label="리뷰보기" id={"simple-tab-3"} aria-controls={"simple-tabpanel-3"} />
            <Tab label="Q&A" id={"simple-tab-3"} aria-controls={"simple-tabpanel-3"} />
          </Tabs>
        </AppBar>
        <TabPanel value={value} index={0}>
          <StoreStory
            mb_id={mb_id}
            mb_img={member.mb_img}
          />
        </TabPanel>
        <TabPanel value={value} index={1}>
          <StoreNotice mb_id={mb_id}></StoreNotice>
        </TabPanel>
        <TabPanel value={value} index={2}>
          <StoreItem mb_id={mb_id}></StoreItem>
        </TabPanel>
        <TabPanel value={value} index={3}>
          <StoreReview mb_id={mb_id}></StoreReview>
        </TabPanel>
        <TabPanel value={value} index={4}>
          <StoreQna mb_id={mb_id}></StoreQna>
        </TabPanel>
      </div>
    </SubLayout>
  )
}
Store.getInitialProps = async ({ req ,query }) => {
  return {query}
}
