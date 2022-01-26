import SubLayout from '../layout/SubLayout'
import Link from 'next/link'
import React from 'react';
import AppBar from '@material-ui/core/AppBar';
import Tabs from '@material-ui/core/Tabs';
import Tab from '@material-ui/core/Tab';
import ViewItem from './viewitem'
import TabPanel from '../layout/TabPanel'
import useHistoryState from '../hook/useHistoryState';

export default function Zzim(){
    const [value, setValue] = useHistoryState(0);
    const handleChange = (event, newValue) => {
      setValue(newValue);
    };
    return (
        <SubLayout>
          <div className={'feedcate zzim_cate'}>
              <AppBar position="static" centerTitle="true">
              <Tabs value={value} onChange={handleChange} aria-label="simple tabs example">
                  <Tab label="찜한 상품" id={"simple-tab-0"} aria-controls={"simple-tabpanel-0"}/>
                  <Tab label="최근 본 상품" id={"simple-tab-1"} aria-controls={"simple-tabpanel-1"} />
              </Tabs>
              </AppBar>
              <TabPanel value={value} index={0}>
                  <ViewItem
                    api={'List'}
                  />
              </TabPanel>
              <TabPanel value={value} index={1}>
                  <ViewItem
                    api={'AgoList'}
                  />
              </TabPanel>
          </div>
        </SubLayout>
    )
}
