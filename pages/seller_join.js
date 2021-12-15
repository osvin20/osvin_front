import LoginTheme from "../layout/LoginTheme";
import OsbinModal from "../layout/OsbinModal";
import Link from "next/link";
import { useRouter } from "next/router";

export let txt1 =
  "dddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddd";
export let phone_num = "인증에 성공하였습니다.";
export let bank_num = "계좌가 확인되었습니다.";
export default function Join() {
  const router = useRouter();

  return (
    <LoginTheme>
      <div className={"login_form join_form seller_agree_form"}>
        <img
          className={"back"}
          src="/img/arrow_04.png"
          onClick={() => router.back()}
        />
        <h1>
          SIGN UP
          <p className={"seller_span"}>
            <span>S</span>
            <span>E</span>
            <span>L</span>
            <span>L</span>
            <span>E</span>
            <span>R</span>
          </p>
        </h1>
        <div className={"join_form_div"}>
          <form>
            <p className={'sellerjoin_tit'}>기본정보</p>
            <div className={"input_btn"}>
              <input placeholder="이메일을 입력해주세요."></input>
              <button>중복확인</button>
            </div>
            <div className={"input_btn input_div"}>
              <input placeholder="비밀번호를 입력해주세요."></input>
            </div>
            <div className={"input_btn input_div"}>
              <input placeholder="비밀번호를 확인해주세요."></input>
            </div>
            <div className={"input_btn input_send"}>
              <input placeholder="휴대폰 번호를 입력해주세요."></input>
              <button>인증번호 발송</button>
            </div>
            <div className={"input_btn"}>
              <input placeholder="인증번호를 입력해주세요."></input>
              <OsbinModal
                title=""
                bnt_title="인증하기"
                class_name={"phone_num"}
              >
                <p className={"phone_modal"}>{phone_num}</p>
              </OsbinModal>
            </div>
            <p className={'sellerjoin_tit mt_tit'}>판매자 정보</p>
            <div className={"input_btn input_div"}>
              <input placeholder="사업자등록번호를 입력해주세요."></input>
            </div>
            <div className={"input_btn input_div"}>
              <input placeholder="상호명을 입력해주세요."></input>
            </div>
            <div className={"input_btn input_div"}>
              <input placeholder="대표자 성함을 입력해주세요."></input>
            </div>
            <div className={"input_btn input_div"}>
              <input placeholder="담당자 연락처를 입력해주세요."></input>
            </div>
            <p className={'sellerjoin_tit mt_tit'}>정산계좌 정보</p>
            <div className={'input_flex'}>
              <div className={"input_div"}>
                <input placeholder="예금주를 입력해주세요."></input>
              </div>
              <div className={"input_div select_div"}>
                <select>
                  <option>은행을 선택해주세요.</option>
                </select>
                <img src='img/arrow_10.png'/>
              </div>
            </div>
            <div className={"input_btn mb70"}>
              <input placeholder="계좌번호를 '-'없이 입력해주세요."></input>
              <OsbinModal
                title=""
                bnt_title="계좌확인"
                class_name={"phone_num"}
              >
                <p className={"phone_modal"}>{bank_num}</p>
              </OsbinModal>
            </div>
          </form>
        </div>
        <div className={"join_btn"}>
          <button>가입하기</button>
        </div>
      </div>
    </LoginTheme>
  );
}
