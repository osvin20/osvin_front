import TitleLayout from '../layout/TitleLayout'
import Link from 'next/link'

export default function Donation(){
    return (
        <TitleLayout>
            <div className={'pagetit_div'}>
              <h1 className={'page_tit'}>DONATION</h1>
            </div>
            <div className={'borderfix'}></div>
            <ul className={'donation_list'}>
              <li>
                <Link href='/donation_detail'>
                  <a>
                    <div className={'donation_thumb'}>
                      <img src='img/donation3.jpg'/>
                    </div>
                    <p className={'donation_tit'}>
                      오스빈과 함께하는 친환경 기부 캠페인
                    </p>
                  </a>
                </Link>
              </li>
              <li>
                <Link href='/donation_detail'>
                  <a>
                    <div className={'donation_thumb'}>
                      <img src='img/donation2.jpg'/>
                    </div>
                    <p className={'donation_tit'}>오스빈과 함께하는 캠페인</p>
                  </a>
                </Link>
              </li>
              <li>
                <Link href='/donation_detail'>
                  <a>
                    <div className={'donation_thumb'}>
                      <img src='img/donation1.jpg'/>
                    </div>
                    <p className={'donation_tit'}>
                      오스빈과 함께하는 친환경 기부 캠페인
                    </p>
                  </a>
                </Link>
              </li>
              <li>
                <Link href='/donation_detail'>
                  <a>
                    <div className={'donation_thumb'}>
                      <img src='img/donation4.jpg'/>
                    </div>
                    <p className={'donation_tit'}>4월은 지구의 달입니다. 오스빈과 지구를 위한 친환경 캠페인에 동참해보세요.</p>
                  </a>
                </Link>
              </li>
            </ul>
        </TitleLayout>
    )
}
