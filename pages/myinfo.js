
import TitleLayout from '../layout/TitleLayout'
import Link from 'next/link'
import OsbinModal from "../layout/OsbinModal";

export let member_del =
"정말 탈퇴하시겠습니까?";
export let phone_num =
"인증에 성공하였습니다.";
export default function MyInfo(){
    return (
        <TitleLayout>
            <div className={'pagetit_div'}>
              <h1 className={'page_tit'}>MY INFO</h1>
            </div>
            <div className={'myinfo'}>
                <div className={'prof_pic'}>
                    <div className={'prof_change'}>
                        <img src="img/prof_01.jpg" />
                        <input type="file" id="prof_file"/>
                        <label htmlFor="prof_file">EDIT</label>
                    </div>
                    <p>기본 이미지로 변경</p>
                </div>
                <div className={'info_input'}>
                    <ul>
                        <li>
                            <p>
                                닉네임
                            </p>
                            <div>
                                <input type="text"/>
                            </div>
                        </li>
                        <li>
                            <p>
                                소개말
                            </p>
                            <div>
                                <input type="text"/>
                            </div>
                        </li>
                        <li>
                            <p>
                                비밀번호
                            </p>
                            <div>
                                <input type="password"/>
                            </div>
                        </li>
                        <li>
                            <p>
                                비밀번호 확인
                            </p>
                            <div>
                                <input type="password"/>
                            </div>
                        </li>
                        <li>
                            <p>
                                휴대폰 번호
                            </p>
                            <div>
                                <input type="text"/>
                                <button className={'send_btn'}>
                                    인증번호 전송
                                </button>
                            </div>
                        </li>
                        <li className={'phonenum'}>
                            <p>
                                휴대폰 번호
                            </p>
                            <div>
                                <input type="text"/>
                                {/* <button className={'phone_submit'}>
                                    인증하기
                                </button> */}
                                <OsbinModal
                                    title=""
                                    bnt_title="인증하기"
                                    class_name={"phone_submit"}
                                >
                                    <p className={'phone_modal'}>{phone_num}</p>
                                </OsbinModal>
                            </div>
                        </li>
                    </ul>
                    <button className={'info_submit'}>
                        수정완료
                    </button>
                    <Link href='withdrawal'>
                      <a className={'member_del'}>
                        탈퇴하기
                      </a>
                    </Link>
                </div>

            </div>
        </TitleLayout>
    )
}
