import { configureStore, combineReducers } from "redux";
import uuid from 'uuid';

//ADD_EXPENSPE
const addExpense = (
    {
        description = '',
        note = '',
        amount = 0,
        createdAt = 0,
    } = {}
) => ({
    type: 'ADD_EXPENSE',
    expenses: {
        id=uuid(),
        description,
        note,
        amount,
        createdAt,
    }
})


//REMOVE_EXPENSE
const removeExpense = ({ id } = {}) => {
    type: 'REMOVE_EXPENSE',
        id

}

//EDIT_EXPENSE
const editExpense=(id,updates)=>{
    type:'EDIT_EXPENSE',
    id,
    updates
}

//SET_TEXT_FILTER
const setTextFilter=(text='')=>{
    type:'SET_TEXT_FILTER',
    text
}
//SORT_BY_DATE
//SORT_BY_AMOUNT
//SET_START_DATE
//SET_END_DATE

//Expenses Reducer
const expenseReducerDefaultState = {
    text: '',
    sortBy: 'date',
    startDate: undefined,
    endDate: undefined
}

const expenseReducer = (state = expenseReducerDefaultState, action) => {
    switch (action.type) {
        case 'ADD_EXPENSPE':
            return [
                ...state,
                action.expenses
            ]
        case 'REMOVE_EXPENSE':
            return state.filters(({ id }) => id !== action.id);
        case 'EDIT_EXPENSE':
            return state.map((expense)=>{
                if (expense.id===action.id){
                   return {
                    ...expense,
                    ...action.updates
                   } 
                }else{
                    return expense;
                }
            });
        default:
            return state
    }
}


//Filter Reducer
//text=>'' sort=>'date' startdate=undefined enddate=undefined

const filterReducerDefaultState = []
const filterReducer = (state = filterReducerDefaultState, action) => {
    switch (action.type) {
        case 'SET_TEXT_FILTER':
            return {
                ...state,
                text:action.text
            };
        default:
            return state
    }
}

//store creation
const store = configureStore(combineReducers({
    expenses: expenseReducer,
    filters: filterReducer
}))

store.subscribe(() => {
    console.log(store.getState())
})

const expenseOne = store.dispatch(addExpense({ description: 'rent', amount: 34 }))
const expenseTwo = store.dispatch(addExpense({ description: 'coffee', amount: 89 }))

store.dispatch(removeExpense({ id: expenseOne.expense.id }))
store.dispatch(editExpense(expenseTwo.expense.id,{amout:6}))
console.log(expenseOne)

store.dispatch(setTextFilter('rent'))
store.dispatch(setTextFilter())


const demoState = {
    expenses: [{
        id: "sdafagaef",
        description: "This is testing",
        note: "This was final payment",
        amount: 898,
        createdAt: 0
    }],
    filters: {
        text: "rent",
        sortBy: 'amount',
        startDate: undefined,
        endDate: undefined
    }
}

