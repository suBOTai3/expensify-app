import React from 'react';
import { shallow } from 'enzyme';
import expenses from '../fixtures/expenses';
import { EditExpensePage } from '../../components/EditExpensePage';

 
let  editExpenseSpy, removeExpenseSpy, historySpy, wrapper, match ;

beforeEach(() => {
    editExpenseSpy = jest.fn();
    removeExpenseSpy = jest.fn();
    historySpy = { push: jest.fn() };
    match = {
        params: {
            id: expenses[1].id
        }
    }
    wrapper = shallow(<EditExpensePage expense={expenses[1]} editExpense={editExpenseSpy} removeExpense={removeExpenseSpy} history={historySpy} match={match}/>);
});

test('should render expense page', () => {
    expect(wrapper).toMatchSnapshot();
})

test('should handle editExpense', () => {
    wrapper.find('ExpenseForm').prop('onSubmit')(expenses[1]);
    expect(historySpy.push).toHaveBeenCalledWith('/');
    expect(editExpenseSpy).toHaveBeenCalledWith(expenses[1].id, expenses[1]);
})

test('should handle removeExpense', () => {
    wrapper.find('button').simulate('click');
    expect(removeExpenseSpy).toHaveBeenCalledWith({ id: expenses[1].id });
    expect(historySpy.push).toHaveBeenCalledWith('/');
})

