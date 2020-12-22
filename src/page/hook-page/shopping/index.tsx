import React from 'react';
import {useDispatch,useSelector} from 'react-redux';
const Shopping:React.FC = ()=>{
    const state = useSelector((state:any)=> state);
    const dispatch = useDispatch();
    const add = ()=>{
        dispatch({type:'increase'})
    };
    return (<div><span>shoping</span><div><button onClick={add}>add</button></div><div>{state.number}</div></div>)
};
export default Shopping;
