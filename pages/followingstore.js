
import TitleLayout from '../layout/TitleLayout'
import Link from 'next/link'

export default function FollowStore(){
    return (
        <TitleLayout>
            <h1 className={'page_tit'}>FOLLOW STORE</h1>
            <div className={'followstore'}>
                <p className={'fs_count'}>
                    <span>3</span> 개의 스토어를 팔로우 중입니다.
                </p>
                <ul className={'fs_list'}>
                    <li>
                        <Link href='/'>
                            <a>
                                <img src="img/shop_06.jpg" className={'follow_img'}/>
                                <div>
                                    <p className={'follow_name'}>오스빈 스토어</p>
                                    <p className={'fs_txt'}>안녕하세요 빈티지 대표 스토어 오스빈입니다.</p>
                                </div>
                            </a>
                        </Link>
                        <button className={'follow_btn'}>팔로우</button>
                    </li>
                    <li>
                        <Link href='/'>
                            <a>
                                <img src="img/shop_10.jpg" className={'follow_img'}/>
                                <div>
                                    <p className={'follow_name'}>빈티지 스토어</p>
                                    <p className={'fs_txt'}>안녕하세요 오스빈 대표 스토어 빈티지입니다.</p>
                                </div>
                            </a>
                        </Link>
                        <button className={'follow_btn following_btn'}>팔로잉</button>
                    </li>
                    <li>
                        <Link href='/'>
                            <a>
                                <img src="img/shop_08.jpg" className={'follow_img'}/>
                                <div>
                                    <p className={'follow_name'}>오스빈 스토어</p>
                                    <p className={'fs_txt'}>안녕하세요 빈티지 대표 스토어 오스빈입니다.</p>
                                </div>
                            </a>
                        </Link>
                        <button className={'follow_btn'}>팔로우</button>
                    </li>
                </ul>
            </div>
        </TitleLayout>
    )
}