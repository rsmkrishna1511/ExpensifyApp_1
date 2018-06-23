export const setTextFilterActionGenerator = (text = '') => ({
    type : 'TEXT-FILTER',
    text
});

export const sortByDateActionGenerator = () => ({
    type : 'SORT-DATE',
    filter : {
        sortBy : 'date'
    }
});

export const sortByAmountActionGenerator = () => ({
    type : 'SORT-AMOUNT',
    filter : {
        sortBy : 'amount'
    }
});

export const setStartDateActionGenerator = (startDate) => ({
    type : 'SET-STARTDATE',
    startDate
});

export const setEndDateActionGenerator = (endDate) => ({
    type : 'SET-ENDDATE',
    endDate
});
