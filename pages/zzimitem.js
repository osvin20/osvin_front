import Link from 'next/link'
import React,{useState} from 'react';
import CheckBox from '../layout/CheckBox.js';

export default function ZzimItem(){
    const [ck ,setCk] = useState(false);
    return (
      <div className={'storefeed zzimlist'}>
          <ul>
              <li>
                  <Link href="/item">
                      <a>
                        <img src="/img/storefeed_06.jpg"/>
                      </a>
                  </Link>
                  <CheckBox
                    id={"checkBox1"}
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
                        <img src="/img/storefeed_05.jpg"/>
                      </a>
                  </Link>
                  <CheckBox
                    id={"checkBox2"}
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
                        <img src="/img/storefeed_04.jpg"/>
                      </a>
                  </Link>
                  <CheckBox
                    id={"checkBox3"}
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
                        <img src="/img/storefeed_03.jpg"/>
                      </a>
                  </Link>
                  <CheckBox
                    id={"checkBox4"}
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
                        <img src="/img/storefeed_02.jpg"/>
                      </a>
                  </Link>
                  <CheckBox
                    id={"checkBox5"}
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
                        <img src="/img/storefeed_01.jpg"/>
                      </a>
                  </Link>
                  <CheckBox
                    id={"checkBox6"}
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
                        <img src="/img/storefeed_05.jpg"/>
                      </a>
                  </Link>
                  <CheckBox
                    id={"checkBox7"}
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
                        <img src="/img/storefeed_06.jpg"/>
                      </a>
                  </Link>
                  <CheckBox
                    id={"checkBox8"}
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
          </ul>
      </div>
    );
  }
