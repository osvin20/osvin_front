import TitleLayout from '../layout/TitleLayout'
import Link from 'next/link'

export default function Category(){
    return (
        <TitleLayout>
            <div className={'pagetit_div'}>
              <h1 className={'page_tit'}>CATEGORY</h1>
            </div>
            <ul className={'cate_list'}>
                <li>
                    <Link href="/itemlist">
                        <a>
                            <div className={'cate_img'}>
                                <img className={'cate_img'} src="/img/cate01.jpg"/>
                            </div>
                            <p className={'cate_tit'}>전체</p>
                        </a>
                    </Link>
                </li>
                <li>
                    <Link href="/itemlist?tabnumber=1">
                        <a>
                            <div className={'cate_img'}>
                                <img className={'cate_img'} src="/img/cate02.jpg"/>
                            </div>
                            <p className={'cate_tit'}>의류</p>
                        </a>
                    </Link>
                </li>
                <li>
                    <Link href="/itemlist?tabnumber=2">
                        <a>
                            <div className={'cate_img'}>
                                <img className={'cate_img'} src="/img/cate03.jpg"/>
                            </div>
                            <p className={'cate_tit'}>홈웨어</p>
                        </a>
                    </Link>
                </li>
                <li>
                    <Link href="/itemlist?tabnumber=3">
                        <a>
                            <div className={'cate_img'}>
                                <img className={'cate_img'} src="/img/cate04.jpg"/>
                            </div>
                            <p className={'cate_tit'}>웨딩</p>
                        </a>
                    </Link>
                </li>
                <li>
                    <Link href="/itemlist?tabnumber=4">
                        <a>
                            <div className={'cate_img'}>
                                <img className={'cate_img'} src="/img/cate05.jpg"/>
                            </div>
                            <p className={'cate_tit'}>패션잡화</p>
                        </a>
                    </Link>
                </li>
                <li>
                    <Link href="/itemlist?tabnumber=5">
                        <a>
                            <div className={'cate_img'}>
                                <img className={'cate_img'} src="/img/cate06.jpg"/>
                            </div>
                            <p className={'cate_tit'}>쥬얼리/시계</p>
                        </a>
                    </Link>
                </li>
                <li>
                    <Link href="/itemlist?tabnumber=6">
                        <a>
                            <div className={'cate_img'}>
                                <img className={'cate_img'} src="/img/cate07.jpg"/>
                            </div>
                            <p className={'cate_tit'}>소품/인형</p>
                        </a>
                    </Link>
                </li>
                <li>
                    <Link href="/itemlist?tabnumber=7">
                        <a>
                            <div className={'cate_img'}>
                                <img className={'cate_img'} src="/img/cate08.jpg"/>
                            </div>
                            <p className={'cate_tit'}>카메라/음향</p>
                        </a>
                    </Link>
                </li>
                <li>
                    <Link href="/itemlist?tabnumber=8">
                        <a>
                            <div className={'cate_img'}>
                                <img className={'cate_img'} src="/img/cate09.jpg"/>
                            </div>
                            <p className={'cate_tit'}>문구/팬시</p>
                        </a>
                    </Link>
                </li>
                <li>
                    <Link href="/itemlist?tabnumber=9">
                        <a>
                            <div className={'cate_img'}>
                                <img className={'cate_img'} src="/img/cate10.jpg"/>
                            </div>
                            <p className={'cate_tit'}>가구</p>
                        </a>
                    </Link>
                </li>
                <li>
                    <Link href="/itemlist?tabnumber=10">
                        <a>
                            <div className={'cate_img'}>
                                <img className={'cate_img'} src="/img/cate11.jpg"/>
                            </div>
                            <p className={'cate_tit'}>패브릭</p>
                        </a>
                    </Link>
                </li>
            </ul>
        </TitleLayout>
    )
}
