import React,{FC,useEffect,useState} from 'react';
import {storeContext} from '../../../redux/contextStore';
import {useContext} from 'react';
import {increaseAction} from './action';
import {useDispatch,useSelector} from 'react-redux';
import Input from "../../../component/input";
import List from "../../../component/List";
import {buildUniqueId} from "../../../tools/tools";
const uniqueId = buildUniqueId();
type list = {id:number,completed:boolean,text:string}[]
const TodoList:FC = ()=>{
    const store = useContext(storeContext);
    const [state,setState] = useState(store.getState());
    const dispatch = useDispatch();
    useEffect(()=>{
        const unsubscribe = store.subscribe(()=>{
            console.log(store.getState());
            setState(store.getState())
        })
        return ()=>{
            unsubscribe();
        }
    },[])
    const add = ()=>{
        dispatch(increaseAction() as any);
    };
    const [list ,setList] = useState<list>([]);
    const pushList = (text:any)=>{
        setList([...list,{id:uniqueId(),completed:false,text}]);
    };
    const deleteItem = (id:number)=>{
        setList(list.filter((item)=>{return item.id !==id}));
    };
    const change = (id:number)=>{
        setList(list.map((item)=>{if(item.id===id) return {...item,completed:!item.completed};return item;}))
    };
    return(<div>
        <Input pushList={pushList}/>
        <List data={list} deleteItem = {deleteItem} change={change}/>
        {/*<span>todolist</span>*/}
        {/*<button onClick={add}>加</button>*/}
        {/*<p>{state.Htodo.number}</p>*/}
    </div>)
};
export default TodoList;
