
import TitleLayout from '../layout/TitleLayout'
import Link from 'next/link'

export default function Comment(){
    return (
        <TitleLayout>
            <div className={'pagetit_div'}>
              <h1 className={'page_tit'}>ITEM LIST</h1>
            </div>
            <div className={'post_btn'}>
                <Link href='/post_write'>
                    <a>
                        게시물 올리기
                    </a>
                </Link>
            </div>
            <ul className={'post_item'}>
                <li>
                    <div className={'post_check'}>
                        <img src="/img/item03.jpg" />
                        <input type="radio" id="item1" name="postcheck"/>
                        <label htmlFor="item1"></label>
                    </div>
                    <div className={'post_item_txt'}>
                        <p className={'item_store'}>
                            VINTAGE STORE
                        </p>
                        <p className={'item_name'}>
                            지아 울 레이어드 니트 블라우스
                        </p>
                    </div>
                </li>
                <li>
                    <div className={'post_check'}>
                        <img src="/img/item04.jpg" />
                        <input type="radio" id="item2" name="postcheck"/>
                        <label htmlFor="item2"></label>
                    </div>
                    <div className={'post_item_txt'}>
                        <p className={'item_store'}>
                            VINTAGE STORE
                        </p>
                        <p className={'item_name'}>
                            내핑 버튼 포인트 와이드 슬렉스
                        </p>
                    </div>
                </li>
                <li>
                    <div className={'post_check'}>
                        <img src="/img/item05.jpg" />
                        <input type="radio" id="item3" name="postcheck"/>
                        <label htmlFor="item3"></label>
                    </div>
                    <div className={'post_item_txt'}>
                        <p className={'item_store'}>
                            VINTAGE STORE
                        </p>
                        <p className={'item_name'}>
                            렌티 플라워 니트 가디건
                        </p>
                    </div>
                </li>
                <li>
                    <div className={'post_check'}>
                        <img src="/img/item06.jpg" />
                        <input type="radio" id="item4" name="postcheck"/>
                        <label htmlFor="item4"></label>
                    </div>
                    <div className={'post_item_txt'}>
                        <p className={'item_store'}>
                            VINTAGE STORE
                        </p>
                        <p className={'item_name'}>
                            러빈 피치 레이스 핀턱 롱 원피스
                        </p>
                    </div>
                </li>

            </ul>
        </TitleLayout>
    )
}
