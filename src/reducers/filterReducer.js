const filterReducerDefState = {
    text : '',
    sortBy : '' , //amount or date
    startDate : undefined,
    endDate : undefined
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

export default filterReducer;
