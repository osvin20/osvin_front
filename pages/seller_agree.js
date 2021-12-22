import LoginTheme from "../layout/LoginTheme";
import OsbinModal from "../layout/OsbinModal";
import Link from "next/link";
import { useRouter } from "next/router";

export let txt1 =
  "dddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddd";
export let phone_num = "인증에 성공하였습니다.";
export default function SellerAgree() {
  const router = useRouter();

  return (
    <LoginTheme>
      <div className={"login_form join_form seller_agree_form"}>
        <img
          className={"back"}
          src="/img/arrow_04.png"
          onClick={() => router.back()}
        />
        <h1>SIGN UP
          <p className={'seller_span'}><span>S</span><span>E</span><span>L</span><span>L</span><span>E</span><span>R</span></p>
        </h1>
        <div className={"join_form_div seller_agree"}>
          <form>
            <div className={"join_agree"}>
              <div>
                <input type="checkbox" id="all_agree" />
                <label htmlFor="all_agree">판매자 회원 약관 전체동의</label>
              </div>
              <div className={"join_view"}>
                <input type="checkbox" id="all_agree1" />
                <label htmlFor="all_agree1">(필수) 만 14세 이상입니다.</label>
                <OsbinModal title="" bnt_title="보기" class_name={"bnt"}>
                  <p>{txt1}</p>
                </OsbinModal>
              </div>
              <div className={"join_view"}>
                <input type="checkbox" id="all_agree2" />
                <label htmlFor="all_agree2">
                  (필수) 서비스 이용약관에 동의
                </label>
                <OsbinModal title="" bnt_title="보기" class_name={"bnt"}>
                  <p>{txt1}</p>
                </OsbinModal>
              </div>
              <div className={"join_view"}>
                <input type="checkbox" id="all_agree3" />
                <label htmlFor="all_agree3">
                  (필수) 개인 정보 수집이용에 동의
                </label>
                <OsbinModal title="" bnt_title="보기" class_name={"bnt"}>
                  <p>{txt1}</p>
                </OsbinModal>
              </div>
              <div className={"join_view"}>
                <input type="checkbox" id="all_agree4" />
                <label htmlFor="all_agree4">
                  (선택) 홍보 및 마케팅 이용에 동의
                </label>
                <OsbinModal title="" bnt_title="보기" class_name={"bnt"}>
                  <p>{txt1}</p>
                </OsbinModal>
              </div>
            </div>
          </form>
        </div>
        <div className={"join_btn"}>
          <Link href='seller_join'>
            <a>
              <button>다음</button>
            </a>
          </Link>
        </div>
      </div>
    </LoginTheme>
  );
}
