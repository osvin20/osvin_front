
import SubLayout from '../layout/SubLayout'
import Link from 'next/link'
import React,{useEffect} from 'react';
import AppBar from '@material-ui/core/AppBar';
import Tabs from '@material-ui/core/Tabs';
import Tab from '@material-ui/core/Tab';
import AllItem from './allitem';

import { useRouter } from 'next/router';

function TabPanel(props) {
    const { children, value, index, ...other } = props;
    return (
      <div
        role="tabpanel"
        hidden={value !== index}
        id={`simple-tabpanel-${index}`}
        aria-labelledby={`simple-tab-${index}`}
        {...other}
      >
      {children}
      </div>
    );
  }

export default function ItemList(){

    const router = useRouter();
    const {tabnumber} = router.query;
    useEffect(() =>{
        if(typeof tabnumber != "undefined"){
            setValue(Number(tabnumber));    
        }
    },[tabnumber]);
    const [value, setValue] = React.useState(0);
    const handleChange = (event, newValue) => {
      setValue(newValue);
    };
    return (
        <SubLayout>
            <div className={'feedcate itemcate'}>
          <AppBar position="static" centerTitle="true">
            <Tabs value={value} onChange={handleChange} aria-label="simple tabs example">
              <Tab label="전체" id={"simple-tab-0"} aria-controls={"simple-tabpanel-0"}/>
              <Tab label="의류" id={"simple-tab-1"} aria-controls={"simple-tabpanel-1"} />
              <Tab label="홈웨어" id={"simple-tab-2"} aria-controls={"simple-tabpanel-2"} />
              <Tab label="웨딩" id={"simple-tab-3"} aria-controls={"simple-tabpanel-3"} />
              <Tab label="패션잡화" id={"simple-tab-0"} aria-controls={"simple-tabpanel-4"}/>
              <Tab label="쥬얼리/시계" id={"simple-tab-1"} aria-controls={"simple-tabpanel-5"} />
              <Tab label="소품/인형" id={"simple-tab-2"} aria-controls={"simple-tabpanel-6"} />
              <Tab label="카메라/음향" id={"simple-tab-3"} aria-controls={"simple-tabpanel-7"} />
              <Tab label="문구/팬시" id={"simple-tab-0"} aria-controls={"simple-tabpanel-8"}/>
              <Tab label="가구" id={"simple-tab-1"} aria-controls={"simple-tabpanel-9"} />
              <Tab label="패브릭" id={"simple-tab-2"} aria-controls={"simple-tabpanel-10"} />
            </Tabs>
          </AppBar>
        <TabPanel value={value} index={0}>
            <AllItem></AllItem>
        </TabPanel>
      </div>
        </SubLayout>
    )
}
