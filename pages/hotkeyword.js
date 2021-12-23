import Link from 'next/link'

export default function HotKeyword(){
    return (
      <div className={'storefeed zzimlist searchlist'}>
          <ul className={'hot_list'}>
            <li>
                <p className={'hot_num'}>1</p>
                <div>
                    <Link href="/search_result">
                        <a>
                            <p className={'hotkw'}>크리스마스 선물</p>
                        </a>
                    </Link>
                </div>
            </li>
            <li>
                <p className={'hot_num'}>2</p>
                <div>
                    <Link href="/search_result">
                        <a>
                            <p className={'hotkw'}>카페 인테리어 소품</p>
                        </a>
                    </Link>
                </div>
            </li>
            <li>
                <p className={'hot_num'}>3</p>
                <div>
                    <Link href="/search_result">
                        <a>
                            <p className={'hotkw'}>넥타이</p>
                        </a>
                    </Link>
                </div>
            </li>
            <li>
                <p className={'hot_num'}>4</p>
                <div>
                    <Link href="/search_result">
                        <a>
                            <p className={'hotkw'}>부모님 선물</p>
                        </a>
                    </Link>
                </div>
            </li>
            <li>
                <p className={'hot_num'}>5</p>
                <div>
                    <Link href="/search_result">
                        <a>
                            <p className={'hotkw'}>엔틱 의자</p>
                        </a>
                    </Link>
                </div>
            </li>
            <li>
                <p className={'hot_num'}>6</p>
                <div>
                    <Link href="/search_result">
                        <a>
                            <p className={'hotkw'}>크리스마스 선물</p>
                        </a>
                    </Link>
                </div>
            </li>
            <li>
                <p className={'hot_num'}>7</p>
                <div>
                    <Link href="/search_result">
                        <a>
                            <p className={'hotkw'}>카페 인테리어 소품</p>
                        </a>
                    </Link>
                </div>
            </li>
            <li>
                <p className={'hot_num'}>8</p>
                <div>
                    <Link href="/search_result">
                        <a>
                            <p className={'hotkw'}>넥타이</p>
                        </a>
                    </Link>
                </div>
            </li>
            <li>
                <p className={'hot_num'}>9</p>
                <div>
                    <Link href="/search_result">
                        <a>
                            <p className={'hotkw'}>부모님 선물</p>
                        </a>
                    </Link>
                </div>
            </li>
            <li>
                <p className={'hot_num'}>10</p>
                <div>
                    <Link href="/search_result">
                        <a>
                            <p className={'hotkw'}>엔틱 의자</p>
                        </a>
                    </Link>
                </div>
            </li>
        </ul>
      </div>
    );
  }
