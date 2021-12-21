
import TitleLayout from '../layout/TitleLayout'
import Link from 'next/link'

export default function Point(){
    return (
        <TitleLayout>
            <div className={'pagetit_div'}>
              <h1 className={'page_tit'}>POINT</h1>
            </div>
            <div className={'point_div'}>
                <div className={'pointbox'}>
                    <div>
                        <p className={'point'}>
                            보유포인트
                            <img src="img/point2.png"/>
                        </p>
                        <p className={'point_bold'}>820P</p>
                    </div>
                    <div>
                        <p>당월 소멸예정포인트</p>
                        <p>70P</p>
                    </div>
                </div>
            </div>
            <div className={'point_list'}>
                <p>
                    포인트 내역
                    <span>
                        최근 3개월 내역까지 노출
                    </span>
                </p>
                <ul>
                    <li>
                        <div>
                            <p>
                                <span>[오스빈 스토어]</span> 주문 적립
                            </p>
                            <p className={'point_date'}>2021-08-20</p>
                        </div>
                        <p className={'point_bold'}>+170</p>
                    </li>
                    <li>
                        <div>
                            <p>
                                <span>[오스빈 스토어]</span> 주문 적립
                            </p>
                            <p className={'point_date'}>2021-08-20</p>
                        </div>
                        <p className={'point_bold'}>+51</p>
                    </li>
                    <li>
                        <div>
                            <p>
                                <span>[오스빈 스토어]</span> 주문 적립
                            </p>
                            <p className={'point_date'}>2021-08-20</p>
                        </div>
                        <p className={'point_bold'}>-17</p>
                    </li>
                </ul>
            </div>
        </TitleLayout>
    )
}
