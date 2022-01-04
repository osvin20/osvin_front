import TitleLayout from '../layout/TitleLayout'
import Link from 'next/link'

export default function SearchResult(){
    return (
        <TitleLayout>
            <div className={'pagetit_div'}>
              <h1 className={'page_tit'}>SEARCH</h1>
            </div>
            <div className={'borderfix'}></div>
            <div className={'search_div search_result_input'}>
                <input placeholder="빈티지목걸이" />
                <img src="/img/search.png"/>
            </div>
            <div className={'storefeed itemlist s_result'}>
            <ul className={'storefeed_ul'}>
                <li>
                    <Link href="/item">
                        <a>
                          <img src="/img/storefeed_03.jpg"/>
                        </a>
                    </Link>
                    <Link href="/item">
                        <a>
                          <div className={'iteminfo'}>
                              <p className={'itemname'}>네이비 리본넥 빈티지 캐주얼 원피스 조끼 세트</p>
                              <p className={'itemprice'}>
                                  <span>51,000</span>
                                  원
                              </p>
                          </div>
                        </a>
                    </Link>
                </li>
                <li>
                    <Link href="/item">
                        <a>
                          <img src="/img/storefeed_04.jpg"/>
                        </a>
                    </Link>
                    <Link href="/item">
                        <a>
                          <div className={'iteminfo'}>
                              <p className={'itemname'}>스위스 빈티지 스웨터 풀오버 유니크 니트</p>
                              <p className={'itemprice'}>
                                  <span>51,000</span>
                                  원
                              </p>
                          </div>
                        </a>
                    </Link>
                </li>
                <li>
                    <Link href="/item">
                        <a>
                          <img src="/img/storefeed_07.jpg"/>
                        </a>
                    </Link>
                    <Link href="/item">
                        <a>
                          <div className={'iteminfo'}>
                              <p className={'itemname'}>고품질 여성 빈티지 패션가방 숄더백</p>
                              <p className={'itemprice'}>
                                  <span>51,000</span>
                                  원
                              </p>
                          </div>
                        </a>
                    </Link>
                </li>
                <li>
                    <Link href="/item">
                        <a>
                          <img src="/img/storefeed_06.jpg"/>
                        </a>
                    </Link>
                    <Link href="/item">
                        <a>
                          <div className={'iteminfo'}>
                              <p className={'itemname'}>복고 니트 빈티지 스타일 펀칭 벙거지</p>
                              <p className={'itemprice'}>
                                  <span>51,000</span>
                                  원
                              </p>
                          </div>
                        </a>
                    </Link>
                </li>
                <li>
                    <Link href="/item">
                        <a>
                          <img src="/img/storefeed_05.jpg"/>
                        </a>
                    </Link>
                    <Link href="/item">
                        <a>
                          <div className={'iteminfo'}>
                              <p className={'itemname'}>네이비 리본넥 빈티지 캐주얼 원피스 조끼 세트</p>
                              <p className={'itemprice'}>
                                  <span>51,000</span>
                                  원
                              </p>
                          </div>
                        </a>
                    </Link>
                </li>
                <li>
                    <Link href="/item">
                        <a>
                          <img src="/img/storefeed_08.jpg"/>
                        </a>
                    </Link>
                    <Link href="/item">
                        <a>
                          <div className={'iteminfo'}>
                              <p className={'itemname'}>네이비 리본넥 빈티지 캐주얼 원피스 조끼 세트</p>
                              <p className={'itemprice'}>
                                  <span>51,000</span>
                                  원
                              </p>
                          </div>
                        </a>
                    </Link>
                </li>
            </ul>
            </div>
        </TitleLayout>
    )
}
