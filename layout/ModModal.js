import Link from 'next/link'
import OsbinModal from "./OsbinModal";

export let txt1 =
  "리뷰를 삭제하시겠습니까?";
export default function ModModal(){
    return (
        <div className={'modification'}>
          <Link href='/post_write'>
            <a className={'mod_dir'}>수정</a>
          </Link>
          <OsbinModal
            title=""
            bnt_title ="삭제"
            class_name={"del_btn"}
          >
            <p className={'modal_txt'}>{txt1}</p>
          </OsbinModal>
        </div>
    )
}
