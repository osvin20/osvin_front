import TitleLayout from '../layout/TitleLayout'
import Link from 'next/link'
import TabPanel from '../layout/TabPanel'
import React from 'react';
import AppBar from '@material-ui/core/AppBar';
import Tabs from '@material-ui/core/Tabs';
import Tab from '@material-ui/core/Tab';
import HotKeyword from './hotkeyword'
import HotStore from './hotstore'

export default function Search(){
    const [value, setValue] = React.useState(0);
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
              <div className={'search_filter'}>
                <select>
                  <option>상품명</option>
                  <option>스토어명</option>
                  <option>태그</option>
                </select>
                <img src='/img/arrow_10.png'/>
              </div>
              <div className={'search_input'}>
                <input placeholder="검색어를 입력하세요." />
                <img src="/img/search.png"/>
              </div>
            </div>
            <div className={'hothash'}>
                <Link href='/search_result'>
                  <a>
                      # <span>빈티지목걸이</span>
                  </a>
                </Link>
                <Link href='/search_result'>
                  <a>
                      # <span>다이어리</span>
                  </a>
                </Link>
                <Link href='/search_result'>
                  <a>
                      # <span>만년필</span>
                  </a>
                </Link>
                <Link href='/search_result'>
                  <a>
                      # <span>화장대</span>
                  </a>
                </Link>
                <Link href='/search_result'>
                  <a>
                      # <span>엔틱수납장</span>
                  </a>
                </Link>
                <Link href='/search_result'>
                  <a>
                      # <span>클래식</span>
                  </a>
                </Link>
                <Link href='/search_result'>
                  <a>
                      # <span>빈티지드레스</span>
                  </a>
                </Link>
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
