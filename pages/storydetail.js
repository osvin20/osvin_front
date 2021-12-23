
import TitleLayout from '../layout/TitleLayout'
import Link from 'next/link'

export default function StoreDetail(){
    return (
        <TitleLayout>
            <div className={'pagetit_div'}>
              <h1 className={'page_tit'}>STORY</h1>
            </div>
            <div className={'borderfix'}></div>
            <div className={'story_detail'}>
              <div className={'post_content'}>
                  <div className={'rv_prof'}>
                    <Link href="/userfeed">
                      <a className={'story_info'}>
                        <img src="/img/prof_04.jpg"/>
                        <div>
                            <p>오스빈스토어</p>
                            <span>2021년 8월 20일</span>
                        </div>
                      </a>
                    </Link>
                  </div>
                  <div className={'post_txt story_content'}>
                      맨살에 착용해도 아주 부드럽고 포근하게 감기는 촉감으로 피부가 예민하신 분들도 부담없이 착용하실 수 있어요~! 루즈한 핏이지만 부해보이지 않고 여리여리하게 떨어지는 핏감이고 V넥이 깊게 파이지 않아서 단독으로도 부담 없었어요:) 보온성이 정말 뛰어나서 하나만 입어도 따뜻 포근 그 자체입니다~!
                      <img src="img/item02.jpg"/>
                  </div>
              </div>
            </div>

        </TitleLayout>
    )
}
