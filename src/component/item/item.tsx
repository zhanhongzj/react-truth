import React from 'react';
import style from './index.module.scss';
const Item = (props:any)=>{
    const deleteItem = ()=>{
        console.log(props.data.id);
        props.deleteItem(props.data.id);
    };
    return (
        <div className={style.normal}>
            <input type="checkbox"  checked={props.data.completed} onChange={()=>{props.change(props.data.id)}}/>
            <div className={`${style.text} ${props.data.completed?style.completed:''}`}>{props.data.text}</div>
            <button onClick={deleteItem}>删除</button>
        </div>
    )
};
export default React.memo(Item);
