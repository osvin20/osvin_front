import TitleLayout from '../layout/TitleLayout'
import Link from 'next/link'

export default function Cart(){
    return (
        <TitleLayout>
            <div className={'pagetit_div'}>
              <h1 className={'page_tit'}>CART</h1>
            </div>
            <div className={'empty_cart'}>
                <img src="img/cart.png"/>
                <p>장바구니가 비어있습니다.</p>
                <Link href='/'>
                    <a className={'main_dir'}>
                        구경하러 가기
                    </a>
                </Link>
                <p className={'empty_txt'}>오스빈의 다양한 상품을 구경하며<br/>환경살리기 운동까지 참여해보세요!</p>
            </div>
            <div className={'cart_div'}>
                <div className={'cart_check'}>
                    <input type="checkbox" id="all_check"/>
                    <label htmlFor="all_check">전체선택</label>
                </div>
                <ul className={'cart_list'}>
                    <li>
                        <div>
                            <input type="checkbox" id="itemcheck1"/>
                            <label htmlFor="itemcheck1"></label>
                        </div>
                        <Link href='item'>
                          <a className={'cart_thumb'}>
                            <img src="img/item16.jpg"/>
                          </a>
                        </Link>
                        <div className={'cartitem'}>
                            <div>
                                <p className={'cart_shop'}>오스빈 스토어</p>
                                <Link href='/item'>
                                  <a>
                                    <p className={'cartitem_name'}>컬러링 필 버튼 니트 가디건</p>
                                  </a>
                                </Link>
                            </div>
                            <div className={'cart_price_div'}>
                                <p className={'del_cost'}>
                                    배송비
                                    <span>2500원</span>
                                </p>
                                <p className={'cart_price'}>51,000원</p>
                            </div>
                        </div>
                        <div className={'cart_del'}>
                          <div>
                            <img src="img/close.png"/>
                          </div>
                        </div>
                    </li>
                    <li>
                        <div>
                            <input type="checkbox" id="itemcheck2"/>
                            <label htmlFor="itemcheck2"></label>
                        </div>
                        <Link href='item'>
                          <a>
                            <img src="img/item17.jpg" className={'cart_thumb'}/>
                          </a>
                        </Link>
                        <div className={'cartitem'}>
                            <div>
                                <p className={'cart_shop'}>오스빈 스토어</p>
                                <Link href='/item'>
                                  <a>
                                    <p className={'cartitem_name'}>모디쉬 루즈 핏 라이더 자켓</p>
                                  </a>
                                </Link>
                            </div>
                            <div className={'cart_price_div'}>
                                <p className={'del_cost'}>
                                    배송비
                                    <span>무료</span>
                                </p>
                                <p className={'cart_price'}>51,000원</p>
                            </div>
                        </div>
                        <div className={'cart_del'}>
                          <div>
                            <img src="img/close.png"/>
                          </div>
                        </div>
                    </li>
                    <li>
                        <div>
                            <input type="checkbox" id="itemcheck3"/>
                            <label htmlFor="itemcheck3"></label>
                        </div>
                        <Link href='item'>
                          <a>
                            <img src="img/item18.jpg" className={'cart_thumb'}/>
                          </a>
                        </Link>
                        <div className={'cartitem'}>
                            <div>
                                <p className={'cart_shop'}>오스빈 스토어</p>
                                <Link href='/item'>
                                  <a>
                                    <p className={'cartitem_name'}>리키 울 트위스트 니트 버킷 햇</p>
                                  </a>
                                </Link>
                            </div>
                            <div className={'cart_price_div'}>
                                <p className={'del_cost'}>
                                    배송비
                                    <span>2500원</span>
                                </p>
                                <p className={'cart_price'}>51,000원</p>
                            </div>
                        </div>
                        <div className={'cart_del'}>
                          <div>
                            <img src="img/close.png"/>
                          </div>
                        </div>
                    </li>
                </ul>
                <div className={'cart_info'}>
                    <div>
                        <p>총 상품금액</p>
                        <p>125,000원</p>
                    </div>
                    <div>
                        <p>총 배송비</p>
                        <p>5,000원</p>
                    </div>
                    <div className={'cart_total'}>
                        <p>총 결제금액</p>
                        <p>130,000원</p>
                    </div>
                </div>
                <div className={'pay_btn'}>
                    <Link href='/order'>
                        <a>구매하기</a>
                    </Link>
                </div>
            </div>
        </TitleLayout>
    )
}
