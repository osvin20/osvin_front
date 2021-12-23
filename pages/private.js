import TitleLayout from '../layout/TitleLayout'
import CusSwitch from '../layout/CusSwitch'
import Link from 'next/link'
import React from 'react';

export default function Private(){

    return (
        <TitleLayout>
            <div className={'pagetit_div'}>
              <h1 className={'page_tit'}>PRIVATE</h1>
            </div>
            <div className={'agreement'}>
              <p className={'agreement_tit extra_bold'}>오스빈 개인정보처리방침</p>
              <div className={'agreement_txt'}>
              오스빈(이하 "회사"라 합니다)은 이용자들의 개인정보보호를 매우 중요시하며, 이용자가 회사의 오스빈 쇼핑몰 서비스(이하 "서비스"라 합니다)를 이용함과 동시에 온라인상에서 회사에 제공한 개인정보가 보호 받을 수 있도록 최선을 다하고 있습니다. 이에 회사는 개인정보보호법에 따라 정보통신서비스제공자가 준수하여야 할 관련 법규상의 개인정보보호 규정을 준수하고 있습니다.<br/>회사는 개인정보 보호정책을 통하여 이용자들이 제공하는 개인정보가 어떠한 용도와 방식으로 이용되고 있으며, 개인정보보호를 위해 어떠한 조치가 취해지고 있는지 알려드립니다.회사는 개인정보 보호정책을 홈페이지 첫 화면에 공개함으로써 이용자들이 언제나 용이하게 보실 수 있도록 조치하고 있습니다.<br/>오스빈의 개인정보처리방침은 다음과 같은 내용을 담고 있습니다.
              </div>
            </div>
        </TitleLayout>
    )
}
