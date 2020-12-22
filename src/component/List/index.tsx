import React from 'react';
import Item from "../item/item";
const List = (props:any)=>{
    console.log(props);
    return (
        <div>
            {
                props.data.map ((item:any)=>{
                    return <Item key={item.id} data={item} deleteItem = {props.deleteItem} change={props.change}/>
                })
            }
        </div>
    )
};
export default List;
