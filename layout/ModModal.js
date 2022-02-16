import Link from 'next/link'
import OsbinModal from "./OsbinModal";
import {useRouter} from 'next/router'

export let txt1 =
  "리뷰를 삭제하시겠습니까?";
export default function ModModal({wr_id}){
    const router = useRouter()
    return (
        <div className={'modification'}>
          <Link href={'/post_update?wr_id='+wr_id}>
            <a className={'mod_dir'}>수정</a>
          </Link>
          <OsbinModal
            title=""
            bnt_title ="삭제"
            class_name={"del_btn"}
            btn_label ="아니오"
            dir_label ="네"
            modalFun ={()=>router.push("/userfeed")}
            modal_id={"withdrawal_modal"}
          >
            <p className={'modal_txt'}>{txt1}</p>
          </OsbinModal>
        </div>
    )
}
