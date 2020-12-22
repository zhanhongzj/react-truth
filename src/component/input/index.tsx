import React, {FC, useEffect} from 'react';
type IProps = {
    pushList:(text:string)=>void
}
const Input:FC<IProps> = (props:IProps)=>{
    const [text,changeText] = React.useState('');
    useEffect(()=>{
        console.log(11);
    });
    const change = (e:React.ChangeEvent<HTMLInputElement>)=>{
        changeText(e.target.value);
    };
    const add = ()=>{
        props.pushList(text);
        changeText('');
    };
    return (
        <div>
            <input type="text" onChange={change} value={text}/>
            <button onClick={add}>添加</button>
        </div>
    )
};
export default Input;
