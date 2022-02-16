import TitleLayout from "../layout/TitleLayout";
import Link from "next/link";
import {useRouter} from 'next/router'
import {useEffect,useState,useRef} from 'react';
import Swal from 'sweetalert2'
import {useDispatch } from 'react-redux';
import axios from 'axios';

export default function PostWrite({query}) {
  const {it_id} = query;
  const [item ,setItem] = useState([]);
  const [img,setImg] = useState(["img/no_img.png","img/no_img.png","img/no_img.png","img/no_img.png","img/no_img.png"]);
  const router = useRouter();
  const refForm = useRef();
  const useChange = (init) =>{
    const [value,setValue] = useState(init);
    const onChange = (e) =>{
      setValue(e.target.value);
    }
    return {onChange,value}
  }
  const imgPreView = (e,key) =>{
    const fileBlob = e.target.files[0]
    const reader = new FileReader();
    if(fileBlob){
      reader.readAsDataURL(fileBlob);
    }

    return new Promise((resolve) => {
      reader.onload = () => {
        const tempImg = img;
        tempImg[key] = reader.result;
        setImg(tempImg.filter(
          val=>true
        ));

        resolve();
      };
    });
  }
  const submitForm = () =>{
    for(var i = 0; i < img.length; i++){

    }
    const form = new FormData(refForm.current);
    form.append('mb_token',localStorage.mb_token);
    form.append('mb_sell_id',item.mb_id);
    form.append('it_id',item.it_id);
    axios.post(process.env.api+"Feed/Add",form
    ).then((res)=>{
      if(res.data.state){
        Swal.fire(res.data.msg);
        router.replace('/myfeed');
      }else{
        Swal.fire(res.data.msg);
      }
    }).catch((error)=> {

    });
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
      <form ref={refForm}>
        <div className={"qnawrite"}>
          <div className={"qnaitem"}>
            <div className={"qnaitem_img"}>
              <img
                src ={
                  item.it_img1 != ''?
                  process.env.domain+'data/item/'+item.it_img1:
                  "/img/no_img.png"
                }
                onError={(e)=>{e.target.src = "/img/no_img.png"}}
              />
            </div>
            <div>
              <p>{item.mb_nick}</p>
              <span className={"extra_bold"}>{item.it_name}</span>
            </div>
          </div>
          <div className={"qna_sel qna_input qna_txt"}>
            <p className={"qna_tit"}>내용</p>
            <div>
              <textarea name={'wr_content'} placeholder="내용을 입력하세요."/>
            </div>
          </div>
          <div className={"qna_sel qna_input rv_flie"}>
            <p className={"qna_tit"}>사진 첨부
              <span> (최대 5장)</span>
            </p>

          </div>
          <div className={"file_thumb"}>
            {img.map((val,key) =>(
              <div key={key}>
                <label htmlFor={"bf_file"+key}>
                  <img
                    src={val}
                  />
                  <input
                    type="file"
                    id={"bf_file"+key}
                    onChange={(e)=>imgPreView(e,key)}
                    name='bf_file[]'
                  />
                </label>
              </div>
            ))}
          </div>
          <div className={"qna_btn rv_btn post_btn"} onClick={submitForm}>
            <a>완료</a>
          </div>
        </div>
      </form>
    </TitleLayout>
  );
}
PostWrite.getInitialProps = async ({ req ,query }) => {
  return {query}
}
