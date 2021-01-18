import React from 'react';
import { shallow } from 'enzyme';
import ExpenseForm from '../../components/ExpenseForm';
import expenses from '../fixtures/expenses';
import moment from 'moment';
import { SingleDatePicker } from 'react-dates';

test('should render ExpenseForm correctly with no data', () => {
    
    const wrapper = shallow(<ExpenseForm />);
    expect(wrapper).toMatchSnapshot();
});

test('should render ExpenseForm correctly with data', () => {

    const wrapper = shallow(<ExpenseForm expense={expenses[0]} />);
    expect(wrapper).toMatchSnapshot();
});

test('should render error for invalid form submission', () => {
    const wrapper = shallow(<ExpenseForm />);
    expect(wrapper).toMatchSnapshot();
    wrapper.find('form').simulate('submit', {
        preventDefault: () => { }
    });
    expect(wrapper.state('error').length).toBeGreaterThan(0);
    expect(wrapper).toMatchSnapshot();
});
     
test('should set description on input change', () => {
    const value = 'myvalue';
    const wrapper = shallow(<ExpenseForm />);
    wrapper.find('input').at(0).simulate('change', { target: { value: value } })
    expect(wrapper.state('description')).toBe(value);
});

test('should set note on textarea change', () => {
    const value = 'myvalue';
    const wrapper = shallow(<ExpenseForm />);
    wrapper.find('textarea').simulate('change', { target: { value } })

    expect(wrapper.state('note')).toBe(value);
});

test('should set amount if valid input', () => {
    const amount = '23.50';
    const wrapper = shallow(<ExpenseForm />);
    wrapper.find('input').at(1).simulate('change', {
        target: {
            value: amount
        }
    })

    expect(wrapper.state('amount')).toBe(amount);
});

test('should not set amount if invalid input', () => {
    const amount = '12.d122';
    const wrapper = shallow(<ExpenseForm />);
    const state = wrapper.state;
    wrapper.find('input').at(1).simulate('change', {
        target: {
            value: amount
        }
    })

    expect(wrapper.state('amount')).not.toEqual(amount);
    expect(wrapper.state).toEqual(state);
    expect(wrapper.state('amount')).toBe('');
});

test('should call onSubmit prop for valid form submission', () => {
    const onSubmitSpy = jest.fn();
    const wrapper = shallow(<ExpenseForm expense={expenses[0]} onSubmit={onSubmitSpy} />);
    const exp = expenses[0];
    wrapper.find('form').simulate('submit', { preventDefault: () => { } });
    
    expect(wrapper.state('error')).toBe('');
    expect(onSubmitSpy).toHaveBeenCalledWith({
        description: exp.description,
        amount: exp.amount,
        createdAt: exp.createdAt,
        note: exp.note,
    });
});


test('should set date on date change', () => {
    const now = moment();
    const wrapper = shallow(<ExpenseForm />);
    wrapper.find(SingleDatePicker).prop('onDateChange')(now);
    expect(wrapper.state('createdAt')).toEqual(now);
});

test('should set calendar focus on change', () => {
    const wrapper = shallow(<ExpenseForm />);
    wrapper.find(SingleDatePicker).prop('onFocusChange')({ focused: true });
    expect(wrapper.state('calendarFocused')).toEqual(true);
    wrapper.find(SingleDatePicker).prop('onFocusChange')({ focused: false });
    expect(wrapper.state('calendarFocused')).toEqual(false);
})
