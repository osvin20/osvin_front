import TitleLayout from "../layout/TitleLayout";
import Link from "next/link";
import React from "react";

export default function Campaign() {
  return (
    <TitleLayout>
      <div className={'pagetit_div'}>
        <h1 className={'page_tit'}>CAMPAIGN</h1>
      </div>
      <div className={'borderfix'}></div>
      <div className={'campaign'}>
          <div className={'campaign_banner'}>
            <img src="/img/eco_banner2.jpg" />
          </div>
          <div className={'eco_tit'}>
            <p><span className={'beige'}>오스빈</span>의 <span className={'green'}>친환경</span> 캠페인 이야기</p>
            <img src="/img/leaf.png" />
          </div>
          <div className={'shortborder'}></div>
          <div className={'eco_txt'}>
            <p>
            전 세계 온실가스 배출량의 10%,<br/>폐수 발생의 20%를 <span className={'green scd_bold'}>의류업계</span>가 차지하고 있습니다.
            </p>
            <div className={'eco_circle'}>
              <img src="/img/eco_img.jpg" />
            </div>
            <p>
            청바지 한 벌을 만드는데 <span className={'blue'}>물 7,000L ~ 11,000L</span>,<br/>
            티셔츠 한 장을 만드는데 <span className={'blue'}>물 2,700L</span>가 사용됩니다.<br/>
            또, 티셔츠 한장을 만드는 전체 과정동안<br/>
            최소 3.9kg의 <span className={'beige scd_bold'}>이산화탄소</span>가 발생합니다.
            </p>
            <div className={'eco_circle'}>
              <img src="/img/eco_img2.jpg" />
            </div>
            <p>
            옷을 위해 배출되는 탄소는 무려<br/><span className={'red scd_bold'}>연간 120억 톤</span>으로 전 세계 탄소 배출량의<br/>
            10%를 차지합니다. 특히 패스트패션 업계의<br/>
            경우에는 60%가 넘는 의류에 <span className={'purple scd_bold'}>폴리에스터</span>가<br/>
            사용되고 있습니다.
            </p>
            <div className={'eco_circle'}>
              <img src="/img/eco_img3.jpg" />
            </div>
            <p>
            세탁 과정 중에는 미세섬유라 불리는<br/>
            <span className={'beige scd_bold'}>미세플라스틱</span>이 배출되고,<br/>
            매년 바다에 50만톤의 플라스틱이 배출됩니다.<br/>
            하수구로 수십만개의 미세섬유가 들어가고,<br/>
            <span className={'blue scd_bold'}>바다</span>로 이어져 우리가 섭취하게 되는<br/>
            <span className={'red scd_bold'}>악순환</span>이 발생됩니다.
            </p>
            <div className={'eco_circle'}>
              <img src="/img/eco_img4.jpg" />
            </div>
            <p>
            폐기과정 중에는 <span className={'purple scd_bold'}>이산화탄소</span>와 <span className={'purple scd_bold'}>다이옥신</span> 등<br/>
            각종 유해물질도 발생됩니다.<br/>
            화학섬유는 분해되는 과정 중에 <span className={'purple scd_bold'}>메탄</span>이<br/>
            지하수로 스며들고,소각하는 경우에는<br/>
            <span className={'red scd_bold'}>독성물질</span>이 <span className={'blue scd_bold'}>대기</span>로 유입됩니다.
            </p>
          </div>
          <div className={'shortborder'}></div>
          <div className={'waste'}>
            <p className={'waste_tit scd_bold'}>의류폐기물 통계</p>
            <div className={'chart_txt'}>
              <p>의류폐기물<span></span></p>
              <p>재활용된 의류<span></span></p>
            </div>
            <div className={'chart_flex'}>
              <div className={'opacity_chart'}>
                <div className={'chart_box'}>
                  <div className={'purple_div'}>
                    <p className={'chart_num'}>60,456</p>
                  </div>
                </div>
                <p className={'chart_year'}>2020</p>
              </div>
              <div className={'yellow_chart'}>
                <div className={'chart_box'}>
                  <p className={'chart_num'}>48,416/<br/>80,176</p>
                  <div className={'yellow_div'}>
                  </div>
                </div>
                <p className={'chart_year'}>2021</p>
              </div>
            </div>
            <div className={'eco_dir'}>
              <Link href={'/'}>
                <a>오스빈과 환경지키기</a>
              </Link>
            </div>
          </div>
      </div>
    </TitleLayout>
  );
}
