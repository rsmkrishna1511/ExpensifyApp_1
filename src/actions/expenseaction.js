import uuid from 'uuid';

export const expenseActionGenerator = (
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

export const removeExpenseActionGenerator = ({ id }={}) => ({
    type : 'REMOVE-EXPENSE',
    id
});

export const editExpenseActionGenerator = (id, update) => ({
    type : 'EDIT-EXPENSE',
    id,
    update
});