import NumberInput from "../layout/NumberInput";
import SubLayout from "../layout/SubLayout";
import {useState,useEffect} from "react";

export default function TestNum(){

    const onchangeHandler = (e) =>{
      console.log() //데이터 받기
    }
    return(
        <SubLayout>
            <NumberInput onchangeHandler={onchangeHandler} defNum={1} min={0} max={10}/>
        </SubLayout>
    )
}
