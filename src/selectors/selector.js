const getVisibleExpense = (expense, {text, sortBy, startDate, endDate }) => {
    return expense.filter((expense) => {
        const startDateMatch = typeof startDate !== 'number' || expense.createdAt >= startDate;
        const endDateMatch = typeof endDate !== 'number' || expense.createdAt <= endDate;
        const textMatch = expense.description.toLowerCase().includes(text.toLowerCase());

        return startDateMatch && endDateMatch && textMatch;
    }).sort((a, b) => {
        if(sortBy === 'date'){
            return a.createdAt > b.createdAt ? 1 : -1;
        }else {
            return a.amount > b.amount ? -1 : 1;
        }
    });
}

export default getVisibleExpense;