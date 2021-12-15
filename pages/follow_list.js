import TitleLayout from '../layout/TitleLayout'
import Link from 'next/link'
import React,{useEffect} from 'react';
import AppBar from '@material-ui/core/AppBar';
import Tabs from '@material-ui/core/Tabs';
import Tab from '@material-ui/core/Tab';
import Following from './following'
import Follower from './follower'
import TabPanel from '../layout/TabPanel'
import { useRouter } from 'next/router';

export default function FollowList(){
    const router = useRouter();
    const {tabnumber} = router.query;
    const [pageNumber, setPageNumber] = React.useState(0);
    useEffect(() =>{
        if(typeof tabnumber != "undefined"){
            setPageNumber(Number(tabnumber));
        }
    },[tabnumber]);
    const handleChange = (event, newValue) => {
        setPageNumber(newValue);
    };
    return (
        <TitleLayout>
            <h1 className={'page_tit'}>FOLLOW</h1>
            <div className={'feedcate searchcate'}>
                <AppBar position="static" centerTitle="true">
                <Tabs value={pageNumber} onChange={handleChange} aria-label="simple tabs example">
                    <Tab label="팔로잉" id={"simple-tab-0"} aria-controls={"simple-tabpanel-0"}/>
                    <Tab label="팔로워" id={"simple-tab-1"} aria-controls={"simple-tabpanel-1"} />
                </Tabs>
                </AppBar>
                <TabPanel value={pageNumber} index={0}>
                    <Following/>
                </TabPanel>
                <TabPanel value={pageNumber} index={1}>
                    <Follower/>
                </TabPanel>
            </div>
        </TitleLayout>
    )
}
