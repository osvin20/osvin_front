import SubLayout from '../layout/SubLayout'
import React from 'react';
import AppBar from '@material-ui/core/AppBar';
import Tabs from '@material-ui/core/Tabs';
import Tab from '@material-ui/core/Tab';

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

export default function TapTest(){
  const [value, setValue] = React.useState(0);
  const handleChange = (event, newValue) => {
    setValue(newValue);
  };
  return (
    <SubLayout>
      <AppBar position="static" centerTitle="true">
        <Tabs value={value} onChange={handleChange} aria-label="simple tabs example">
          <Tab label="판매스토어 피드" id={"simple-tab-0"} aria-controls={"simple-tabpanel-0"}/>
          <Tab label="월간 인기피드" id={"simple-tab-1"} aria-controls={"simple-tabpanel-1"} />
          <Tab label="전체 피드" id={"simple-tab-2"} aria-controls={"simple-tabpanel-2"} />
          <Tab label="오스빈 피드" id={"simple-tab-3"} aria-controls={"simple-tabpanel-3"} />
        </Tabs>
      </AppBar>
      <TabPanel value={value} index={0}>
        판매스토어 피드
      </TabPanel>
      <TabPanel value={value} index={1}>
        월간 인기피드
      </TabPanel>
      <TabPanel value={value} index={2}>
        전체 피드
      </TabPanel>
      <TabPanel value={value} index={3}>
        오스빈 피드
      </TabPanel>
    </SubLayout>
  );
}