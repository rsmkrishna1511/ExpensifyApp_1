import React from 'react';
import { connect } from 'react-redux';
import {setTextFilterActionGenerator, sortByDateActionGenerator, sortByAmountActionGenerator} from '../actions/filteraction';

const ExpenseListFilter = (props) => (
    <div>
        <input type='text' 
                value={props.filter.text}
                onChange={(e) => {
                    props.dispatch(setTextFilterActionGenerator(e.target.value));
                }}/>

        <select 
            value = {props.filter.sortBy}        
            onChange={
                (e) => {
                    //var val = e.target.value;

                    if( e.target.value === 'date'){
                        props.dispatch(sortByDateActionGenerator());
                    }else{
                        props.dispatch(sortByAmountActionGenerator());
                    }
                }    
            }>
                <option value='date'>Date</option>
                <option value='amount'>Amount</option>
        </select>
    </div>
);

const HOCExpenseTextFilter = connect((state) => {
    return {
        filter : state.filters
    }
})(ExpenseListFilter)

export default HOCExpenseTextFilter;