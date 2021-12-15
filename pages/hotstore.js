import Link from 'next/link'

export default function HotStore(){
    return (
      <div className={'storefeed zzimlist searchlist'}>
            <ul className={'hot_list'}>
                <li>
                    <p className={'hot_num'}>1</p>
                    <Link href="/">
                        <a className={'hotstore'}>
                        <div className={'hotstoreimg'}>
                            <img src="/img/shop_01.jpg" />
                        </div>
                        <p className={'hotkw'}>오스빈빈티지</p>
                        </a>
                    </Link>
                </li>
                <li>
                    <p className={'hot_num'}>2</p>
                    <Link href="/">
                        <a className={'hotstore'}>
                            <div className={'hotstoreimg'}>
                                <img src="/img/shop_02.jpg" />
                            </div>
                            <p className={'hotkw'}>페이지원</p>
                        </a>
                    </Link>
                    
                </li>
                <li>
                    <p className={'hot_num'}>3</p>
                    <Link href="/">
                        <a className={'hotstore'}>
                            <div className={'hotstoreimg'}>
                                <img src="/img/shop_03.jpg" />
                            </div>
                            <p className={'hotkw'}>옴니피플</p>
                        </a>
                    </Link>
                    
                </li>
                <li>
                    <p className={'hot_num'}>4</p>
                    <Link href="/">
                        <a className={'hotstore'}>
                            <div className={'hotstoreimg'}>
                                <img src="/img/shop_04.jpg" />
                            </div>
                            <p className={'hotkw'}>굿럭차차</p>
                        </a>
                    </Link>
                </li>
                <li>
                    <p className={'hot_num'}>5</p>
                    <Link href="/">
                        <a className={'hotstore'}>
                            <div className={'hotstoreimg'}>
                                <img src="/img/shop_05.jpg" />
                            </div>
                            <p className={'hotkw'}>빈티지앤</p>
                        </a>
                    </Link>
                    
                </li>
                <li>
                    <p className={'hot_num'}>6</p>
                    <Link href="/">
                        <a className={'hotstore'}>
                            <div className={'hotstoreimg'}>
                                <img src="/img/shop_06.jpg" />
                            </div>
                            <p className={'hotkw'}>As you like</p>
                        </a>
                    </Link>
                    
                </li>
                <li>
                    <p className={'hot_num'}>7</p>
                    <Link href="/">
                        <a className={'hotstore'}>
                            <div className={'hotstoreimg'}>
                                <img src="/img/shop_01.jpg" />
                            </div>
                            <p className={'hotkw'}>라보 빈티지</p>
                        </a>
                    </Link>
                    
                </li>
                <li>
                    <p className={'hot_num'}>8</p>
                    <Link href="/">
                        <a className={'hotstore'}>
                            <div className={'hotstoreimg'}>
                                <img src="/img/shop_02.jpg" />
                            </div>
                            <p className={'hotkw'}>빈티지무무</p>
                        </a>
                    </Link>
                </li>
                <li>
                    <p className={'hot_num'}>9</p>
                    <Link href="/">
                        <a className={'hotstore'}>
                            <div className={'hotstoreimg'}>
                                <img src="/img/shop_03.jpg" />
                            </div>
                            <p className={'hotkw'}>순수빈티지</p>
                        </a>
                    </Link>
                </li>
                <li>
                    <p className={'hot_num'}>10</p>
                    <Link href="/">
                        <a className={'hotstore'}>
                            <div className={'hotstoreimg'}>
                                <img src="/img/shop_04.jpg" />
                            </div>
                            <p className={'hotkw'}>빈티지율</p>
                        </a>
                    </Link>
                </li>
            </ul>
      </div>
    );
  }