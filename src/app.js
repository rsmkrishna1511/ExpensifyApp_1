import React from 'react';
import ReactDOM from 'react-dom';
import { Provider } from 'react-redux';
import AppRouter from './routers/AppRouter';
import configureStore from './configStore/configurationStore';
import {expenseActionGenerator} from './actions/expenseaction';
import {setTextFilterActionGenerator} from './actions/filteraction';
import getVisibleExpense from './selectors/selector';
import 'normalize.css/normalize.css';
import './styles/styles.scss'

const store = configureStore();
// store.subscribe(() => {
//     const state = store.getState();
//     const visibleExpense = getVisibleExpense(state.expense, state.filters);
//     console.log(visibleExpense);
// });

// store.dispatch(expenseActionGenerator({description:'Water Bill', amount:500}));
// store.dispatch(expenseActionGenerator({description:'Gas Bill', amount:1000}));
// store.dispatch(expenseActionGenerator({description:'Rent', amount:10500, createdAt:3823}));
// store.dispatch(expenseActionGenerator({description:'Car Maintance', amount:4674, createdAt:2000}));

//store.dispatch(setTextFilterActionGenerator('Bill'));

const jsx = (
    <Provider store={store}>
        <AppRouter />
    </Provider>
);


ReactDOM.render(jsx, document.getElementById('app'));