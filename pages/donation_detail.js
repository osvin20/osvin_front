import NoneLayout from '../layout/NoneLayout'
import Link from 'next/link'

export default function DonationDetail(){
    return (
        <NoneLayout>
          <div className="donation_img">
            <img src="img/donation2.jpg"/>
          </div>
          <div className={'donation_content'}>
            <h2 className={'dona_tit extra_bold'}>오스빈과 함께하는 친환경 기부 캠페인</h2>
            <p className={'donation_price extra_bold'}>
              기부금액
              <span>1,246,800</span>원
            </p>
            <div className={'dona_txt'}>
              환경부 자료에 따르면 우리나라에서 연간 약 32만 톤의 폐비닐이 발생하고 있습니다. 그러나 계속된 일회용품 사용의 증가로 비닐을 묻을 땅 조차...
            </div>
          </div>
        </NoneLayout>
    )
}
