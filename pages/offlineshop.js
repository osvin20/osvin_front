
import TitleLayout from '../layout/TitleLayout'
import Link from 'next/link'

export default function OfflineShop(){
    return (
        <TitleLayout>
            <div className={'pagetit_div'}>
              <h1 className={'page_tit'}>OFFLINESHOP</h1>
            </div>
            <div className={'offshop_map'}>
                <img src="/img/map.jpg"/>
            </div>
            {/*<div>
                <div className={'map_search'}>
                    <div className={'search_div'}>
                        <input type="text"/>
                        <img src="/img/search.png"/>
                    </div>
                    <div className={'search_sel'}>
                        <select>
                            <option>1km 미만</option>
                        </select>
                        <img src="/img/arrow_10.png"/>
                    </div>
                </div>
            </div>*/}
            <ul className={'offshoplist'}>
                {/* <li className={'offshop_none'}>
                    검색 결과가 없습니다.
                </li> */}
                <li>
                    <Link href='/store'>
                      <a>
                        <div className={'offshop_info'}>
                            <div>
                                <p className={'offshop_name'}>
                                    STAYFREE
                                </p>
                                <p className={'offshop_adrs'}>부산광역시 금정구 금정로225 00빌딩 6층</p>
                            </div>
                            <p className={'offshop_phone'}>070-0000-0000</p>
                        </div>
                        <div className={'offshop_thumb'}>
                            <img src="/img/story01.jpg"/>
                        </div>
                      </a>
                    </Link>
                </li>
                <li>
                  <Link href='/store'>
                    <a>
                      <div className={'offshop_info'}>
                          <div>
                              <p className={'offshop_name'}>
                                  STAYFREE
                              </p>
                              <p className={'offshop_adrs'}>부산광역시 금정구 금정로225 00빌딩 6층</p>
                          </div>
                          <p className={'offshop_phone'}>070-0000-0000</p>
                      </div>
                      <div className={'offshop_thumb'}>
                          <img src="/img/story02.jpg"/>
                      </div>
                    </a>
                  </Link>

                </li>
            </ul>
        </TitleLayout>
    )
}
