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
            <div className={'borderfix'}></div>
            <div className={'agreement'}>
              <iframe src={process.env.domain+'/privacy.php'} />
            </div>
        </TitleLayout>
    )
}
