import TitleLayout from '../layout/TitleLayout'
import CusSwitch from '../layout/CusSwitch'
import Link from 'next/link'
import React from 'react';

export default function Agreement(){

    return (
        <TitleLayout>
            <div className={'pagetit_div'}>
              <h1 className={'page_tit'}>AGREEMENT</h1>
            </div>
            <div className={'agreement'}>
              <p className={'agreement_tit extra_bold'}>오스빈 이용약관</p>
              <div className={'agreement_txt'}>
              제1조(목적)<br/>
              이 약관은 주식회사 오스빈이 운영하는 “오스빈”(이하 “몰”이라 한다)에서 제공하는 인터넷 관련 서비스(이하 “서비스”라 한다)를 이용함에 있어 사이버 몰과 이용자의 권리․의무 및 책임사항을 규정함을 목적으로 합니다.
              </div>
            </div>
        </TitleLayout>
    )
}
