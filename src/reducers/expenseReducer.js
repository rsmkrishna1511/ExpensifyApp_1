const expenseReducerDefState = [];

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

export default expensesReducer;