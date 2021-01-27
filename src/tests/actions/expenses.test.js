import { experiments } from 'webpack';
import { addExpense, editExpense, removeExpense } from '../../actions/expenses'

test('should setup remove expense action object', () => {
    const action = removeExpense({ id: '123abc' });
    expect(action).toEqual({
        type: 'REMOVE_EXPENSE',
        id: '123abc'
    })
});


test('should setup edit expense action object', () => {
    const action = editExpense('123abc---', { description: 'Gas bill', amount: "5000" });
    expect(action).toEqual({
        type: 'EDIT_EXPENSE',
        id: '123abc---',
        updates: {
            description: 'Gas bill',
            amount: "5000"
        }
    })
});

test('should setup add expense action object', () => { 
    const expenseData = {
        description: 'Rent',
        amount: 109500,
        createdAt: 1000,
        note: 'last mont rent'
    }

    const action = addExpense(expenseData);

    expect(action).toEqual({
        type: 'ADD_EXPENSE',
        expense: {
            ...expenseData,
            id: expect.any(String)
        }
    })
});

test('should setup add expense action object with default values', () => { 
   
    const action = addExpense();

    expect(action).toEqual({
        type: 'ADD_EXPENSE',
        expense: {
            amount: 0,
            createdAt: 0,
            description: '',
            note: '',
            id: expect.any(String)
        },

    })
});