import { createStore } from 'redux';

// const store = createStore((state = { count: 0}) => {
//     return state;
// });

const store = createStore((state = { count : 0}, action) => {

    switch (action.type){
        case 'UP' :
            //const increament = typeof action.increamentBy === 'number' ? action.increamentBy : 1 ;
            return {
                count : state.count + action.increamentBy
            };
        case 'DOWN' : 
           // const decreament = typeof action.decreamentBy === 'number' ? action.decreamentBy : 1;
            return {
                count : state.count - action.decreamentBy
            };
        case 'RESET' :
          // state.count = 0; either way
          return {
              count : 0
          }
        default :
            return state;
    }

});

// const increamentBy = (payload = {}) => ({
//     type : 'UP',
//     increamentBy : typeof payload.increamentBy === 'number' ? payload.increamentBy : 1
// });

const increamentBy = ({ increamentBy = 1} = {}) => ({
    type : 'UP',
   // increamentBy : increamentBy  "IF BOTH HAS SAME NAME WE CAN ASSIGN DIRECTLY..."
   increamentBy
});

const decreamentBy = ({ decreamentBy = 1} = {}) => ({
    type : 'DOWN',
    decreamentBy
});

console.log('Redux Learning Start');

store.subscribe(() => {
    console.log(store.getState());
});

// store.dispatch({
//     type : 'UP',
//     increamentBy : 5
// });

store.dispatch(increamentBy({increamentBy : 5}));

// store.dispatch({
//     type : 'UP'
// });

store.dispatch(increamentBy());

store.dispatch({
    type : 'RESET'
});

// store.dispatch({
//     type : 'DOWN',
//     decreamentBy : 10
// });

store.dispatch(decreamentBy({decreamentBy : 10}));
