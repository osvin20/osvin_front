import TitleLayout from '../layout/TitleLayout'
import CusSwitch from '../layout/CusSwitch'
import Link from 'next/link'
import React from 'react';

export default function Setting(){

    return (
        <TitleLayout>
            
            <h1 className={'page_tit'}>SETTING</h1>
            <div className={'setting_div'}>
                <div className={'setting'}>
                    <p>오스빈 소식</p>
                    <ul>
                        <li>
                            <p>앱 알림</p>
                            <div>
                                <CusSwitch 
                                    checked={false} 
                                    checkedIcon={false} 
                                    uncheckedIcon={false}
                                    height={24}
                                    width={40}
                                    offColor={'#ddd6d1'}
                                    onColor={'#ca8756'}
                                />
                            </div>
                        </li>
                        <li>
                            <p>SMS</p>
                            <div>
                                <CusSwitch 
                                    checked={false} 
                                    checkedIcon={false} 
                                    uncheckedIcon={false}
                                    height={24}
                                    width={40}
                                    offColor={'#ddd6d1'}
                                    onColor={'#ca8756'}
                                />
                            </div>
                        </li>
                        <li>
                            <p>이메일</p>
                            <div>
                                <CusSwitch 
                                    checked={false} 
                                    checkedIcon={false} 
                                    uncheckedIcon={false}
                                    height={24}
                                    width={40}
                                    offColor={'#ddd6d1'}
                                    onColor={'#ca8756'}
                                />
                            </div>
                        </li>
                    </ul>
                </div>
                <div className={'setting'}>
                    <p>피드 알림</p>
                    <ul>
                        <li>
                            <p>팔로잉 피드 업로드</p>
                            <div>
                                <CusSwitch 
                                    checked={false} 
                                    checkedIcon={false} 
                                    uncheckedIcon={false}
                                    height={24}
                                    width={40}
                                    offColor={'#ddd6d1'}
                                    onColor={'#ca8756'}
                                />
                            </div>
                        </li>
                        <li>
                            <p>피드 댓글 및 좋아요</p>
                            <div>
                                <CusSwitch 
                                    checked={false} 
                                    checkedIcon={false} 
                                    uncheckedIcon={false}
                                    height={24}
                                    width={40}
                                    offColor={'#ddd6d1'}
                                    onColor={'#ca8756'}
                                />
                            </div>
                        </li>
                        <li>
                            <p>찜 상품 환불 알림</p>
                            <div>
                                <CusSwitch 
                                    checked={false} 
                                    checkedIcon={false} 
                                    uncheckedIcon={false}
                                    height={24}
                                    width={40}
                                    offColor={'#ddd6d1'}
                                    onColor={'#ca8756'}
                                />
                            </div>
                        </li>
                    </ul>
                </div>
                <div className={'setting'}>
                    <p>팔로잉 스토어 알림</p>
                    <ul>
                        <li>
                            <p>팔로잉 스토어 스토리</p>
                            <div>
                                <CusSwitch 
                                    checked={false} 
                                    checkedIcon={false} 
                                    uncheckedIcon={false}
                                    height={24}
                                    width={40}
                                    offColor={'#ddd6d1'}
                                    onColor={'#ca8756'}
                                />
                            </div>
                        </li>
                        <li>
                            <p>팔로잉 스토어 판매상품</p>
                            <div>
                                <CusSwitch 
                                    checked={false} 
                                    checkedIcon={false} 
                                    uncheckedIcon={false}
                                    height={24}
                                    width={40}
                                    offColor={'#ddd6d1'}
                                    onColor={'#ca8756'}
                                />
                            </div>
                        </li>
                    </ul>
                </div>
            </div>
            
        </TitleLayout>
    )
}
