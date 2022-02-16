
import SubLayout from '../layout/SubLayout'
import Link from 'next/link'
import React,{useEffect} from 'react';
import AppBar from '@material-ui/core/AppBar';
import Tabs from '@material-ui/core/Tabs';
import Tab from '@material-ui/core/Tab';
import StoreFeed from './storefeed'
import MonthFeed from './monthfeed'
import AllFeed from './allfeed'
import OsbinFeed from './osbinfeed'
import TabPanel from '../layout/TabPanel';
import { useSelector, useDispatch } from 'react-redux';
import {setTabNumber} from '../store/modules/tab_number';
import { useRouter } from 'next/router';

export default function Feed(){
    const router = useRouter();
    const dispatch = useDispatch();
    const tab_number = useSelector(({tab_number}) => tab_number.value);
    const [pageNumber, setPageNumber] = React.useState(0);
    useEffect(() =>{
        if(tab_number != null){
          setPageNumber(tab_number);
        }
    },[tab_number]);
    const handleChange = (event, newValue) => {
        setPageNumber(newValue);
        dispatch(setTabNumber(newValue));
    };
    return (
        <SubLayout>
            <div className={'feedcate'}>
                <AppBar position="static" centerTitle="true">
                <Tabs value={pageNumber} onChange={handleChange} aria-label="simple tabs example">
                    <Tab label="판매스토어 피드" id={"simple-tab-0"} aria-controls={"simple-tabpanel-0"}/>
                    <Tab label="월간 인기피드" id={"simple-tab-1"} aria-controls={"simple-tabpanel-1"} />
                    <Tab label="전체 피드" id={"simple-tab-2"} aria-controls={"simple-tabpanel-2"} />
                    <Link href='/store'>
                      <a className={'osvin_dir'}>오스빈피드</a>
                    </Link>
                </Tabs>
                </AppBar>
                <TabPanel value={pageNumber} index={0}>
                    <StoreFeed></StoreFeed>
                </TabPanel>
                <TabPanel value={pageNumber} index={1}>
                    <MonthFeed></MonthFeed>
                </TabPanel>
                <TabPanel value={pageNumber} index={2}>
                    <AllFeed></AllFeed>
                </TabPanel>
                <TabPanel value={pageNumber} index={3}>
                    <OsbinFeed></OsbinFeed>
                </TabPanel>
            </div>
        </SubLayout>
    )
}
