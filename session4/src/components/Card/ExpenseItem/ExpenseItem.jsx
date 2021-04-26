import React, {useState } from "react";
import ExpanseDate from "./ExpanseDate/ExpanseDate";

import "./ExpenseItem.css";

function ExpenseItem(props) {
    const { price, date, children } = props;
    const backgroundColor = price >= 200 ? "red" : "purple";

    let title = props.title;
    const [tit, setTitle] = useState(title);

    return (
        <div className="expense-item">
            <ExpanseDate date={date} />
            <div className="expen-item__description">
                <h2>{tit}</h2>
                <div className="expense-item__price" style={{backgroundColor}}>${price}</div>
            </div>
            {children}
            {/* <button onClick={HandleClick}>Change Description</button> */}
        </div>
    );
}

export default ExpenseItem;
