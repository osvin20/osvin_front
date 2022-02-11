import TitleLayout from "../layout/TitleLayout";
import Link from "next/link";
import {useRouter} from 'next/router'
import {useEffect,useState} from 'react';
import Swal from 'sweetalert2'
import {useDispatch } from 'react-redux';
import axios from 'axios';

export default function PostWrite({query}) {
  const {it_id} = query;
  const [item ,setItem] = useState([]);
  const router = useRouter();
  const useChange = (init) =>{
    const [value,setValue] = useState(init);
    const onChange = (e) =>{
      setValue(e.target.value);
    }
    return {onChange,value}
  }
  useEffect(() =>{
    if(it_id == "" || typeof it_id != "string"){
      Swal.fire("선택된 상품이 없습니다.")
      router.back();
      return false;
    }
    axios.get(process.env.api+"Item/Info/"+it_id,{
      params: {
        mb_token:localStorage.mb_token
      }
    }).then((res)=>{
      if(res.data.state){
        setItem(res.data.data);
      }
    }).catch((error)=> {
    });
  },[]);
  return (
    <TitleLayout>
      <div className={'pagetit_div'}>
        <h1 className={"page_tit"}>POST</h1>
      </div>
      <div className={"qnawrite"}>
        <div className={"qnaitem"}>
          <div className={"qnaitem_img"}>
            <img
              src ={
                item.it_img1 != ''?
                process.env.domain+'data/item/'+item.it_img1:
                "/img/no_img.png"
              }
              onError={(e)=>{e.target.src =  "/img/no_img.png"}}
            />
          </div>
          <div>
            <p>오스빈스토어</p>
            <span className={"extra_bold"}>도리 믹스 박시 핏 니트</span>
          </div>
        </div>
        <div className={"qna_sel qna_input qna_txt"}>
          <p className={"qna_tit"}>내용</p>
          <div>
            <textarea/>
          </div>
        </div>
        <div className={"qna_sel qna_input rv_flie"}>
          <p className={"qna_tit"}>사진 첨부
            <span> (최대 5장)</span>
          </p>
          <input type="file" id="rv_file" />
          <label htmlFor="rv_file">첨부하기</label>
        </div>
        <div className={"file_thumb"}>
          <div>
            <img src="img/item01.jpg" />
          </div>
          <div>
            <img src="img/item02.jpg" />
          </div>
          <div>
            <img src="img/item01.jpg" />
          </div>
          <div>
            <img src="img/item02.jpg" />
          </div>
          <div>
            <img src="img/item01.jpg" />
          </div>
        </div>
        <div className={"qna_btn rv_btn post_btn"}>
          <Link href="/">
            <a>완료</a>
          </Link>
        </div>
      </div>
    </TitleLayout>
  );
}
PostWrite.getInitialProps = async ({ req ,query }) => {
  return {query}
}
