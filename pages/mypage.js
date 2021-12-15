import SubLayout from "../layout/SubLayout";
import Link from "next/link";
import OsbinModal from "../layout/OsbinModal";

export let txt1 = "로그아웃 하시겠습니까?";
export default function MyPage() {
  return (
    <SubLayout>
      <div className={"mypage_div"}>
        <img src="/img/prof_01.jpg" className={"mypage_prof"} />
        <div>
          <p className={"user_name"}>sohee1203</p>
          <Link href="/myinfo">
            <a className={"info_btn"}>회원정보수정</a>
          </Link>
        </div>
      </div>
      <div className={"borderbt"}>
        <ul className={"mypage_ico"}>
          <li>
            <Link href="/orderlist">
              <a>
                <div>
                  <img src="/img/delivery.png" />
                </div>
                <p>주문/배송</p>
              </a>
            </Link>
          </li>
          <li>
            <Link href="/coupon">
              <a>
                <div>
                  <img src="/img/coupon.png" />
                </div>
                <p>쿠폰</p>
              </a>
            </Link>
          </li>
          <li>
            <Link href="/point">
              <a>
                <div>
                  <img src="/img/point.png" />
                </div>
                <p>포인트</p>
              </a>
            </Link>
          </li>
          <li>
            <Link href="/myinfo">
              <a>
                <div>
                  <img src="/img/gift.png" />
                </div>
                <p>기부하기</p>
              </a>
            </Link>
          </li>
        </ul>
      </div>
      <div className={"mypage_list"}>
        <ul>
          <li>
            <p>내 활동</p>
            <ul>
              <li>
                <Link href="/followingstore">
                  <a>팔로잉 스토어</a>
                </Link>
              </li>
              <li>
                <Link href="/followfeed">
                  <a>팔로잉 피드</a>
                </Link>
              </li>
              <li>
                <Link href="/qnalist">
                  <a>문의내역</a>
                </Link>
              </li>
            </ul>
          </li>
          <li>
            <p>설정</p>
            <ul>
              <li>
                <Link href="/address_list">
                  <a>배송지 등록</a>
                </Link>
              </li>
              <li>
                <Link href="/cardlist">
                  <a>신용카드 관리</a>
                </Link>
              </li>
              <li>
                <Link href="/setting">
                  <a>알림 설정</a>
                </Link>
              </li>
              <li>
                <Link href="/">
                  <a>추적 허용 설정</a>
                </Link>
              </li>
              <li>
                <OsbinModal
                  title=""
                  bnt_title="로그아웃"
                >
                  <p className={'modal_txt'}>{txt1}</p>
                </OsbinModal>
              </li>
            </ul>
          </li>
          <li>
            <p>고객센터</p>
            <ul>
              <li>
                <Link href="/notice_event">
                  <a>공지사항/이벤트</a>
                </Link>
              </li>
              <li>
                <Link href="/faq">
                  <a>자주 묻는 질문</a>
                </Link>
              </li>
              <li>
                <Link href="/">
                  <a>이용약관</a>
                </Link>
              </li>
              <li>
                <Link href="/">
                  <a>개인정보처리방침</a>
                </Link>
              </li>
            </ul>
          </li>
        </ul>
        <div className={"service"}>
          <p>상담시간</p>
          <ul>
            <li>
              <img src="/img/call.png" />
              <p>@오스빈</p>
              <span>월~금 9:00~18:00</span>
            </li>
            <li>
              <img src="/img/chat2.png" />
              <p>010-0000-0000</p>
              <span>월~금 9:00~18:00</span>
            </li>
          </ul>
        </div>
      </div>
    </SubLayout>
  );
}
