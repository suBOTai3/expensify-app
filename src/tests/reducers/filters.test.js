import { experiments } from 'webpack';
import filtersReducer from '../../reducers/filters.js';
import { setTextFilter, sortByAmount, sortByDate } from '../../actions/filters';
import moment from 'moment';

const defaultState = {
    text: '',
    startDate: undefined,
    endDate: undefined,
    sortBy: 'amount'
};

test('should setup default filter values', () => {
 
    const state = filtersReducer(undefined, { type: '@@INIT'});
    expect(state).toEqual({
        text: '',
        sortBy: 'date',
        startDate: moment().startOf('month'),
        endDate: moment().endOf('month'),
    });
})

test('should set sortBy amount', () => {
    const state = filtersReducer(undefined, { type: 'SORT_BY_AMOUNT' })
    expect(state.sortBy).toEqual('amount');
})

test('should set sortBy to date', () => {
    const state = filtersReducer(undefined, { type: 'SORT_BY_DATE' })
    expect(state.sortBy).toEqual('date');
})

test('should set text filter', () => {
    const state = filtersReducer(undefined, { type: 'SET_FILTER', text: 'test' })
    expect(state.text).toEqual('test')
})

test('should set startDate filter', () => {
    const startDate = moment(0);
    const state = filtersReducer(undefined, { type: 'SET_START_DATE', startDate })
    expect(state.startDate).toEqual(moment(0))
})

test('should set endDate filter', () => {
    const endDate = moment(0);
    const state = filtersReducer(undefined, { type: 'SET_END_DATE', endDate })
    expect(state.endDate).toEqual(moment(0))
})


