
import styled from "styled-components";
import {useState,useEffect} from "react";

const NumInput = styled.input`
  width:50%;
  font-size:14px;
  text-align: center;
`
const Box = styled.div`
  width:100px;
  display:flex;
  font-family: "NanumSquareR";
  justify-content: flex-end;
`
const IconButton = styled.button`
  width:20px;
  height:20px;
  font-size:15px;
  background: #ca8756;
  border-radius: 100%;
  color:#fff;
`
// ----  @props ---- //
//defNum 기본값
//min 최솟값
//max 최댓값
export default function NumberInput(props){

    const [num,setNum] = useState(props.defNum);
    useEffect(()=>{
      if(typeof props.defNum == "undefined"){
        setNum(0);
      }
    },[]);

    const onchangeNum = (e) =>{
      setNum(e);
      if(props.onchangeHandler){
        props.onchangeHandler(e);
      }
      if(e < props.min ){
        alert(props.min+" 이상의 수량을 입력해주세요.");
        setNum(props.min);
      }

      if(e > props.max ){
        alert(props.max+" 이하의 수량을 입력해주세요.");
        setNum(props.max);
      }
    }

    return(
      <Box>
        <IconButton onClick={()=>onchangeNum(num-1)}>-</IconButton>
        <NumInput
          type="number"
          value={num}
          onChange={(e)=>onchangeNum(e.target.value)}
        />
        <IconButton onClick={()=>onchangeNum(num+1)}>+</IconButton>
      </Box>
    )
}
