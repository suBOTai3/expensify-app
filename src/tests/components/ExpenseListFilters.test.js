import React from 'react';
import { shallow } from 'enzyme';
import { ExpenseListFilters } from '../../components/ExpenseListFilters';
import expenses from '../fixtures/expenses';
import { filters, altFilters } from '../fixtures/filters'
import { DateRangePicker } from 'react-dates';

let setTextFilter, sortByAmount, sortByDate, setStartDate, setEndDate, wrapper;

beforeEach(() => {
   
    setStartDate = jest.fn();
    setEndDate = jest.fn();
    sortByAmount = jest.fn();
    sortByDate = jest.fn();
    setTextFilter = jest.fn();
    wrapper = shallow(
        <ExpenseListFilters
            setStartDate={setStartDate}
            setEndDate={setEndDate}
            sortByAmount={sortByAmount}
            sortByDate={sortByDate}
            setTextFilter={setTextFilter}
            filters={filters}
        />);
});

test('should render ExpenseListFilters correctly', () => {
    expect(wrapper).toMatchSnapshot();
})

test('should render ExpenselistFilters with alternate data correctly', () => {
    wrapper.setProps({ filters: altFilters });
    expect(wrapper).toMatchSnapshot();
})

test('should handle text change', () => {
    wrapper.setProps({ filters });
    wrapper.find('input').simulate('change', { target: { value: 'bill' } } );
    expect(setTextFilter).toHaveBeenCalledWith('bill');
})

test('should sort by date', () => {
    const value = 'date';
    wrapper.find('select').prop('onChange')({ target: { value }});
    expect(sortByDate).toHaveBeenCalled();
})

test('should sort by amount', () => {
    const value = 'amount';
    wrapper.find('select').prop('onChange')({ target: { value } });
    expect(sortByAmount).toHaveBeenCalled();
})

test('should handle date changes  ', () => {
    wrapper.find(DateRangePicker).prop('onDatesChange')(altFilters);
    expect(setStartDate).toHaveBeenCalledWith(altFilters.startDate);
    expect(setEndDate).toHaveBeenCalledWith(altFilters.endDate);
})

test('should handle date focus changes', () => {
    const calendarFocused = false;
    wrapper.find(DateRangePicker).prop('onFocusChange')(calendarFocused);
    console.log(wrapper.state());
    expect(wrapper.state().calendarFocused).toEqual(calendarFocused);
 })
 