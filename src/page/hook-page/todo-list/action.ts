export const increaseAction = ()=>(dispatch: any)=>{
     setTimeout(()=>{
        dispatch({type:'increase'});
    },1000)
};
