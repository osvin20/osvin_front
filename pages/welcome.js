
import LoginTheme from '../layout/LoginTheme'
import Link from 'next/link'

export default function Welcome(){
    return (
        <LoginTheme>
            <div className={'welcome'}>
                <div className={'welcome_div'}>
                    WELCOME
                </div>
                <div>
                    <h1>
                        <span>오스빈</span>님
                    </h1>
                    <p>
                        오스빈 회원가입을 축하합니다!<br></br>
                        지금부터 오스빈의 다양한 상품을 구경하고<br></br>
                        환경캠페인에 동참해보세요!
                    </p>
                </div>
                <Link href='/'>
                        <a className={'join_start'}>
                            시작하기
                        </a>
                </Link>
            </div>
        </LoginTheme>
        
    )

}
