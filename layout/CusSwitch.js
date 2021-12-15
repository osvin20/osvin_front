import Switch from "react-switch";
import React,{useState} from 'react';


export default function CusSwitch(props){
    const [val ,setVal] = useState(props.checked);
    const onChangeVal = (e) =>{
        console.log(e);
        setVal(e);
    }
    return(
        <Switch 
            {...props}
            checked={val}
            onChange={onChangeVal}
            
        />
    )
}