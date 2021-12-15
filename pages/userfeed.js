
import SubLayout from '../layout/SubLayout'
import Link from 'next/link'

export default function UserFeed(){
    return (
        <SubLayout>
            <div className={'user_info'}>
                <div className={'user_info_div'}>
                    <div className={'user_prof'}>
                        <img src="/img/prof_01.jpg"/>
                    </div>
                    <ul className={'user_fllow'}>
                        <li>
                          <Link href='/follow_list'>
                            <a>
                              <p>팔로잉</p>
                              <span>51</span>
                            </a>
                          </Link>
                        </li>
                        <li>
                          <Link href='/follow_list?tabnumber=1'>
                            <a>
                              <p>팔로워</p>
                              <span>7</span>
                            </a>
                          </Link>
                        </li>
                        <li>
                            <p>추천받은 수</p>
                            <span>20</span>
                        </li>
                    </ul>
                </div>
                <div className={'user_txt'}>
                    <h2>sohee_1203</h2>
                    <p>안녕하세요 빈티지 후기 구경하고 가세요!</p>
                    <Link href="/myinfo">
                        <a className={'prof_edit'}>
                            프로필 편집
                        </a>
                    </Link>
                </div>
            </div>
            <div className={'userfeed_pic'}>
                <ul>
                    <li>
                        <Link href='/post'>
                            <a>
                                <img src="/img/feed_01.jpg"/>
                            </a>
                        </Link>
                    </li>
                    <li>
                        <Link href='/post'>
                            <a>
                                <img src="/img/feed_02.jpg"/>
                            </a>
                        </Link>
                    </li>
                    <li>
                        <Link href='/post'>
                            <a>
                                <img src="/img/feed_03.jpg"/>
                            </a>
                        </Link>
                    </li>
                    <li>
                        <Link href='/post'>
                            <a>
                                <img src="/img/feed_04.jpg"/>
                            </a>
                        </Link>
                    </li>
                    <li>
                        <Link href='/post'>
                            <a>
                                <img src="/img/feed_05.jpg"/>
                            </a>
                        </Link>
                    </li>
                    <li>
                        <Link href='/post'>
                            <a>
                                <img src="/img/feed_06.jpg"/>
                            </a>
                        </Link>
                    </li>
                    <li>
                        <Link href='/post'>
                            <a>
                                <img src="/img/feed_07.jpg"/>
                            </a>
                        </Link>
                    </li>
                    <li>
                        <Link href='/post'>
                            <a>
                                <img src="/img/feed_08.jpg"/>
                            </a>
                        </Link>
                    </li>
                    <li>
                        <Link href='/post'>
                            <a>
                                <img src="/img/feed_09.jpg"/>
                            </a>
                        </Link>
                    </li>
                    <li>
                        <Link href='/post'>
                            <a>
                                <img src="/img/feed_10.jpg"/>
                            </a>
                        </Link>
                    </li>
                    <li>
                        <Link href='/post'>
                            <a>
                                <img src="/img/feed_11.jpg"/>
                            </a>
                        </Link>
                    </li>
                    <li>
                        <Link href='/post'>
                            <a>
                                <img src="/img/feed_12.jpg"/>
                            </a>
                        </Link>
                    </li>
                </ul>

            </div>
            <Link href="/addpost">
                <a className={'feed_write'}>
                    <img src="/img/plus.png"/>
                </a>
            </Link>
        </SubLayout>
    )
}
