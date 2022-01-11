import Link from 'next/link'

export default function AllItem(){
    return (
      <div className={'storefeed itemlist'}>
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
          </ul>
      </div>
    );
  }
