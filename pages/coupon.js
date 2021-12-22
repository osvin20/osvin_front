
import TitleLayout from '../layout/TitleLayout'
import Link from 'next/link'

export default function Coupon(){
    return (
        <TitleLayout>
            <div className={'pagetit_div'}>
              <h1 className={'page_tit'}>COUPON</h1>
            </div>
            <div className={'couponpage'}>
                <p className={'coupon_count'}>
                    보유쿠폰
                    <span> 7</span>개
                </p>
                <ul className={'couponlist'}>
                    <li>
                        <Link href="/store">
                            <a>
                                <div className={'couponinfo'}>
                                    <img src="img/shop_07.jpg" className={'couponimg'}/>
                                    <div className={'coupon_flex'}>
                                        <div>
                                            <p className={'coupon_store'}>오스빈 스토어</p>
                                            <p className={'coupon_price'}>10,000원</p>
                                            <p className={'coupon_txt'}>첫 구매 특별 할인쿠폰</p>
                                        </div>
                                        <p className={'coupon_date'}>2021-08-20까지</p>
                                    </div>
                                </div>
                                <div className={'arrow_circle'}>
                                    <img src="img/arrow_08.png"/>
                                </div>
                            </a>
                        </Link>
                    </li>
                    <li>
                        <Link href="/store">
                            <a>
                                <div className={'couponinfo'}>
                                    <img src="img/shop_08.jpg" className={'couponimg'}/>
                                    <div className={'coupon_flex'}>
                                        <div>
                                            <p className={'coupon_store'}>오스빈 스토어</p>
                                            <p className={'coupon_price'}>10,000원</p>
                                            <p className={'coupon_txt'}>첫 구매 특별 할인쿠폰</p>
                                        </div>
                                        <p className={'coupon_date'}>2021-08-20까지</p>
                                    </div>
                                </div>
                                <div className={'arrow_circle'}>
                                    <img src="img/arrow_08.png"/>
                                </div>
                            </a>
                        </Link>
                    </li>
                    <li>
                        <Link href="/store">
                            <a>
                                <div className={'couponinfo'}>
                                    <img src="img/shop_09.jpg" className={'couponimg'}/>
                                    <div className={'coupon_flex'}>
                                        <div>
                                            <p className={'coupon_store'}>오스빈 스토어</p>
                                            <p className={'coupon_price'}>10,000원</p>
                                            <p className={'coupon_txt'}>첫 구매 특별 할인쿠폰</p>
                                        </div>
                                        <p className={'coupon_date'}>2021-08-20까지</p>
                                    </div>
                                </div>
                                <div className={'arrow_circle'}>
                                    <img src="img/arrow_08.png"/>
                                </div>
                            </a>
                        </Link>
                    </li>
                    <li>
                        <Link href="/store">
                            <a>
                                <div className={'couponinfo'}>
                                    <img src="img/shop_10.jpg" className={'couponimg'}/>
                                    <div className={'coupon_flex'}>
                                        <div>
                                            <p className={'coupon_store'}>오스빈 스토어</p>
                                            <p className={'coupon_price'}>10,000원</p>
                                            <p className={'coupon_txt'}>첫 구매 특별 할인쿠폰</p>
                                        </div>
                                        <p className={'coupon_date'}>2021-08-20까지</p>
                                    </div>
                                </div>
                                <div className={'arrow_circle'}>
                                    <img src="img/arrow_08.png"/>
                                </div>
                            </a>
                        </Link>
                    </li>
                </ul>
            </div>
        </TitleLayout>
    )
}
