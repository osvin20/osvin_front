import LoginTheme from "../layout/LoginTheme";
import OsbinModal from "../layout/OsbinModal";
import Link from "next/link";
import { useRouter } from "next/router";

export let txt1 = "오스빈 약관 내용이 노출됩니다.";
export let phone_num = "인증에 성공하였습니다.";
export default function Join() {
  const router = useRouter();

  return (
    <LoginTheme>
      <div className={"login_form join_form"}>
        <img
          className={"back"}
          src="/img/arrow_04.png"
          onClick={() => router.back()}
        />
        <h1>SIGN UP</h1>
        <div className={"join_form_div"}>
          <form>
            <div className={"input_btn"}>
              <input placeholder="이메일을 입력해주세요."></input>
              <OsbinModal
                title=""
                bnt_title ="중복확인"
                modal_id={"join_modal"}
              >
                <p className={"phone_modal"}>사용가능한 이메일입니다.</p>
              </OsbinModal>
            </div>
            <div className={"input_btn"}>
              <input placeholder="닉네임을 입력해주세요."></input>
              <OsbinModal
                title=""
                bnt_title ="중복확인"
                modal_id={"join_modal"}
              >
                <p className={"phone_modal"}>사용가능한 닉네임입니다.</p>
              </OsbinModal>
            </div>
            <div className={"input_btn input_div"}>
              <input placeholder="비밀번호를 입력해주세요."></input>
            </div>
            <div className={"input_btn input_div"}>
              <input placeholder="비밀번호를 확인해주세요."></input>
            </div>
            <div className={"input_btn input_send"}>
              <input placeholder="휴대폰 번호를 입력해주세요."></input>
              <OsbinModal
                title=""
                bnt_title ="인증번호 발송"
                modal_id={"join_modal"}
              >
                <p className={"phone_modal"}>인증번호를 발송하였습니다.</p>
              </OsbinModal>
            </div>
            <div className={"input_btn"}>
              <input placeholder="인증번호를 입력해주세요."></input>
              <OsbinModal
                title=""
                bnt_title ="인증하기"
                modal_id={"join_modal"}
              >
                <p className={"phone_modal"}>인증되었습니다.</p>
              </OsbinModal>
            </div>
            <div className={"join_agree"}>
              <div>
                <input type="checkbox" id="all_agree" />
                <label htmlFor="all_agree">약관 전체동의</label>
              </div>
              <div className={"join_view"}>
                <input type="checkbox" id="all_agree1" />
                <label htmlFor="all_agree1">(필수) 만 14세 이상입니다.</label>
                <OsbinModal
                  title=""
                  bnt_title ="보기"
                  class_name={"bnt"}
                  modal_id={"agree_modal"}
                >
                  <p className={"agree_txt"}>
                    (필수) 만 14세 이상입니다.
                  </p>
                </OsbinModal>
              </div>
              <div className={"join_view"}>
                <input type="checkbox" id="all_agree2" />
                <label htmlFor="all_agree2">
                  (필수) 서비스 이용약관에 동의
                </label>
                <OsbinModal
                  title=""
                  bnt_title ="보기"
                  class_name={"bnt"}
                  modal_id={"agree_modal"}
                >
                  <p className={"agree_txt"}>
                    (필수) 서비스 이용약관에 동의
                  </p>
                </OsbinModal>
              </div>
              <div className={"join_view"}>
                <input type="checkbox" id="all_agree3" />
                <label htmlFor="all_agree3">
                  (필수) 개인 정보 수집이용에 동의
                </label>
                <OsbinModal
                  title=""
                  bnt_title ="보기"
                  class_name={"bnt"}
                  modal_id={"agree_modal"}
                >
                  <p className={"agree_txt"}>
                    (필수) 개인 정보 수집이용에 동의
                  </p>
                </OsbinModal>
              </div>
              <div className={"join_view"}>
                <input type="checkbox" id="all_agree4" />
                <label htmlFor="all_agree4">
                  (선택) 홍보 및 마케팅 이용에 동의
                </label>
                <OsbinModal
                  title=""
                  bnt_title ="보기"
                  class_name={"bnt"}
                  modal_id={"agree_modal"}
                >
                  <p className={"agree_txt"}>
                    (선택) 홍보 및 마케팅 이용에 동의
                  </p>
                </OsbinModal>
              </div>
            </div>
          </form>
        </div>
        <div className={"join_btn"}>
          <Link href='welcome'>
            <a>
              <button>가입하기</button>
            </a>
          </Link>
        </div>
      </div>
    </LoginTheme>
  );
}
