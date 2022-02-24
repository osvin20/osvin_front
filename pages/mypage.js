import SubLayout from "../layout/SubLayout";
import Link from "next/link";
import OsbinModal from "../layout/OsbinModal";
import {useRouter} from 'next/router'
import {useEffect,useState,useRef } from 'react';
import axios from 'axios';

export default function MyPage() {
  const router = useRouter()
  // 스토리지 로드
  const [mb_id , setMb_id] = useState('');
  const [userImg , setUserImg] = useState('/img/no_prof.png');
  useEffect(() => {
    setMb_id(localStorage.mb_id);
    axios.get(process.env.api+"Member/Info",{
      params: {
        mb_token:localStorage.mb_token
      }
    }).then((res)=>{
      if(res.data.state){
        console.log(res.data.data.mb_img);
        setUserImg(res.data.data.mb_img);
      }
    }).catch((error)=> {
    });
  },[]);

  return (
    <SubLayout loginCheck={true}>
      <div className={"mypage_div"}>
        <div className={"mypage_prof"}>
          <img
            src={userImg}
            onError={(e)=>{e.target.src = '/img/no_prof.png'}}
          />
        </div>
        <div>
          <p className={"user_name"}>{mb_id}</p>
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
            <Link href="/qnalist">
              <a>
                <div className={'bell_ico'}>
                  <img src="/img/qna.png" />
                </div>
                <p>문의내역</p>
              </a>
            </Link>
          </li>
        </ul>
      </div>
      <div className={"mypage_list"}>
        <ul>
          {/* <li>
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
            </ul>
          </li> */}
          <li>
            <p>설정</p>
            <ul>
              <li>
                <Link href="/address_list">
                  <a>배송지 등록</a>
                </Link>
              </li>
              {/* <li>
                <Link href="/cardlist">
                  <a>신용카드 관리</a>
                </Link>
              </li> */}
              {/* <li>
                <Link href="/setting">
                  <a>알림 설정</a>
                </Link>
              </li> */}
              <li>
                <OsbinModal
                  title=""
                  bnt_title ="로그아웃"
                  btn_label ="아니오"
                  dir_label ="네"
                  class_name={"cart_dir"}
                  modalFun ={()=>{router.push("/login");localStorage.clear()}}
                  modal_id={"withdrawal_modal"}
                >
                  <p className={"phone_modal"}>로그아웃 하시겠습니까?</p>
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
                <Link href="/agreement">
                  <a>이용약관</a>
                </Link>
              </li>
              <li>
                <Link href="/private">
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
              <span>월~금 10:30~18:00<br/>(점심시간 13:00~14:00)</span>
            </li>
            <li>
              <img src="/img/chat2.png" />
              <p>010-0000-0000</p>
              <span>월~금 10:30~18:00<br/>(점심시간 13:00~14:00)</span>
            </li>
          </ul>
          <p>사업자정보</p>
          <div className={"company_info"}>
            <div>
              <p>사업자번호</p>
              <span>104-81-13766</span>
            </div>
            <div>
              <p>사업자명</p>
              <span>(주)남흥</span>
            </div>
            <div>
              <p>대표자명</p>
              <span>김정규</span>
            </div>
            <div>
              <p>주소(본사)</p>
              <span>서울특별시 중구 소월로 10, 19층(남대문로5가, 단암딜빙)</span>
            </div>
            <div>
              <p>주소(이커머스 사업부)</p>
              <span>경기도 고양시 킨텍스로 255 일산 디엠시티 스카이뷰 104동 1410호</span>
            </div>
          </div>
        </div>
      </div>
    </SubLayout>
  );
}
