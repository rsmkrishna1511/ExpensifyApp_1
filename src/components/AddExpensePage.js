import React from 'react';
import { connect } from 'react-redux';
import { expenseActionGenerator } from '../actions/expenseaction';
import UpsertExpense from './UpsertExpense';


const AddExpensePage = (props) => (
    <div>
        <h1>Add Expense Form </h1>
        <UpsertExpense 
            onSubmit={    //this onsubmit is a custom function with return expense. history push is to redirect page.
                (expense) => {
                    props.dispatch(expenseActionGenerator(expense));
                    props.history.push('/');
                }}/>
    </div>
);

export default connect()(AddExpensePage);