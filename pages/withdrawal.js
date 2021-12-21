import TitleLayout from '../layout/TitleLayout'
import Link from 'next/link'
import OsbinModal from '../layout/OsbinModal';

export default function Withdrawal(){
    return (
        <TitleLayout>
            <div className={'pagetit_div'}>
              <h1 className={'page_tit'}>WITHDRAWAL</h1>
            </div>
            <ul className={'withdrawal_form'}>
              <li>
                <p>
                  비밀번호
                </p>
                <input type="password"/>
              </li>
              <li>
                <p>
                  비밀번호 확인
                </p>
                <input type="password"/>
              </li>
              <li>
                <p>
                  탈퇴 시 유의사항
                </p>
                <div className={'withdrawal_note'}>
                  오스빈 회원 탈퇴 유의사항입니다.
                </div>
              </li>
              <li>
              <div className={'member_del_ck'}>
                <input type="checkbox" id="withdrawal_ck" />
                <label htmlFor="withdrawal_ck">
                  안내 사항을 모두 확인하였으며, 이에 동의합니다.
                </label>
              </div>
              </li>
            </ul>

            <div className={'withdrawal_btn_div'}>
              <OsbinModal
                title=""
                bnt_title ="탈퇴하기"
                class_name={"withdrawal_btn"}
              >
              </OsbinModal>
            </div>
        </TitleLayout>
    )
}
