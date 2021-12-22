
import SubLayout from '../layout/SubLayout'
import Link from 'next/link'
import React,{useState} from 'react';
import CheckBox from '../layout/CheckBox.js';
import AppBar from '@material-ui/core/AppBar';
import Tabs from '@material-ui/core/Tabs';
import Tab from '@material-ui/core/Tab';
import StoreStory from './storestory'
import StoreNotice from './storenotice'
import StoreItem from './storeitem'
import StoreReview from './storereview'
import StoreQna from './storeqna'
import TabPanel from '../layout/TabPanel'

export default function Store(){
    const [ck ,setCk] = useState(false);
    const [value, setValue] = React.useState(0);
    const handleChange = (event, newValue) => {
      setValue(newValue);


    };
    return (
        <SubLayout>
            <div className={'shop_info'}>
                <div className={'shop_info_div'}>
                    <img src="/img/prof_04.jpg" className={'shop_img'}/>
                    <div>
                        <div>
                            <p className={'shop_name'}>오스빈 스토어</p>
                            <p>안녕하세요 빈티지샵 대표 스토어 오스빈입니다.</p>
                            <div className={'eco_ico'}>
                                <img src="/img/eco_kit2.png"/>
                                친환경 배송키트 사용 판매자입니다!
                            </div>
                        </div>
                        <p className={'follower'}>
                            팔로워<span>51</span>
                        </p>
                    </div>
                    <div className={'ecokit'}>
                        <img src="/img/eco_kit.png"/>
                    </div>
                </div>
                <div className={'store_follow_btn'}>
                    <CheckBox
                      id={"checkBox1"}
                      defCk={false}
                      offEl={
                        <button className={'follow_btn following_btn'}>
                          팔로잉
                        </button>
                      }
                      onEl={
                        <button className={'follow_btn'}>
                          팔로우
                        </button>
                      }
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
                    <StoreStory></StoreStory>
                </TabPanel>
                <TabPanel value={value} index={1}>
                    <StoreNotice></StoreNotice>
                </TabPanel>
                <TabPanel value={value} index={2}>
                    <StoreItem></StoreItem>
                </TabPanel>
                <TabPanel value={value} index={3}>
                    <StoreReview></StoreReview>
                </TabPanel>
                <TabPanel value={value} index={4}>
                    <StoreQna></StoreQna>
                </TabPanel>
            </div>
        </SubLayout>
    )
}
