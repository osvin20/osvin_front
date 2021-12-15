
import LoginTheme from '../layout/LoginTheme'
import Link from 'next/link'

export default function Login(){
    return (
        <LoginTheme>
            <div className={'login_form'}>
                <div className={'login_logo'}>
                    <img src="/img/logo3.png"/>
                </div>
                <form>
                    <div className={'login_input'}>
                        <input placeholder='EMAIL'></input>
                        <input placeholder='PASSWORD'></input>
                    </div>
                    <div className={'join_direct'}>
                        <div>
                            <Link href='/join'>
                                <a>
                                    회원가입
                                </a>
                            </Link>
                            <Link href='/find'>
                                <a>
                                    이메일·비밀번호 찾기
                                </a>
                            </Link>
                        </div>
                        <Link href='/seller_agree'>
                            <a>
                                판매자 입점하기
                            </a>
                        </Link>
                    </div>
                    <div className={'login_btn'}>
                        <button>
                            LOGIN
                        </button>
                    </div>
                </form>
                <div className={'social_login'}>
                    <div>
                        <span></span>
                        <p>SOCIAL LOGIN</p>
                        <span></span>
                    </div>
                    <div className={'sns_ico'}>
                        <Link href='/storestory'>
                            <a>
                            <img src="/img/kakao.png"/>
                            </a>
                        </Link>
                        <Link href='/storestory'>
                            <a>
                            <img src="/img/apple.png"/>
                            </a>
                        </Link>
                    </div>
                </div>
            </div>
        </LoginTheme>
        
    )

}
