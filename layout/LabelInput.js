
export default function LabelInput(props){
    return (
        <div>
            <label htmlFor={props.label_id}>{props.label_name}</label>
            <input type={"text"} id={props.label_id}/>
        </div>
     
    )   
}