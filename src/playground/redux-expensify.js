import { createStore, combineReducers } from 'redux';
import uuid from 'uuid';

const expenseReducerDefState = [];
const filterReducerDefState = {
    text : '',
    sortBy : '' , //amount or date
    startDate : undefined,
    endDate : undefined
};

const expenseActionGenerator = (
    { description = '', note = '', amount = 0, createdAt = 0 } = {}
) => ({
    type : 'ADD-EXPENSE',
    expense : {
        id : uuid(),
        description,
        note,
        amount,
        createdAt
    }
});

const removeExpenseActionGenerator = ({ id }={}) => ({
    type : 'REMOVE-EXPENSE',
    id
});

const editExpenseActionGenerator = (id, update) => ({
    type : 'EDIT-EXPENSE',
    id,
    update
});

const setTextFilterActionGenerator = (text = '') => ({
    type : 'TEXT-FILTER',
    text
});

const sortByDateActionGenerator = () => ({
    type : 'SORT-DATE',
    filter : {
        sortBy : 'date'
    }
});

const sortByAmountActionGenerator = () => ({
    type : 'SORT-AMOUNT',
    filter : {
        sortBy : 'amount'
    }
});

const setStartDateActionGenerator = (startDate) => ({
    type : 'SET-STARTDATE',
    startDate
});

const setEndDateActionGenerator = (endDate) => ({
    type : 'SET-ENDDATE',
    endDate
});

//ExpenseReducer
const expensesReducer = (state = expenseReducerDefState, action) => {

    switch (action.type){
        case 'ADD-EXPENSE' :
            return [
                ...state,
                action.expense
            ];
        case 'REMOVE-EXPENSE' :
            return state.filter(({ id }) => {
                return id !== action.id;
            } )
        case 'EDIT-EXPENSE' :
            return state.map((expense) => {
                if(expense.id === action.id){
                    return {
                        ...expense,
                        ...action.update
                    }
                }else{
                    return expense;
                }
            })
        default :
            return state;
    }
};

const filterReducer =  (state = filterReducerDefState, action) => {

    switch (action.type){
        case 'TEXT-FILTER' :
            return {
                ...state,
                text : action.text 
            }
        case 'SORT-DATE' :
            return {
                ...state,
                ...action.filter
            }
        case 'SORT-AMOUNT' :
            return {
                ...state,
                ...action.filter
            }
        case 'SET-STARTDATE' :
            return {
                ...state,
                startDate : action.startDate
            }
        case 'SET-ENDDATE' :
            return {
                ...state,
                endDate : action.endDate
            }
        default :
            return state;
    }
};

const store = createStore(
    combineReducers({
        expense : expensesReducer,
        filters : filterReducer
    })
);

const getVisibleExpense = (expense, {text, sortBy, startDate, endDate }) => {
    return expense.filter((expense) => {
        const startDateMatch = typeof startDate !== 'number' || expense.createdAt >= startDate;
        const endDateMatch = typeof endDate !== 'number' || expense.createdAt <= endDate;
        const textMatch = expense.note.toLowerCase().includes(text.toLowerCase());

        return startDateMatch && endDateMatch && textMatch;
    }).sort((a, b) => {
        if(sortBy === 'date'){
            return a.createdAt < b.createdAt ? -1 : 1;
        }else{
            return a.amount > b.amount ? -1 : 1;
        }
    });
}

store.subscribe(() => {
    const state = store.getState();
    console.log(getVisibleExpense(state.expense, state.filters));  
});

const expenseOne = store.dispatch(expenseActionGenerator({description:'Rent',note:'Jan Rent',amount:400,createdAt:1200}));
const expenseTwo = store.dispatch(expenseActionGenerator({description:'Rent',note:'Feb Rent',amount:300,createdAt:1000}));

// store.dispatch(removeExpenseActionGenerator({id : expenseOne.expense.id}));

// store.dispatch(editExpenseActionGenerator(expenseTwo.expense.id,{amount : 500}));

//  store.dispatch(setTextFilterActionGenerator('Jan'));

 store.dispatch(sortByDateActionGenerator());

 store.dispatch(sortByAmountActionGenerator());

//  store.dispatch(setStartDateActionGenerator(125));
// store.dispatch(setStartDateActionGenerator());
//  store.dispatch(setEndDateActionGenerator(1250));

const demoState = {
    expense : [{
        id : 'Random01',
        description : 'January Rent',
        note : 'This is final payment for that address',
        amount : 54500,
        createdAt : 0
    }],
    filters : {
        text : 'Rent',
        sortBy : 'amount' , //amount or date
        startDate : undefined,
        endDate : undefined
    }
};


console.log('redux-expensify');