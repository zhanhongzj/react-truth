import React from 'react';
import {connect} from 'react-redux';
class CShoping extends React.PureComponent<any,any> {
    componentDidMount() {
        console.log(this.props);
    }
    render(){
        return (<div>
            <span>c-shopping</span>
            <div><button onClick={this.props.add}>add</button></div>
            <div>{this.props.state.number}</div>
        </div>)
    }
}
const mapStateToProps = (state:any)=> {return {state}};
const mapDispatchToProps = (dispatch:any)=>{
    return {
        add:()=>{dispatch({type:'increase'})}
    };
};
export default connect(mapStateToProps,mapDispatchToProps)(CShoping);
