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
          <div className={'borderfix'}></div>
          <div className={'agreement'}>
            <iframe src={process.env.domain+'/agreement.php'} />
          </div>
      </TitleLayout>
    )
}
