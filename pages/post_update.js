import TitleLayout from "../layout/TitleLayout";
import Link from "next/link";
import {useRouter} from 'next/router'
import {useEffect,useState,useRef} from 'react';
import Swal from 'sweetalert2'
import {useDispatch } from 'react-redux';
import axios from 'axios';

export default function PostUpdate({query}) {
  const {wr_id} = query;
  const [feed,setFeed] = useState([]);
  const [img,setImg] = useState(["img/no_img.png","img/no_img.png","img/no_img.png","img/no_img.png","img/no_img.png"]);

  const router = useRouter();
  const refForm = useRef();
  const useChange = (init) =>{
    const [value,setValue] = useState(init);
    const onChange = (e) =>{
      if(typeof(e) == "object"){
        setValue(e.target.value);
      }else{
        setValue(e);
      }
    }
    return {onChange,value}
  }
  const wr_content = useChange();
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
    const form = new FormData(refForm.current);
    form.append('mb_token',localStorage.mb_token);
    form.append('wr_id',feed.wr_id);
    axios.post(process.env.api+"Feed/Update",form
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

    axios.get(process.env.api+"Feed/Info/"+wr_id
    ).then((res)=>{
      if(res.data.state){
        setFeed(res.data.data.feed);
        wr_content.onChange(res.data.data.feed.wr_content);
        if(res.data.data.file.length > 0){
          console.log('ss')
          let temtArr = img;
          for (var i = 0; i < res.data.data.file.length; i++) {
            temtArr[i] = res.data.data.file[i].bf_file
          }
          setImg(temtArr.filter(
            val=>true
          ));
        }

      }
    }).catch((error)=> {
    });
  },[]);
  return (
    <TitleLayout>
      <div className={'pagetit_div'}>
        <h1 className={"page_tit"}>POST UPDATE</h1>
      </div>
      <form ref={refForm}>
        <div className={"qnawrite"}>
          <div className={"qna_sel qna_input rv_flie"}>
            <p className={"qna_tit"}>사진 첨부
              <span> (최대 5장)</span>
            </p>
          </div>
          <div className={"file_thumb"}>
            {img.map((val,key) =>(
              <div>
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
          <div className={'post_txt'}>
            <p>*등록된 사진변경시 이전사진은 삭제됩니다.</p>
          </div>
          <div className={"qna_sel qna_input qna_txt"}>
            <p className={"qna_tit"}>내용</p>
            <div>
              <textarea name={'wr_content'} placeholder="내용을 입력하세요." {...wr_content} />
            </div>
          </div>
          <div className={"qna_btn rv_btn post_btn"} onClick={submitForm}>
            <a>수정</a>
          </div>
        </div>
      </form>
    </TitleLayout>
  );
}
PostUpdate.getInitialProps = async ({ req ,query }) => {
  return {query}
}
