import TitleLayout from "../layout/TitleLayout";
import OsbinModal from "../layout/OsbinModal";

export default function CardForm() {
  return (
    <TitleLayout>
      <div className={'pagetit_div'}>
        <h1 className={'page_tit'}>MY CARD</h1>
      </div>
      <div className={"cardform"}>
        <div className={"cardform_txt"}>
          <p>카드를 등록하고 간편하게 결제를 완료하세요!</p>
          <span>체크카드, 신용카드 모두 가능합니다.</span>
        </div>
        <div className={"cardform_div"}>
          <div className={"cardnum"}>
            <p>카드번호</p>
            <div>
              <input type="text" />
              <input type="text" />
              <input type="password" />
              <input type="password" />
            </div>
          </div>
          <div className={"cardnum cardperiod"}>
            <p>유효기간</p>
            <div>
              <input type="password" />
            </div>
            <span>월/년도(MMYY) 순서로 4자리 숫자</span>
          </div>
          <div className={"cardnum cardperiod"}>
            <p>CVC</p>
            <div>
              <input type="password" />
            </div>
            <span>카드 뒷면 3자리 숫자</span>
          </div>
          <div className={"cardnum cardperiod"}>
            <p>비밀번호 앞 2자리</p>
            <div>
              <input type="password" />
            </div>
          </div>
        </div>
        <div className={"easypay"}>
          <div className={"easypay_all"}>
            <input type="checkbox" id="all_agree" />
            <label htmlFor="all_agree">약관 전체동의</label>
          </div>
          <div>
            <input type="checkbox" id="easypay2" />
            <label htmlFor="easypay2">오스빈 간편결제 이용약관 동의</label>
            <OsbinModal
              title=""
              bnt_title="보기"
              class_name={"modal_btn"}
            >
              <p>{txt1}</p>
            </OsbinModal>
          </div>
          <div>
            <input type="checkbox" id="easypay3" />
            <label htmlFor="easypay3">전자금융 거래 이용약관</label>
            <OsbinModal
              title=""
              bnt_title="보기"
              class_name={"modal_btn"}
            >
              <p>{txt1}</p>
            </OsbinModal>
          </div>
          <div>
            <input type="checkbox" id="easypay4" />
            <label htmlFor="easypay4">개인정보 수집 및 이용 동의</label>
            <OsbinModal
              title=""
              bnt_title="보기"
              class_name={"modal_btn"}
            >
              <p>{txt1}</p>
            </OsbinModal>
          </div>
          <div>
            <input type="checkbox" id="easypay5" />
            <label htmlFor="easypay5">개인정보 제3자 제공 및 위탁 동의</label>
            <OsbinModal
              title=""
              bnt_title="보기"
              class_name={"modal_btn"}
            >
            </OsbinModal>
          </div>
        </div>
      </div>
    </TitleLayout>
  );
}
