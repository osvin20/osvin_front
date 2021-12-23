import Link from 'next/link'

export default function StoreStory(){
    return (
      <ul className={'storestory'}>
        <li>
        <Link href='/storydetail'>
          <a>
            <div className={'story_info'}>
                <img src="/img/prof_04.jpg"/>
                <div>
                    <p>오스빈스토어</p>
                    <span>2021년 8월 20일</span>
                </div>
            </div>
            <p className={'story_txt'}>
            전 세계적으로 탄소배출 감소를 위해 노력하고 친환경이 대세인만큼 착한 소비운동에 동참할 수 있습니다. 국내 최대 규모의 온라인 빈티지 쇼핑몰에서 함께하세요!
            </p>
            <div className={'story_img'}>
                <div>
                    <img src="/img/story01.jpg"/>
                </div>
                <div>
                    <img src="/img/story02.jpg"/>
                </div>
                <div>
                    <img src="/img/story03.jpg"/>
                </div>
                <div>
                    <img src="/img/story04.jpg"/>
                </div>
            </div>
          </a>
        </Link>  
        </li>
        <li>
            <div className={'story_info'}>
                <img src="/img/prof_04.jpg"/>
                <div>
                    <p>오스빈스토어</p>
                    <span>2021년 8월 20일</span>
                </div>
            </div>
            <p className={'story_txt'}>
            전 세계적으로 탄소배출 감소를 위해 노력하고 친환경이 대세인만큼 착한 소비운동에 동참할 수 있습니다. 국내 최대 규모의 온라인 빈티지 쇼핑몰에서 함께하세요!
            </p>
            <div className={'story_img'}>
                <div>
                    <img src="/img/story01.jpg"/>
                </div>
                <div>
                    <img src="/img/story02.jpg"/>
                </div>
                <div>
                    <img src="/img/story03.jpg"/>
                </div>
                <div>
                    <img src="/img/story04.jpg"/>
                </div>
            </div>
        </li>
      </ul>
    );
  }
