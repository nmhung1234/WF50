import React from "react";

import "./ExpenseItem.css";

function ExpenseItem(props) {
    console.log(props);

    const { price, title, children } = props;
    return (
        <div className="expense-item">
            <p>March 28th, 2020</p>
            <div className="expen-item__description">
                <h2>{title}</h2>
                <div className="expense-item__price">${price}</div>
            </div>
            {children}
        </div>
    );
}

export default ExpenseItem;
