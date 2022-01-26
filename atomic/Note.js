
import styled from "styled-components";
import {useState,useEffect} from "react";

const Box = styled.div`
  width:100%;
  height:20px;
`;
const NotoText = styled.p`
  color:#e10000;
  line-height:15px;
  text-align:left;
  font-size:12px;
  padding:5px;
`;

// ----  @props -------- //
// noteText
export default function Note({noteText}){
    return(
      <>
        <Box>
          <NotoText>{noteText}</NotoText>
        </Box>
      </>
    )
}
