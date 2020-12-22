import React from 'react';
import {storeContext} from "../redux/contextStore";

export const gConnect = <P extends object>(GComponent:React.ComponentType<P>)=>{
    return class GConnect extends React.PureComponent<P,any> {
        private unsubscribe:any;
        constructor(props:P) {
            super(props);
            this.state = {
                state:null
            };
        }
        componentDidMount() {
            this.setState({
                state:this.context.getState()
            })
            this.unsubscribe =  this.context.subscribe(()=>{
                console.log(this.context.getState());
                this.setState({
                    state:this.context.getState()
                })
            });
        }
        componentWillUnmount() {
            this.unsubscribe();
        }

        render(){
            console.log(this.state);
            return(<GComponent {...this.props} state={this.state.state} gDispatch={this.context.dispatch} />)
        }
        static contextType = storeContext;
    }
};
