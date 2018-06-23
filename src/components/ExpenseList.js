import React from 'react';
import { connect } from 'react-redux';
import ExpenseItem from './ExpenseItem';
import getVisibleExpense from '../selectors/selector';

const ExpenseList = (props) => (
    <div>
        <h1>Expense List</h1>
        {props.expenses.length}
        {props.expenses.map((expense) => {
           return <ExpenseItem key={expense.id} {...expense}/>
        })}
    </div>
);

// const HOCExpenseList = connect((state) => {
//     return {
//         expenses : state.expense
//     }
// })(ExpenseList);

// export default HOCExpenseList;

const mapStateToProps = (state) => {
      return {
          expenses : getVisibleExpense(state.expense, state.filters)
       }
  };

export default connect(mapStateToProps)(ExpenseList);