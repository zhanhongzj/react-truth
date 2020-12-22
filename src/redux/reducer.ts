const initState =  {
    number:1
};
const reducer = (state = initState,action:any)=>{
    switch (action.type) {
        case 'increase': return {...state,number:++state.number}
        default:return state
    }
};
export default reducer;
