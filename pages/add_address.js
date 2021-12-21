import TitleLayout from '../layout/TitleLayout'
import Link from 'next/link'

export default function Address(){
    return (
        <TitleLayout>
            <div className={'pagetit_div'}>
              <h1 className={'page_tit'}>ADDRESS</h1>
            </div>
            <Link href="/address_form">
                <a className={'add_address'}>
                    <div className={'plus_ico'}>
                        <img src="/img/plus.png" />
                    </div>
                    <p>
                        상품을 받으실 배송지를 미리 등록해보세요!
                    </p>
                </a>
            </Link>
        </TitleLayout>
    )
}
