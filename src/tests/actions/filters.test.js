import {setStartDate, setEndDate, setTextFilter, sortByDate, sortByAmount } from '../../actions/filters';
import moment from 'moment';

test('should generate set start date action object', () => {
    const action = setStartDate(moment(0));

    expect(action).toEqual({
        type: 'SET_START_DATE',
        startDate: moment(0),
    })
});

test('should generate set end date action object', () => {
    const action = setEndDate(moment(0));

    expect(action).toEqual({
        type: 'SET_END_DATE',
        endDate: moment(0),
    })
});

test('should set text filter', () => {

    const text = 'bill';
    const textFilter = setTextFilter(text);

    expect(textFilter).toEqual({
        type: 'SET_FILTER',
        text
    })
})

test('should set text filter with default values', () => {
    const filter = setTextFilter();

    expect(filter).toEqual({
        type: 'SET_FILTER',
        text: '',
    })
})

test('should set sort by amount filter', () => {
    const filter = sortByAmount();

    expect(filter).toEqual({
        type: 'SORT_BY_AMOUNT'
    })
})

test('should set sort by date filter', () => {
    const filter = sortByDate();

    expect(filter).toEqual({
        type: 'SORT_BY_DATE'
    })
})
