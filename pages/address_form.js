import TitleLayout from '../layout/TitleLayout'
import Link from 'next/link'
import OsbinModal from "../layout/OsbinModal";
import {useRouter} from 'next/router'

export default function AddressForm(){
  const router = useRouter()
    return (
        <TitleLayout>
            <div className={'pagetit_div'}>
              <h1 className={'page_tit'}>ADDRESS</h1>
            </div>
            <div className={'address_form'}>
                <div className={'address_check'}>
                    <input type="checkbox" id="address_basic"/>
                    <label htmlFor="address_basic">기본 배송지로 설정</label>
                </div>
                <div className={'adrs_div'}>
                    <p>이름</p>
                    <div>
                        <input type="text" />
                    </div>
                </div>
                <div className={'adrs_div'}>
                    <p>휴대폰 번호</p>
                    <div>
                        <input type="text" />
                    </div>
                </div>
                <div className={'adrs_div adrs_height'}>
                    <p>주소</p>
                    <div className={'adrs_flex'}>
                        <input type="text" />
                        <button>
                            우편번호 찾기
                        </button>
                    </div>
                </div>
                <div className={'adrs_div'}>
                    <p>상세주소</p>
                    <div>
                        <input type="text" />
                    </div>
                </div>
                <div className={'adrs_div adrs_sel_div'}>
                    <p>배송메모</p>
                    <div className={'adrs_flex adrs_sel'}>
                        <select>
                            <option>
                                배송메모를 선택해주세요
                            </option>
                        </select>
                        <img src="/img/arrow_09.png" />
                    </div>
                </div>
            </div>
            <div className={'adrs_btn'}>
                <OsbinModal
                  title=""
                  bnt_title ="저장"
                  action_label ="확인"
                  modal_id={"return_modal"}
                  modalFun ={()=>router.push("/address_list")}
                >
                  <p className={"phone_modal"}>배송지 등록이 완료되었습니다.</p>
                </OsbinModal>
            </div>

        </TitleLayout>
    )
}
