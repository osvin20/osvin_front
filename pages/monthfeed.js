import Link from 'next/link'

export default function MonthFeed(){
    return (
      <div className={'storefeed'}>
          <ul>
              <li>
                  <Link href="/post">
                      <a>
                        <img src="/img/storefeed_06.jpg"/>
                        <span className={'item_ranking extra_bold'}>1</span>
                      </a>
                  </Link>
              </li>
              <li>
                  <Link href="/post">
                      <a>
                        <img src="/img/storefeed_05.jpg"/>
                        <span className={'item_ranking extra_bold'}>2</span>
                      </a>
                  </Link>
              </li>
              <li>
                  <Link href="/post">
                      <a>
                        <img src="/img/storefeed_04.jpg"/>
                        <span className={'item_ranking extra_bold'}>3</span>
                      </a>
                  </Link>
              </li>
              <li>
                  <Link href="/post">
                      <a>
                        <img src="/img/storefeed_03.jpg"/>
                        <span className={'item_ranking extra_bold'}>4</span>
                      </a>
                  </Link>
              </li>
              <li>
                  <Link href="/post">
                      <a>
                        <img src="/img/storefeed_02.jpg"/>
                        <span className={'item_ranking extra_bold'}>5</span>
                      </a>
                  </Link>
              </li>
              <li>
                  <Link href="/post">
                      <a>
                        <img src="/img/storefeed_01.jpg"/>
                        <span className={'item_ranking extra_bold'}>6</span>
                      </a>
                  </Link>
              </li>
              <li>
                  <Link href="/post">
                      <a>
                        <img src="/img/storefeed_05.jpg"/>
                        <span className={'item_ranking extra_bold'}>7</span>
                      </a>
                  </Link>
              </li>
              <li>
                  <Link href="/post">
                      <a>
                        <img src="/img/storefeed_06.jpg"/>
                        <span className={'item_ranking extra_bold'}>8</span>
                      </a>
                  </Link>
              </li>
          </ul>
      </div>
    );
  }
