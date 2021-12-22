
import LoginTheme from '../layout/LoginTheme'
import Link from 'next/link'
import {useRouter} from 'next/router'
import React from 'react';
import AppBar from '@material-ui/core/AppBar';
import Tabs from '@material-ui/core/Tabs';
import Tab from '@material-ui/core/Tab';
import TabPanel from '../layout/TabPanel'

export default function ResultPw(){
    const [value, setValue] = React.useState(0);
    const handleChange = (event, newValue) => {
      setValue(newValue);
    };
    const router = useRouter()
    return (
        <LoginTheme>
            <div className={'login_form join_form find_form'}>
                <img className={'back'} src="/img/arrow_04.png" onClick={() => router.back()}/>
                <h1>FIND ID</h1>
                <div className={'feedcate zzim_cate'}>
                    <AppBar position="static" centerTitle="true">
                    <Tabs value={value} onChange={handleChange} aria-label="simple tabs example">
                        <Tab label="이메일 찾기" id={"simple-tab-0"} aria-controls={"simple-tabpanel-0"}/>
                        <Tab label="비밀번호 찾기" id={"simple-tab-1"} aria-controls={"simple-tabpanel-1"} />
                    </Tabs>
                    </AppBar>
                    <TabPanel value={value} index={0}>
                        <div className={'find_id'}>
                            <p>가입 시 등록한 휴대폰 번호를 입력하면<br/>이메일 주소의 일부를 알려드립니다.</p>
                            <div className={'input_btn input_send'}>
                                <input placeholder='휴대폰 번호를 입력해주세요.'></input>
                                <button>인증번호 발송</button>
                            </div>
                            <div className={'input_btn'}>
                                <input placeholder='인증번호를 입력해주세요.'></input>
                                <button>인증하기</button>
                            </div>
                            <div className={'join_btn'}>
                                <Link href="/result_id">
                                    <a>
                                        <button>
                                            이메일 찾기
                                        </button>
                                    </a>
                                </Link>
                            </div>
                        </div>
                    </TabPanel>
                    <TabPanel value={value} index={1}>
                        <div className={'find_result result_pw'}>
                            <img src="/img/check.png" />
                            <p>새로운 비밀번호를 입력해주세요.</p>
                            <div className={'input_btn'}>
                                <input placeholder='비밀번호를 입력해주세요.'></input>
                            </div>
                            <div className={'input_btn'}>
                                <input placeholder='비밀번호를 재입력해주세요.'></input>
                            </div>
                            <div className={'join_btn'}>
                                <Link href="/login">
                                    <a>
                                        <button>
                                            로그인
                                        </button>
                                    </a>
                                </Link>
                            </div>
                        </div>
                    </TabPanel>
                </div>

            </div>

        </LoginTheme>

    )

}
