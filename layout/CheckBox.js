
import styled from "styled-components";
import {useState,useEffect} from "react";

const CheckBoxInput = styled.input`
`
const BoxLabel = styled.label`
  position:relative;
  &:after{
    position: absolute;
    content: "";
    width: 100%;
    height: 100%;
    background: transparent;
    top:0;
    left:0;
    right:0;
    bottom:0;
  }
`;
const IconButton = styled.button`
  width:20%;
  font-size:15px;
`
// ----  @props -------- //
//defCk 기본값
//defVal 기본값
//onEl 상태값이 on 일때 컴포넌트
//offEl 상태값이 off 일때 컴포넌트
// id 아이디 라벨클릭을 위한
export default function CheckBox(props){
    const [ck,setCk] = useState(props.defCk);
    const [val,setVal] = useState(props.defVal);
    useEffect(()=>{
      // ex) 체크박스가 빈값일떄 "" 값으로 전송 버튼식으로 동작할떄 사용
      if(typeof props.defVal == "undefined"){
        setVal("");
      }
    },[]);

    const onchangeCk = (e) =>{
      setCk(!ck);
      if(props.onchangeHandler){
        props.onchangeHandler(e);
      }
    }

    return(
      <>
      <CheckBoxInput
        id={props.id}
        type={"checkbox"}
        value={val}
        checked={ck}
        onChange={(e)=>onchangeCk(e.target.checked)}
        onClick={()=>console.log('s')}
        {...props}
      />
      <BoxLabel htmlFor={props.id}>
        {ck?props.onEl:props.offEl}
      </BoxLabel>
      </>
    )
}
