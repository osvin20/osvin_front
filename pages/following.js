import Link from 'next/link'
import React,{useState} from 'react';
import CheckBox from '../layout/CheckBox.js';
import OsbinModal from '../layout/OsbinModal.js';


export default function Following(){
    const [ck ,setCk] = useState(false);

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
                    <img src='img/prof_01.jpg'/>
                  </div>
                  sohee1203
                </a>
              </Link>
              <CheckBox
                id={"checkBox1"}
                defCk={false}
                offEl={
                  <button className={'follow_btn following_btn'}>
                    팔로잉
                  </button>
                }
                onEl={
                  <button className={'follow_btn'}>
                    팔로우
                  </button>
                }
              />
            </li>
            <li>
              <Link href='/userfeed'>
                <a>
                  <div className='follow_user'>
                    <img src='img/prof_02.jpg'/>
                  </div>
                  heyri9512
                </a>
              </Link>
              <CheckBox
                id={"checkBox2"}
                defCk={false}
                offEl={
                  <button className={'follow_btn following_btn'}>
                    팔로잉
                  </button>
                }
                onEl={
                  <button className={'follow_btn'}>
                    팔로우
                  </button>
                }
              />
            </li>
            <li>
              <Link href='/userfeed'>
                <a>
                  <div className='follow_user'>
                    <img src='img/prof_03.jpg'/>
                  </div>
                  yura0545
                </a>
              </Link>
              <CheckBox
                id={"checkBox3"}
                defCk={false}
                offEl={
                  <button className={'follow_btn following_btn'}>
                    팔로잉
                  </button>
                }
                onEl={
                  <button className={'follow_btn'}>
                    팔로우
                  </button>
                }
              />
            </li>
            <li>
              <Link href='/userfeed'>
                <a>
                  <div className='follow_user'>
                    <img src='img/prof_05.jpg'/>
                  </div>
                  ming_09
                </a>
              </Link>
              <CheckBox
                id={"checkBox4"}
                defCk={false}
                offEl={
                  <button className={'follow_btn following_btn'}>
                    팔로잉
                  </button>
                }
                onEl={
                  <button className={'follow_btn'}>
                    팔로우
                  </button>
                }
              />
            </li>
          </ul>
        </div>
    )
}
