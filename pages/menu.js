
import Layout from '../layout/Layout'
import LabelInput from '../layout/LabelInput'

export default function Menu() {

    const numbers = [1, 2, 3, 4, 5];
    const names = ["이름","나이","학번","또또","내용"];

    return (
        <Layout>
            <div className={'content_box'}>
                테스트페이지
            </div>

            <input type={"button"} value={"전송"}/>
        </Layout>
    )

}
