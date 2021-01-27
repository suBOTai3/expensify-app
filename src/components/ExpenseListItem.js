import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import moment from 'moment';
import numeral from 'numeral';

const ExpenseListItem = ({description, amount, id, createdAt}) =>  (
    <div>
        <Link to={`/edit/${id}`} >
            <h3>{description}</h3>
        </Link>
        <p>
            {numeral(amount).format('$0,0.00')}
            -
            {moment(createdAt).format('yyyy-MM-DD')}
        </p>        
    </div>
);
 
export default ExpenseListItem;
    