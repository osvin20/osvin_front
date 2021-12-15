
import TitleLayout from '../layout/TitleLayout'
import Link from 'next/link'

export default function OrderConfirm(){
    return (
        <div className="orderconfirm">
            <div className={'success'}>
                <img src="/img/check.png"/>
                <p>
                주문이 정상적으로<br/>완료되었습니다.
                </p>
            </div>
            <div className={'oc_div'}>
                <p className={'tit'}>배송지 정보</p>
                <ul className={'del_info'}>
                    <li>
                        <p>홍길동</p>
                        <span>010-0000-0000</span>
                    </li>
                    <li>
                        <p>478569</p>
                        <span>부산 금정구 금정로 225 101동 701호</span>
                    </li>
                    <li>
                        문 앞에 놓아 주세요.
                    </li>
                </ul>
            </div>
            <div className={'oc_div'}>
                <p className={'tit'}>상품 정보</p>
                <ul className={'oc_item'}>
                    <li>
                        <div className={'item_img'}>
                            <img src="img/item03.jpg"/>
                        </div>
                        <div className={'oc_info'}>
                            <div>
                                <p>오스빈 스토어</p>
                                <p className={'oc_itemname extra_bold'}>지아 울 레이어드 니트 블라우스</p>
                            </div>
                            <div className={'oc_price'}>
                                <p>
                                    배송비<span>2500</span>
                                </p>
                                <p className={'extra_bold'}>25,000원</p>
                            </div>
                        </div>
                    </li>
                    <li>
                        <div className={'item_img'}>
                            <img src="img/item16.jpg"/>
                        </div>
                        <div className={'oc_info'}>
                            <div>
                                <p>오스빈 스토어</p>
                                <p className={'oc_itemname extra_bold'}>컬러링 펄 버튼 니트 가디건</p>
                            </div>
                            <div className={'oc_price'}>
                                <p>
                                    배송비<span>2500</span>
                                </p>
                                <p className={'extra_bold'}>25,000원</p>
                            </div>
                        </div>
                    </li>
                </ul>
            </div>
            <div className={'oc_div oc_pay'}>
                <div>
                    <p>총 결제금액</p>
                    <div className={'extra_bold'}>
                        60,000원
                    </div>
                </div>
            </div>
            <div className={'oc_btn'}>
                <Link href="/order_detail">
                    <a className={'detail_dir'}>주문 상세보기</a>
                </Link>
                <Link href="/">
                    <a className={'home_dir'}>홈으로 가기</a>
                </Link>
            </div>
        </div>
    )
}
