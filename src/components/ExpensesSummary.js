import React from 'react';
import numeral from 'numeral';
import getExpenseTotals from '../selectors/expenses-total'

export class ExpensesSummary extends React.Component {
    constructor(props) {
        super(props)
    }

    getExpenseTotal = (expenses) => {
        getExpenseTotals(expenses);
    }

    render() {
        return (
            <div>
                <p>Viewing {this.props.expenses.length} expense {this.props.expenses.length > 0 && 's'} totalling {numeral(getExpenseTotals(expenses))}</p>
            </div>
        )
    }
}