import { createStore, combineReducers } from 'redux';
import expensesReducer from '../reducers/expenseReducer';
import filterReducer from '../reducers/filterReducer';

export default () => {
    
    const store = createStore(
        combineReducers({
            expense : expensesReducer,
            filters : filterReducer
        })
    );

    return store;
} ;