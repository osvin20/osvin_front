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
import Swal from 'sweetalert2'
export default function FollowList(){
    const router = useRouter();
    const {tabnumber,mb_id} = router.query;
    const [pageNumber, setPageNumber] = React.useState(0);
    useEffect(() =>{
      if(typeof(localStorage.mb_token) != "string"){
        Swal.fire("로그인을 해주세요");
        router.push('/login');
      }
        if(typeof tabnumber != "undefined"){
            setPageNumber(Number(tabnumber));
        }
    },[tabnumber]);
    const handleChange = (event, newValue) => {
        setPageNumber(newValue);
    };
    return (
        <TitleLayout>
            <div className={'pagetit_div'}>
              <h1 className={'page_tit'}>FOLLOW</h1>
            </div>
            <div className={'feedcate searchcate'}>
                <AppBar position="static" centerTitle="true">
                <Tabs value={pageNumber} onChange={handleChange} aria-label="simple tabs example">
                    <Tab label="팔로잉" id={"simple-tab-0"} aria-controls={"simple-tabpanel-0"}/>
                    <Tab label="팔로워" id={"simple-tab-1"} aria-controls={"simple-tabpanel-1"} />
                </Tabs>
                </AppBar>
                <TabPanel value={pageNumber} index={0}>
                    <Following mb_id={mb_id} pageNumber={pageNumber}/>
                </TabPanel>
                <TabPanel value={pageNumber} index={1}>
                    <Follower mb_id={mb_id} pageNumber={pageNumber}/>
                </TabPanel>
            </div>
        </TitleLayout>
    )
}
