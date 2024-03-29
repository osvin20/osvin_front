
import SubLayout from '../layout/SubLayout'
import Link from 'next/link'
import AppBar from '@material-ui/core/AppBar';
import Tabs from '@material-ui/core/Tabs';
import Tab from '@material-ui/core/Tab';
import ItemBox from '../atomic/ItemBox';
import {useEffect,useState} from 'react';
import { useRouter } from 'next/router';
import axios from 'axios';
import { useSelector, useDispatch } from 'react-redux';
import useHistoryState from '../hook/useHistoryState';
import {setTabNumber} from '../store/modules/tab_number';

function ItemList({query}){
    const {ca_id} = query;
    const [cata,setCata] = useHistoryState(ca_id);
    const [cataList,setCateList] = useState([]);
    const [itemList,setItemList] = useState([]);
    const [value, setValue] = useState(0);
    const handleChange = (event, newValue) => {
      setValue(newValue);
      if(newValue === 0){
        setCata(ca_id);
      }else{
        setCata(cataList[newValue-1].ca_id)
      }
    };
    useEffect(() =>{
      axios.get(process.env.api+"Item/List",{
      	params: {
          ca_id:cata
        }
      }).then((res)=>{
        if(res.data){
          setItemList(res.data.data);
        }
        window.scrollTo(0,0)
      }).catch((error)=> {

      });

    },[cata]);
    useEffect(() =>{

      axios.get(process.env.api+"Cate/List",{
      	params: {
          ca_id:ca_id
        }
      }).then((res)=>{
        if(res.data){
          setCateList(res.data.data);
        }
        if(value != 0){
          setCata(res.data.data[value-1].ca_id)
        }

        if(res.data.data.findIndex(i => i.ca_id == cata) !== -1){
          setValue(res.data.data.findIndex(i => i.ca_id == cata)+1)
        }else {
          setValue(0)
        }


      }).catch((error)=> {

      });
    },[]);

    return (
      <SubLayout historyScroll={true}>
          <div className={'feedcate itemcate'}>
            <AppBar position="static" centerTitle="true">
              <Tabs value={value} onChange={handleChange}>
                <Tab label="전체"/>
                {cataList.map((val,key) =>(
                  <Tab
                    key = {key}
                    label={val.ca_name}
                  />
                ))}
              </Tabs>
            </AppBar>
            <TabPanel value={value} index={value}>
                <ItemBox
                  list={itemList}
                />
            </TabPanel>
          </div>
      </SubLayout>
    )
}
ItemList.getInitialProps = async ({ req ,query }) => {
  return {query}
}

export default ItemList;


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
