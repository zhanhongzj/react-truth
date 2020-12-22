import React from 'react';
import {storeContext} from '../../../redux/contextStore';
import {gConnect} from "../../../HOC/g-connect";

class CTodoList extends React.PureComponent <any,any>{
    constructor(props:any) {
        super(props);
    }
    add = ()=>{
        this.props.gDispatch({type:'increase'})
    };
    render(){
        return (
            <div>
                <span>ctodolist </span>
                <div><button onClick={this.add}>加</button></div>
                <div>{this.props.state?.number}</div>
            </div>
        )
    }
    // static contextType = storeContext;
}
export default gConnect(CTodoList);
