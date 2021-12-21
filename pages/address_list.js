import TitleLayout from '../layout/TitleLayout'

import Link from 'next/link'

export default function AddressForm(){
    return (
        <TitleLayout>
            <div className={'pagetit_div'}>
              <h1 className={'page_tit'}>ADDRESS</h1>
            </div>
            <div>
                <Link href="/add_address">
                    <a className={'add_adrs'}>
                        <img src="/img/plus.png" />
                    </a>
                </Link>
            </div>
            <ul className={'adrs_list'}>
                <li>
                    <div className={'adrs_flex_div'}>
                        <div className={'address_check'}>
                            <label htmlFor="address_basic">기본 배송지</label>
                        </div>
                        <div className={'adrs_mod'}>
                            <Link href="/address_form">
                                <a>수정</a>
                            </Link>
                            <p className={'adrs_del'}>삭제</p>
                        </div>
                    </div>
                    <div className={'adrs_div'}>
                    <p>이름</p>
                    <div>
                        <input type="text" placeholder="오스빈" />
                    </div>
                </div>
                <div className={'adrs_div'}>
                    <p>휴대폰 번호</p>
                    <div>
                        <input type="text" placeholder="010-0000-0000" />
                    </div>
                </div>
                <div className={'adrs_div adrs_height'}>
                    <p>주소</p>
                    <div className={'adrs_flex'}>
                        <input type="text" placeholder="145236" />
                        <button>
                            우편번호 찾기
                        </button>
                    </div>
                </div>
                <div className={'adrs_div'}>
                    <p>상세주소</p>
                    <div>
                        <input type="text" placeholder="00아파트 101동 105호" />
                    </div>
                </div>
                <div className={'adrs_div adrs_sel_div'}>
                    <p>배송메모</p>
                    <div className={'adrs_flex adrs_sel'}>
                        <select>
                            <option>
                                배송메모를 선택해주세요
                            </option>
                        </select>
                        <img src="/img/arrow_09.png" />
                    </div>
                </div>
                </li>
                <li>
                    <div className={'adrs_flex_div'}>
                        <div className={'address_check'}>

                        </div>
                        <div className={'adrs_mod'}>
                            <Link href="/address_form">
                                <a>수정</a>
                            </Link>
                            <p className={'adrs_del'}>삭제</p>
                        </div>
                    </div>
                    <div className={'adrs_div'}>
                    <p>이름</p>
                    <div>
                        <input type="text" placeholder="오스빈" />
                    </div>
                </div>
                <div className={'adrs_div'}>
                    <p>휴대폰 번호</p>
                    <div>
                        <input type="text" placeholder="010-0000-0000" />
                    </div>
                </div>
                <div className={'adrs_div adrs_height'}>
                    <p>주소</p>
                    <div className={'adrs_flex'}>
                        <input type="text" placeholder="145236" />
                        <button>
                            우편번호 찾기
                        </button>
                    </div>
                </div>
                <div className={'adrs_div'}>
                    <p>상세주소</p>
                    <div>
                        <input type="text" placeholder="00아파트 101동 105호" />
                    </div>
                </div>
                <div className={'adrs_div adrs_sel_div'}>
                    <p>배송메모</p>
                    <div className={'adrs_flex adrs_sel'}>
                        <select>
                            <option>
                                배송메모를 선택해주세요
                            </option>
                        </select>
                        <img src="/img/arrow_09.png" />
                    </div>
                </div>
                </li>
            </ul>
        </TitleLayout>
    )
}
