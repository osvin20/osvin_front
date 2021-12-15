import Link from 'next/link'

export default function OsbinFeed(){
    return (
      <div className={'storefeed'}>
          <ul className={'storefeed_ul'}>
              <li>
                    <Link href="/item">
                        <a className={'storefeed_thumb'}>
                            <img src="/img/storefeed_05.jpg"/>
                        </a>
                    </Link>
              </li>
              <li>
                    <Link href="/item">
                        <a className={'storefeed_thumb'}>
                            <img src="/img/storefeed_06.jpg"/>
                        </a>
                    </Link>
              </li>
              <li>
                    <Link href="/item">
                        <a className={'storefeed_thumb'}>
                            <img src="/img/storefeed_07.jpg"/>
                        </a>
                    </Link>
              </li>
              <li>
                    <Link href="/item">
                        <a className={'storefeed_thumb'}>
                            <img src="/img/storefeed_08.jpg"/>
                        </a>
                    </Link>
              </li>
              <li>
                    <Link href="/item">
                        <a className={'storefeed_thumb'}>
                            <img src="/img/storefeed_01.jpg"/>
                        </a>
                    </Link>
              </li>
              <li>
                    <Link href="/item">
                        <a className={'storefeed_thumb'}>
                            <img src="/img/storefeed_02.jpg"/>
                        </a>
                    </Link>
              </li>
              <li>
                    <Link href="/item">
                        <a className={'storefeed_thumb'}>
                            <img src="/img/storefeed_03.jpg"/>
                        </a>
                    </Link>
              </li>
              <li>
                    <Link href="/item">
                        <a className={'storefeed_thumb'}>
                            <img src="/img/storefeed_04.jpg"/>
                        </a>
                    </Link>
              </li>
          </ul>
      </div>
    );
  }
