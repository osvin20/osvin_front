import MainLayout from "../layout/MainLayout";
import Link from "next/link";
import NumberInput from "../layout/NumberInput";
import styled from "styled-components";
import { useSelector, useDispatch } from 'react-redux';
import {setTabNumber} from '../store/modules/tab_number';


export default function Main() {
  const dispatch = useDispatch();
  return (
    <MainLayout pages={"home"}>
      <Link href={'/campaign'}>
        <a className={"content_box"}>
          <img src="/img/main_banner_01.jpg" />
          <div className={"main_banner_txt"}>
            <p>
              날이 갈수록 나빠지는 지구 생태계
              <br />
              현명한 소비습관으로 환경을 지켜주세요!
            </p>
            <div className={"total_count"}>
              누적 판매량
              <span className={"extra_bold"}>589,881</span>개
            </div>
          </div>
        </a>
      </Link>
      <ul className={"feed_cate"}>
        <li onClick={()=>dispatch(setTabNumber(0))}>
          <Link href="/feed">
            <a>판매스토어 피드</a>
          </Link>
        </li>
        <li onClick={()=>dispatch(setTabNumber(1))}>
          <Link href="/feed">
            <a>월간 인기피드</a>
          </Link>
        </li>
        <li onClick={()=>dispatch(setTabNumber(2))}>
          <Link href="/feed">
            <a>전체 피드</a>
          </Link>
        </li>
        <li onClick={()=>dispatch(setTabNumber(3))}>
          <Link href="/store">
            <a>오스빈 피드</a>
          </Link>
        </li>
      </ul>
      <div className={"banner_div"}>
        <div>
          <Link href="/itemlist">
            <a>
              <img className={"banner_img"} src="/img/banner_01.jpg" />
              <p>상품보러 가기</p>
              <img className={"arrow"} src="/img/arrow_01.png" />
            </a>
          </Link>
        </div>
      </div>
      <div className={"main_offshop"}>
        <h3 className={"main_tit"}>
          OFFLINE SHOP
          <Link href="/offlineshop">
            <a>
              매장위치보기
              <img src="/img/arrow_02.png" />
            </a>
          </Link>
        </h3>
        <ul className={"offshop offshop_list"}>
          <li>
            <Link href="/store">
              <a>
                <div>
                  <img src="/img/off_shop_01.jpg"/>
                </div>
                <p className={"offshop_name"}>VINTAGE STORE</p>
                <p className={"off_address"}>
                  부산시 금정구 장전3동 장전로 12번길 54 지하1층
                </p>
              </a>
            </Link>
          </li>
          <li>
            <Link href="/store">
              <a>
                <div>
                  <img src="/img/off_shop_03.jpg"/>
                </div>
                <p className={"offshop_name"}>VINTAGE STORE</p>
                <p className={"off_address"}>
                  부산시 금정구 장전3동 장전로 12번길 54 지하1층
                </p>
              </a>
            </Link>
          </li>
          <li>
            <Link href="/store">
              <a>
                <div>
                  <img src="/img/off_shop_02.jpg"/>
                </div>
                <p className={"offshop_name"}>VINTAGE STORE</p>
                <p className={"off_address"}>
                  부산시 금정구 장전3동 장전로 12번길 54 지하1층
                </p>
              </a>
            </Link>
          </li>
        </ul>
      </div>
      <div className={"main_offshop"}>
        <h3 className={"main_tit"}>YOUTUBE
        <Link href="/youtube">
          <a>
            채널 바로가기
            <img src="/img/arrow_02.png" />
          </a>
        </Link>
        </h3>
        <ul className={"offshop ytblist"}>
          <li>
            <Link href="/">
              <a>
                <img src="/img/ytb_01.jpg" />
              </a>
            </Link>
          </li>
          <li>
            <Link href="/">
              <a>
                <img src="/img/ytb_02.jpg" />
              </a>
            </Link>
          </li>
        </ul>
      </div>
      <div className={"main_offshop"}>
        <h3 className={"main_tit"}>
          오스빈 SPECIAL EVENT
          <Link href="/notice_event?tabnumber=1">
            <a>
              이벤트 모두보기
              <img src="/img/arrow_02.png" />
            </a>
          </Link>
        </h3>
        <ul className={"offshop offshop_list"}>
          <li>
            <Link href="/event_detail">
              <a>
              <div>
                <img src="/img/event_01.jpg"/>
              </div>
                <p className={"offshop_name"}>굿바이 어텀 50% 세일</p>
              </a>
            </Link>
          </li>
          <li>
            <Link href="/event_detail">
              <a>
              <div>
                <img src="/img/event_02.jpg"/>
              </div>
                <p className={"offshop_name"}>가을 신상 20% 할인</p>
              </a>
            </Link>
          </li>
          <li>
            <Link href="/event_detail">
              <a>
              <div>
                <img src="/img/event_01.jpg"/>
              </div>
                <p className={"offshop_name"}>굿바이 어텀 50% 세일</p>
              </a>
            </Link>
          </li>
        </ul>
      </div>
      <div className={"eco_banner"}>
        <img src="/img/eco_banner.jpg" />
      </div>
      <div className={"donation_banner"}>
        <Link href="/donation">
          <a>
            <p>오늘의 스타일은 빈티지 기부현황</p>
            <img src="/img/arrow_03.png" />
          </a>
        </Link>
      </div>
    </MainLayout>
  );
}
