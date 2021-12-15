
import TitleLayout from '../layout/TitleLayout'
import Link from 'next/link'

export default function RvComplete(){
    return (
        <div className="rvcomplete">
          <div>
            <img src="img/check.png"/>
            <p className={'extra_bold'}>리뷰작성 완료</p>
            <p className={'rvcomplete_txt'}>리뷰 작성으로<br/>피드추천권 2개가 지급됩니다.</p>
            <Link href="/review_detail">
              <a className={'rv_dir'}>
                작성한 리뷰 보기
              </a>
            </Link>
          </div>
        </div>
    )
}
