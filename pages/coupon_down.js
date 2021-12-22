import TitleLayout from '../layout/TitleLayout'
import Link from 'next/link'

export default function CouponDown(){
    return (
        <TitleLayout>
            <div className={'pagetit_div'}>
              <h1 className={'page_tit'}>COUPON</h1>
            </div>
            <div className={'borderfix'}></div>
            <div className={'coupon_down'}>
              <div className={'coupon_all'}>
                <p className={'extra_bold'}>오스빈 스토어</p>
                <button className={'extra_bold'}>
                  전체받기<img src="img/down.png" className={'downimg'}/>
                </button>
              </div>
              <ul className={'down_list'}>
                <li className={'download_coupon'}>
                  <div className={'coupon_info'}>
                    <p className={'coupon_price'}>
                      <span>3,000</span>원
                    </p>
                    <span>오스빈 신규고객 쿠폰</span>
                  </div>
                  <div className={'couponico'}>
                    <div>
                      <img src="img/w_down.png" className={'downimg'}/>
                    </div>
                  </div>
                </li>
                <li>
                  <div className={'coupon_info'}>
                    <p className={'coupon_price'}>
                      <span>20</span>%
                    </p>
                    <span>오스빈 홀리데이 쿠폰</span>
                  </div>
                  <div className={'couponico'}>
                    <div>
                      <img src="img/w_down.png" className={'downimg'}/>
                    </div>
                  </div>
                </li>
                <li>
                  <div className={'coupon_info'}>
                    <p className={'coupon_price'}>
                      <span>1000</span>원
                    </p>
                    <span>오스빈 런칭 할인쿠폰</span>
                  </div>
                  <div className={'couponico'}>
                    <div>
                      <img src="img/w_down.png" className={'downimg'}/>
                    </div>
                  </div>
                </li>
                <li>
                  <div className={'coupon_info'}>
                    <p className={'coupon_price'}>
                      <span>3,000</span>원
                    </p>
                    <span>오스빈 신규고객 쿠폰</span>
                  </div>
                  <div className={'couponico'}>
                    <div>
                      <img src="img/w_down.png" className={'downimg'}/>
                    </div>
                  </div>
                </li>
              </ul>
            </div>
        </TitleLayout>
    )
}
