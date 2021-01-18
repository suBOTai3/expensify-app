import { v4 as uuid } from 'uuid';

export const addExpense = ({
    amount = 0,
    createdAt = 0,
    description = '',
    note = '' } = {}) => ({
        type: 'ADD_EXPENSE',
        expense: {
            id: uuid(),
            description,
            note,
            amount,
            createdAt
        }
    })

export const removeExpense = ({ id } = {}) =>
({
    type: 'REMOVE_EXPENSE',
    id    
})

export const editExpense = (id, updates) =>
({
    type: 'EDIT_EXPENSE',
    id,
    updates
})
