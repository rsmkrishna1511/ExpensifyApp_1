import React from 'react';
import { connect } from 'react-redux';
import { editExpenseActionGenerator, removeExpenseActionGenerator } from '../actions/expenseaction';
import UpsertExpense from './UpsertExpense';

const EditExpensePage = (props) => {
    
    return (
        <div>
            <h1>Edit Expense Form </h1>
            <UpsertExpense 
                expense={props.expense}
                onSubmit={    //this onsubmit is a custom function with return expense. history push is to redirect page.
                    (expense) => {
                        console.log(expense);
                        props.dispatch(editExpenseActionGenerator(props.match.params.id, expense));
                        props.history.push('/');
                    }}/>
            <button 
                onClick={() => {
                    props.dispatch(removeExpenseActionGenerator({ id : props.expense.id }));
                    props.history.push('/');
                }}>Delete</button>
        </div>
    );
};

const mapStateToProps = (state, props) => {
    return {
        expense : state.expense.find((expense) => {
            return expense.id === props.match.params.id;
        })
    };
};

export default connect(mapStateToProps)(EditExpensePage);