import Link from 'next/link'

export default function ReviewItem(){
    return (
      <ul className={'reviewitem storefeed'}>
          <li>
              <Link href='/item'>
                  <a className={'reviewitem_img'}>
                    <img src="/img/item01.jpg"/>
                  </a>
              </Link>
              <div className={'review_flex'}>
                <div>
                  <Link href='/item'>
                      <a className={'ri_name'}>도리 믹스 패턴 박시 핏 니트</a>
                  </Link>
                  <p className={'ri_shop'}>오스빈 스토어</p>
                </div>
                <div>
                  <Link href='/review_write'>
                      <a className={'review_write'}>리뷰 작성하기</a>
                  </Link>
                </div>
              </div>
          </li>
          <li>
              <Link href='/item'>
                  <a className={'reviewitem_img'}>
                    <img src="/img/item03.jpg"/>
                  </a>
              </Link>
              <div className={'review_flex'}>
                <div>
                  <Link href='/item'>
                      <a className={'ri_name'}>지아 울 레이어드 니트 블라우스</a>
                  </Link>
                  <p className={'ri_shop'}>오스빈 스토어</p>
                </div>
                <div>
                  <Link href='/review_write'>
                      <a className={'review_write'}>리뷰 작성하기</a>
                  </Link>
                </div>
              </div>
          </li>
          <li>
              <Link href='/item'>
                  <a className={'reviewitem_img'}>
                    <img src="/img/item04.jpg"/>
                  </a>
              </Link>
              <div className={'review_flex'}>
                <div>
                  <Link href='/item'>
                      <a className={'ri_name'}>내핑 버튼 포인트 와이드 슬렉스</a>
                  </Link>
                  <p className={'ri_shop'}>오스빈 스토어</p>
                </div>
                <div>
                  <Link href='/review_write'>
                      <a className={'review_write'}>리뷰 작성하기</a>
                  </Link>
                </div>
              </div>
          </li>
      </ul>
    );
  }