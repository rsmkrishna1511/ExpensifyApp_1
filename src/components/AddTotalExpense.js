import React from 'react';
import { connect } from 'react-redux';
import AddExpenseSelector from '../selectors/AddExpenseSelector';

const AddTotalExpense = (props) => (

    <div>
        <h2>Total Amount : {props.totalAmount} , Total Expense : {props.totalExpense}</h2>
    </div>
);

const mapStateToProps = (state) => {
    return {
       totalAmount :  AddExpenseSelector(state.expense),
       totalExpense : state.expense.length
    }
};

export default  connect(mapStateToProps)(AddTotalExpense);