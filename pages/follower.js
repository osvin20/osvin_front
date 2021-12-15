import Link from 'next/link'

export default function Follower(){
    return (
        <div className={'followlist'}>
          <div className={'search_div'}>
              <input placeholder="검색" />
              <img src="/img/search_tab.png"/>
          </div>
          <ul>
            <li>
              <Link href='/userfeed'>
                <a>
                  <div className='follow_user'>
                    <img src='img/prof_05.jpg'/>
                  </div>
                  sohee1203
                </a>
              </Link>
              <p className={'follow_del'}>삭제</p>
            </li>
            <li>
              <Link href='/userfeed'>
                <a>
                  <div className='follow_user'>
                    <img src='img/prof_03.jpg'/>
                  </div>
                  heyri9512
                </a>
              </Link>
              <p className={'follow_del'}>삭제</p>
            </li>
            <li>
              <Link href='/userfeed'>
                <a>
                  <div className='follow_user'>
                    <img src='img/prof_02.jpg'/>
                  </div>
                  yura0545
                </a>
              </Link>
              <p className={'follow_del'}>삭제</p>
            </li>
            <li>
              <Link href='/userfeed'>
                <a>
                  <div className='follow_user'>
                    <img src='img/prof_01.jpg'/>
                  </div>
                  ming_09
                </a>
              </Link>
              <p className={'follow_del'}>삭제</p>
            </li>
          </ul>
        </div>
    )
}
