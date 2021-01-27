import React from 'react';
import { shallow } from 'enzyme';
import { AddExpensePage } from '../../components/AddExpensePage';
import expenses from '../fixtures/expenses';
    

let onSubmitSpy, historySpy, wrapper;

beforeEach(() => {
    onSubmitSpy = jest.fn();
    historySpy = { push: jest.fn() };
    wrapper = shallow(<AddExpensePage addExpense={onSubmitSpy} history={historySpy} />, { disableLifecycleMethods: true });
});

test('should render add expense page', () => {
    expect(wrapper).toMatchSnapshot();
})

test('should handle onSubmit', () => {
    wrapper.find('ExpenseForm').prop('onSubmit')(expenses[0]);
    expect(onSubmitSpy).toHaveBeenLastCalledWith(expenses[0]);
    expect(historySpy.push).toHaveBeenLastCalledWith('/');
})

