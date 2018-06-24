import React from 'react';
import ExpenseList from './ExpenseList';
import ExpenseListFilter from './ExpenseListFilter';
import AddTotalExpense from './AddTotalExpense';

const ExpenseDashboardPage = () => (
    <div>
        <AddTotalExpense />
       <ExpenseListFilter />
       <ExpenseList />
    </div>
);

export default ExpenseDashboardPage;