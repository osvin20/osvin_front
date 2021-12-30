import Link from 'next/link'

export default function MyFeed(){
    return (
      <div className={'storefeed'}>
          <ul>
              <li>
                  <Link href="/post">
                      <a>
                        <img src="/img/storefeed_02.jpg"/>
                      </a>
                  </Link>
              </li>
              <li>
                  <Link href="/post">
                      <a>
                        <img src="/img/storefeed_03.jpg"/>
                      </a>
                  </Link>
              </li>
              <li>
                  <Link href="/post">
                      <a>
                        <img src="/img/storefeed_05.jpg"/>
                      </a>
                  </Link>
              </li>
              <li>
                  <Link href="/post">
                      <a>
                        <img src="/img/storefeed_06.jpg"/>
                      </a>
                  </Link>
              </li>
              <li>
                  <Link href="/post">
                      <a>
                        <img src="/img/storefeed_04.jpg"/>
                      </a>
                  </Link>
              </li>
              <li>
                  <Link href="/post">
                      <a>
                        <img src="/img/storefeed_01.jpg"/>
                      </a>
                  </Link>
              </li>
              <li>
                  <Link href="/post">
                      <a>
                        <img src="/img/storefeed_02.jpg"/>
                      </a>
                  </Link>
              </li>
              <li>
                  <Link href="/post">
                      <a>
                        <img src="/img/storefeed_03.jpg"/>
                      </a>
                  </Link>
              </li>
          </ul>
      </div>
    );
  }
