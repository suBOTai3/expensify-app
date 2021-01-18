import expensesReducer from '../../reducers/expenses';
import expenses from '../fixtures/expenses';
import moment from 'moment';

test('should set default state', () => {
    const state = expensesReducer(undefined, { type: '@@INIT' })
    expect(state).toEqual([]);
})

test('should remove an expense by id', () => {
    const action = {
        type: 'REMOVE_EXPENSE',
        id: expenses[1].id
    };

    const state = expensesReducer(expenses, action);
    expect(state).toEqual([expenses[0], expenses[2]])
})

test('should not remove an expense if id not found', () => {
    const action = {
        type: 'REMOVE_EXPENSE',
        id: '-1'
    };

    const state = expensesReducer(expenses, action);
    expect(state).toEqual(expenses)
})

test('should add an expense', () => {
    const action = {
        type: 'ADD_EXPENSE',
        expense: {
            id: '4',
            description: 'essenhout rent',
            amount: 18000,
            createdAt: moment()
        }
    }
    
    const state = expensesReducer(expenses, action);
    expect(state.length).toEqual(4);
    expect(state[3]).toEqual(action.expense);
    
})

test('should edit an expense', () => {
    const action = {
        type: 'EDIT_EXPENSE',
        id: '3',
        updates: {
            id: '3',
            amount: 12000,
        }
    }
    const state = expensesReducer(expenses, action);
    expect(state[2].amount).toEqual(12000);
})

test('should not edit expense if expense not found', () => {
    const action = {
        type: 'EDIT_EXPENSE',
        expense: {
            id: '-3',
            amount: 12000,
        }
    }
    
    const state = expensesReducer(expenses, action);
    expect(state).toEqual(expenses);
})


