import LoginTheme from '../layout/LoginTheme'
import Link from 'next/link'
import AppBar from '@material-ui/core/AppBar';
import Tabs from '@material-ui/core/Tabs';
import Tab from '@material-ui/core/Tab';
import TabPanel from '../layout/TabPanel';
import OsbinModal from "../layout/OsbinModal";
import { useRouter } from "next/router";
import {useEffect,useState,useRef } from 'react';
import axios from 'axios';
import Swal from 'sweetalert2'
import useHistoryState from '../hook/useHistoryState';
export default function Find(){
    const [value, setValue] = useHistoryState(0);
    const handleChange = (event, newValue) => {
      setValue(newValue);
    };
    const smsAuth = () =>{
      const form = new FormData();
      form.append('mb_hp',mb_hp.value);
      axios.post(process.env.api+"Member/SmsAuth",form
      ).then((res)=>{
        Swal.fire(res.data.msg);
      }).catch((error)=> {

      });
    }
    const findId = () =>{
      const form = new FormData();
      form.append('mb_hp',mb_hp.value);
      form.append('mb_auth',mb_auth.value);
      axios.post(process.env.api+"Member/FindId",form
      ).then((res)=>{
        Swal.fire(res.data.msg);
        if(res.data.state){
          router.replace("/result_id?mb_id="+res.data.data);
        }
      }).catch((error)=> {

      });
    }
    const findPassWord = () =>{
      const form = new FormData();
      form.append('mb_hp',mb_hp.value);
      form.append('mb_auth',mb_auth.value);
      form.append('mb_password',mb_password.value);
      form.append('mb_password_ck',mb_password_ck.value);
      form.append('mb_id',mb_id.value);
      axios.post(process.env.api+"Member/FindPassWord",form
      ).then((res)=>{
        Swal.fire(res.data.msg);
        if(res.data.state){
          router.replace("/login");
        }
      }).catch((error)=> {

      });
    }
    const useChange = (init) =>{
      const [value,setValue] = useState(init);
      const onChange = (e) =>{
        setValue(e.target.value);
      }
      return {onChange,value}
    }
    const mb_hp = useChange('');
    const mb_auth = useChange('');
    const mb_id = useChange('');
    const mb_password = useChange('');
    const mb_password_ck = useChange('');

    const router = useRouter()
    return (
        <LoginTheme>
          <div className={'login_form join_form find_form'}>
            <img className={'back'} src="/img/arrow_04.png" onClick={() => router.back()}/>
            <h1>FIND ID</h1>
            <div className={'feedcate zzim_cate'}>
              <AppBar position="static" centerTitle="true">
                <Tabs value={value} onChange={handleChange} aria-label="simple tabs example">
                  <Tab label="????????? ??????" id={"simple-tab-0"} aria-controls={"simple-tabpanel-0"}/>
                  <Tab label="???????????? ??????" id={"simple-tab-1"} aria-controls={"simple-tabpanel-1"} />
                </Tabs>
              </AppBar>
              <TabPanel value={value} index={0}>
                <div className={'find_id'}>
                  <p>?????? ??? ????????? ????????? ????????? ????????????<br/>????????? ????????? ??????????????????.</p>
                  <div className={'input_btn input_send'}>
                    <input placeholder='????????? ????????? ??????????????????.' {...mb_hp}></input>
                    <div className="osbinModal" onClick={smsAuth}>
                      <span>???????????? ??????</span>
                    </div>
                  </div>
                  <div className={'input_btn'}>
                    <input placeholder='??????????????? ??????????????????.' {...mb_auth}></input>
                  </div>
                  <div className={'join_btn'}>
                    <a onClick={findId}>
                      <button>
                        ????????? ??????
                      </button>
                    </a>
                  </div>
                </div>
              </TabPanel>
              <TabPanel value={value} index={1}>
                <div className={'find_id'}>
                  <p>?????? ??? ????????? ???????????? ????????? ????????? ????????????<br/>????????? ??????????????? ???????????? ??? ????????????.</p>
                  <div className={'input_btn'}>
                    <input placeholder='????????? ????????? ??????????????????.' {...mb_id}></input>
                  </div>
                  <div className={'input_btn input_send'}>
                    <input placeholder='????????? ????????? ??????????????????.' {...mb_hp}></input>
                    <div className="osbinModal" onClick={smsAuth}>
                      <span>???????????? ??????</span>
                    </div>
                  </div>
                  <div className={'input_btn'}>
                    <input placeholder='??????????????? ??????????????????.' {...mb_auth}></input>
                  </div>
                  <div className={'input_btn'}>
                    <input placeholder='??? ??????????????? ??????????????????.' {...mb_password} type='password'></input>
                  </div>
                  <div className={'input_btn'}>
                    <input placeholder='??? ??????????????? ??????????????????.' type='password' {...mb_password_ck}></input>
                  </div>
                  <div className={'join_btn'}>
                    <a onClick={findPassWord}>
                      <button>
                        ???????????? ??????
                      </button>
                    </a>
                  </div>
                </div>
              </TabPanel>
            </div>
          </div>
        </LoginTheme>

    )

}
