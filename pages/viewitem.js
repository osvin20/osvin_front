import Link from 'next/link'
import React,{useState} from 'react';
import CheckBox from '../layout/CheckBox.js';

export default function ViewItem(){
    const [ck ,setCk] = useState(false);
    return (
      <div className={'storefeed zzimlist'}>
          <ul>
              <li>
                  <Link href="/item">
                      <a>
                        <img src="/img/storefeed_01.jpg"/>
                      </a>
                  </Link>
                  <CheckBox
                    id={"checkBox09"}
                    defCk={false}
                    offEl={
                      <div className={'heart_ico heart_click'}>
                        <img src="/img/heart2.png"/>
                      </div>
                    }
                    onEl={
                      <div className={'heart_ico heart_click'}>
                        <img src="/img/heart3.png"/>
                      </div>
                    }
                  />
                  <div className={'view_del'}>
                    <img src="/img/close.png"/>
                  </div>
              </li>
              <li>
                  <Link href="/item">
                      <a>
                        <img src="/img/storefeed_02.jpg"/>
                      </a>
                  </Link>
                  <CheckBox
                    id={"checkBox10"}
                    defCk={false}
                    offEl={
                      <div className={'heart_ico heart_click'}>
                        <img src="/img/heart2.png"/>
                      </div>
                    }
                    onEl={
                      <div className={'heart_ico heart_click'}>
                        <img src="/img/heart3.png"/>
                      </div>
                    }
                  />
                  <div className={'view_del'}>
                    <img src="/img/close.png"/>
                  </div>
              </li>
              <li>
                  <Link href="/item">
                      <a>
                        <img src="/img/storefeed_03.jpg"/>
                      </a>
                  </Link>
                  <CheckBox
                    id={"checkBox11"}
                    defCk={false}
                    offEl={
                      <div className={'heart_ico heart_click'}>
                        <img src="/img/heart2.png"/>
                      </div>
                    }
                    onEl={
                      <div className={'heart_ico heart_click'}>
                        <img src="/img/heart3.png"/>
                      </div>
                    }
                  />
                  <div className={'view_del'}>
                    <img src="/img/close.png"/>
                  </div>
              </li>
              <li>
                  <Link href="/item">
                      <a>
                        <img src="/img/storefeed_04.jpg"/>
                      </a>
                  </Link>
                  <CheckBox
                    id={"checkBox12"}
                    defCk={false}
                    offEl={
                      <div className={'heart_ico heart_click'}>
                        <img src="/img/heart2.png"/>
                      </div>
                    }
                    onEl={
                      <div className={'heart_ico heart_click'}>
                        <img src="/img/heart3.png"/>
                      </div>
                    }
                  />
                  <div className={'view_del'}>
                    <img src="/img/close.png"/>
                  </div>
              </li>
              <li>
                  <Link href="/item">
                      <a>
                        <img src="/img/storefeed_05.jpg"/>
                      </a>
                  </Link>
                  <CheckBox
                    id={"checkBox13"}
                    defCk={false}
                    offEl={
                      <div className={'heart_ico heart_click'}>
                        <img src="/img/heart2.png"/>
                      </div>
                    }
                    onEl={
                      <div className={'heart_ico heart_click'}>
                        <img src="/img/heart3.png"/>
                      </div>
                    }
                  />
                  <div className={'view_del'}>
                    <img src="/img/close.png"/>
                  </div>
              </li>
              <li>
                  <Link href="/item">
                      <a>
                        <img src="/img/storefeed_06.jpg"/>
                      </a>
                  </Link>
                  <CheckBox
                    id={"checkBox14"}
                    defCk={false}
                    offEl={
                      <div className={'heart_ico heart_click'}>
                        <img src="/img/heart2.png"/>
                      </div>
                    }
                    onEl={
                      <div className={'heart_ico heart_click'}>
                        <img src="/img/heart3.png"/>
                      </div>
                    }
                  />
                  <div className={'view_del'}>
                    <img src="/img/close.png"/>
                  </div>
              </li>
              <li>
                  <Link href="/item">
                      <a>
                        <img src="/img/storefeed_01.jpg"/>
                      </a>
                  </Link>
                  <CheckBox
                    id={"checkBox15"}
                    defCk={false}
                    offEl={
                      <div className={'heart_ico heart_click'}>
                        <img src="/img/heart2.png"/>
                      </div>
                    }
                    onEl={
                      <div className={'heart_ico heart_click'}>
                        <img src="/img/heart3.png"/>
                      </div>
                    }
                  />
                  <div className={'view_del'}>
                    <img src="/img/close.png"/>
                  </div>
              </li>
              <li>
                  <Link href="/item">
                      <a>
                        <img src="/img/storefeed_02.jpg"/>
                      </a>
                  </Link>
                  <div className={'soldout'}>
                      SOLD OUT
                  </div>
                  <CheckBox
                    id={"checkBox16"}
                    defCk={false}
                    offEl={
                      <div className={'heart_ico heart_click'}>
                        <img src="/img/heart2.png"/>
                      </div>
                    }
                    onEl={
                      <div className={'heart_ico heart_click'}>
                        <img src="/img/heart3.png"/>
                      </div>
                    }
                  />
                  <div className={'view_del'}>
                    <img src="/img/close.png"/>
                  </div>
              </li>
          </ul>
      </div>
    );
  }
