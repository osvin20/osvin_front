import Link from 'next/link'
import React,{useState} from 'react';
import CheckBox from '../layout/CheckBox.js';

export default function StoreItem(){
    const [ck ,setCk] = useState(false);
    return (
      <div className={'storefeed zzimlist storeitem'}>
          <div className={'storeitem_count'}>
              <p>15</p>개의 판매상품
          </div>
          <ul>
              <li>
                  <Link href="/item">
                      <a>
                        <img src="/img/item15.jpg"/>
                      </a>
                  </Link>
                  <CheckBox
                    id={"likeCheck1"}
                    defCk={false}
                    offEl={
                      <div className={'heart_ico'}>
                        <img src="/img/heart2.png"/>
                      </div>
                    }
                    onEl={
                      <div className={'heart_ico heart_click'}>
                        <img src="/img/heart3.png"/>
                      </div>
                    }
                  />
              </li>
              <li>
                  <Link href="/item">
                      <a>
                        <img src="/img/item11.jpg"/>
                      </a>
                  </Link>
                  <div className={'heart_ico heart_click'}>
                    <img src="/img/heart3.png"/>
                  </div>
              </li>
              <li>
                  <Link href="/item">
                      <a>
                        <img src="/img/item13.jpg"/>
                      </a>
                  </Link>
                  <div className={'heart_ico heart_click'}>
                    <img src="/img/heart3.png"/>
                  </div>
              </li>
              <li>
                  <Link href="/item">
                      <a>
                        <img src="/img/feed_01.jpg"/>
                      </a>
                  </Link>
                  <div className={'heart_ico'}>
                    <img src="/img/heart2.png"/>
                  </div>
              </li>
              <li>
                  <Link href="/item">
                      <a>
                        <img src="/img/item16.jpg"/>
                      </a>
                  </Link>
                  <div className={'heart_ico'}>
                    <img src="/img/heart2.png"/>
                  </div>
              </li>
              <li>
                  <Link href="/item">
                      <a>
                        <img src="/img/item18.jpg"/>
                      </a>
                  </Link>
                  <div className={'soldout'}>
                      SOLD OUT
                  </div>
                  <div className={'heart_ico heart_click'}>
                    <img src="/img/heart3.png"/>
                  </div>
              </li>
              <li>
                  <Link href="/item">
                      <a>
                        <img src="/img/storefeed_04.jpg"/>
                      </a>
                  </Link>
                  <div className={'heart_ico heart_click'}>
                    <img src="/img/heart3.png"/>
                  </div>
              </li>
              <li>
                  <Link href="/item">
                      <a>
                        <img src="/img/item02.jpg"/>
                      </a>
                  </Link>
                  <div className={'heart_ico'}>
                    <img src="/img/heart2.png"/>
                  </div>
              </li>
          </ul>
      </div>
    );
  }
