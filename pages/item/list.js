
import Layout from '../../layout/Layout'
import Link from 'next/link'
import LabelInput from '../../layout/LabelInput'
export default function Main(){
  return (
    <Layout>
        <div className={'content_box'}>
            아이템페이지
        </div>
        <LabelInput/>
        <Link href='/menu'>이동</Link>
    </Layout>
  )
}
