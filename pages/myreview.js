import TitleLayout from '../layout/TitleLayout'
import Link from 'next/link'
import React from 'react';
import AppBar from '@material-ui/core/AppBar';
import Tabs from '@material-ui/core/Tabs';
import Tab from '@material-ui/core/Tab';
import ReviewItem from './reviewitem'
import ReviewList from './reviewlist'
import TabPanel from '../layout/TabPanel'

export default function MyReview(){
    const [value, setValue] = React.useState(0);
    const handleChange = (event, newValue) => {
      setValue(newValue);
    };
    return (
        <TitleLayout>
            <h1 className={'page_tit'}>MY REVIEW</h1>
            <div className={'feedcate zzim_cate'}>
                <AppBar position="static" centerTitle="true">
                <Tabs value={value} onChange={handleChange} aria-label="simple tabs example">
                    <Tab label="리뷰 작성" id={"simple-tab-0"} aria-controls={"simple-tabpanel-0"}/>
                    <Tab label="리뷰 내역" id={"simple-tab-1"} aria-controls={"simple-tabpanel-1"} />
                </Tabs>
                </AppBar>
                <TabPanel value={value} index={0}>
                    <ReviewItem></ReviewItem>
                </TabPanel>
                <TabPanel value={value} index={1}>
                    <ReviewList></ReviewList>
                </TabPanel>
            </div>
        </TitleLayout>
    )
}
