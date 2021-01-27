import React from 'react';
import { connect } from 'react-redux';
import ExpenseListItem from './ExpenseListItem';
import selectExpenses from '../selectors/expenses';

export const ExpenseList = (props) => (
    <div>
        {
            props.expenses.length === 0 ? (
                <p>No expenses</p>
            ) : (
                    props.expenses.map((expense) =>
                        <ExpenseListItem key={expense.id} {...expense} dispatch={props.dispatch} />
                    )

                )
        }
    </div>
);

const mapStateToProps = (state) => {
    console.log('mapping state in ExpenseList', state);
    return {
        expenses: selectExpenses(state.expenses, state.filters),
        dispatch: state.dispatch,
    };
};

export default connect(mapStateToProps)(ExpenseList);
