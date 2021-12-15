import TitleLayout from '../layout/TitleLayout'
import Link from 'next/link'

export default function Youtube(){
    return (
        <TitleLayout>
            <h1 className={'page_tit'}>YOUTUBE</h1>
            <div className={'borderfix'}></div>
            <div className={'youtube_prof'}>
              <div>
                <div className={'youtube_prof_img'}>
                  <img src='img/prof_04.jpg'/>
                </div>오스빈
              </div>
            </div>
            <div className={'upload_txt extra_bold'}>업로드한 동영상</div>
            <ul className={'ytb_list'}>
              <li>
                <Link href='/'>
                  <a>
                    <div className={'ytb_thumb'}>
                      <img src='img/ytb_01.jpg'/>
                    </div>
                    <div>
                      <p className={'ytb_tit'}>
                      역대급 가성비 빈티지샵 로드무역 옷무덤에서 보물찾기 🧦
                      </p>
                      <span className={'ytd_date'}>2021-08-20</span>
                    </div>
                  </a>
                </Link>
              </li>
              <li>
                <Link href='/'>
                  <a>
                    <div className={'ytb_thumb'}>
                      <img src='img/ytb_02.jpg'/>
                    </div>
                    <div>
                      <p className={'ytb_tit'}>
                      역대급 가성비 빈티지샵 로드무역 옷무덤에서 보물찾기 🧦
                      </p>
                      <span className={'ytd_date'}>2021-08-20</span>
                    </div>
                  </a>
                </Link>
              </li>
              <li>
                <Link href='/'>
                  <a>
                    <div className={'ytb_thumb'}>
                      <img src='img/ytb_03.jpg'/>
                    </div>
                    <div>
                      <p className={'ytb_tit'}>
                      빈티지샵 추천(서울대입구 빈티지샵 어썸9) '진정성 있게 운영하시는 20대 사업가'
                      </p>
                      <span className={'ytd_date'}>2021-08-20</span>
                    </div>
                  </a>
                </Link>
              </li>
              <li>
                <Link href='/'>
                  <a>
                    <div className={'ytb_thumb'}>
                      <img src='img/ytb_05.jpg'/>
                    </div>
                    <div>
                      <p className={'ytb_tit'}>
                      나만 알고싶은 빈티지샵 🤎빈토리🤎에서 쇼핑하고 왔어요💸+ 하울영상도!
                      </p>
                      <span className={'ytd_date'}>2021-08-20</span>
                    </div>
                  </a>
                </Link>
              </li>
              <li>
                <Link href='/'>
                  <a>
                    <div className={'ytb_thumb'}>
                      <img src='img/ytb_04.jpg'/>
                    </div>
                    <div>
                      <p className={'ytb_tit'}>
                      빈티지샵 추천(서울대입구 빈티지샵 어썸9) '진정성 있게 운영하시는 20대 사업가'
                      </p>
                      <span className={'ytd_date'}>2021-08-20</span>
                    </div>
                  </a>
                </Link>
              </li>
              <li>
                <Link href='/'>
                  <a>
                    <div className={'ytb_thumb'}>
                      <img src='img/ytb_06.jpg'/>
                    </div>
                    <div>
                      <p className={'ytb_tit'}>
                      홍대 빈티지샵 투어! 쇼핑 제대로 했다!
                      </p>
                      <span className={'ytd_date'}>2021-08-20</span>
                    </div>
                  </a>
                </Link>
              </li>
            </ul>
        </TitleLayout>
    )
}
