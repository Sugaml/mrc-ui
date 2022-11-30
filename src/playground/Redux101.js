import {createStore} from 'redux'

const store=createStore((state={count:0},action)=>{
    switch (action.type){
        case 'INCREMENT':
            const incrementBy=typeof action.incrementBy==='number'?action.incrementBy:1;
            return {
                count:state.count+incrementBy
            };
        case 'DECREMENT':
            const decrementBy=typeof action.decrementBy==='number'?decrementBy:1;
            return {
                count:state.count-decrementBy
            };
        case 'RESET':
            return {
                    count:0
                };
        case 'RESET':
            return {
                    count:action.count
                };
        default:
            return state;
    }
    // if (action.type==='INCREMENT'){
    //     return{
    //         count:state.count+1
    //     }
    // }else{
    //     return state;
    // }
});

const unsubscribe=store.subscrine(()=>{
        console.log(store.getState());
    }
)



store.dispatch({
    type:"INCREMENT",
    incrementBy:5
});

unsubscribe()

store.dispatch({
    type:"INCREMENT"
});

store.dispatch({
    type:"RESET"
});

store.dispatch({
    type:"DECREMENT"
});

store.dispatch({
    type:"DECREMENT",
    decrementBy:10
});

store.dispatch({
    type:"SET",
    count:101
})

console.log(store.getState());