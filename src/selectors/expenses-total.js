/**
* Reduces the array amount
* 
* @param {Array} expenses - List of expenses to reduce
* @return {int} amount totalled 
*/
export default (expenses) => {
    return expenses
        .map(expense => expense.amount)
        .reduce((sum, value) => sum + value, 0);
};