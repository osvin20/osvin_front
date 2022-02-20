import TitleLayout from '../layout/TitleLayout'
import Link from 'next/link'
import TabPanel from '../layout/TabPanel'
import AppBar from '@material-ui/core/AppBar';
import Tabs from '@material-ui/core/Tabs';
import Tab from '@material-ui/core/Tab';
import HotKeyword from './hotkeyword'
import HotStore from './hotstore'
import useHistoryState from '../hook/useHistoryState';

import {useEffect,useState} from 'react';
import Swal from 'sweetalert2'
import axios from 'axios';

export default function Search(){
    const [value, setValue] = useHistoryState(0);
    const [preList ,setPreList] = useState([]);
    const [text,setText] = useState([]);

    useEffect(() =>{
      axios.get(process.env.api+"Popular/PreList"
      ).then((res)=>{
        if(typeof(res.data.data) == "object"){
          setPreList(res.data.data);
        }
      }).catch((error)=> {

      });
    },[]);

    const handleChange = (event, newValue) => {
      setValue(newValue);
    };
    return (
        <TitleLayout>
          <div className={'pagetit_div'}>
            <h1 className={'page_tit'}>SEARCH</h1>
          </div>
          <div className={'borderfix'}></div>
          <div className={'search_div'}>
            {/* <div className={'search_filter'}>
              <select>
                <option>상품명</option>
                <option>스토어명</option>
                <option>태그</option>
              </select>
              <img src='/img/arrow_10.png'/>
            </div> */}
            <div className={'search_input'}>
              <input
                placeholder="검색어를 입력하세요."
                value={text}
                onChange={e=>setText(e.target.value)}
              />
              <Link href={'/search_result?it_shop_memo='+text}>
                <a>
                  <img src="/img/search.png"/>
                </a>
              </Link>
            </div>
          </div>
          <div className={'hothash'}>
            {preList.map((val,key) =>(
              <Link href={'/search_result?it_shop_memo='+val.pp_word} key={key}>
                <a>
                  # <span>{val.pp_word}</span>
                </a>
              </Link>
            ))}


          </div>
          <div className={'feedcate searchcate'}>
            <AppBar position="static" centerTitle="true">
              <Tabs value={value} onChange={handleChange} aria-label="simple tabs example">
                <Tab label="인기 검색어" id={"simple-tab-0"} aria-controls={"simple-tabpanel-0"}/>
                <Tab label="인기 스토어" id={"simple-tab-1"} aria-controls={"simple-tabpanel-1"} />
              </Tabs>
            </AppBar>
            <TabPanel value={value} index={0}>
              <HotKeyword></HotKeyword>
            </TabPanel>
            <TabPanel value={value} index={1}>
              <HotStore></HotStore>
            </TabPanel>
          </div>
        </TitleLayout>
    )
}
