import React, {useState } from "react";
import ExpanseDate from "./ExpanseDate/ExpanseDate";

import "./ExpenseItem.css";

function ExpenseItem(props) {
    const { price, date, children } = props;

    let title = props.title;
    const [tit, setTitle] = useState(title);
    // const [backgroundColor, setBackgroundColor] = useState();

    // const HandleClick = () => {
    //     setTitle("abc");
    //     console.log("click");
    //     setBackgroundColor("#fff");
    // };
    
    return (
        <div className="expense-item">
            <ExpanseDate date={date} />
            <div className="expen-item__description">
                <h2>{tit}</h2>
                <div className="expense-item__price">${price}</div>
            </div>
            {children}
            {/* <button onClick={HandleClick}>Change Description</button> */}
        </div>
    );
}

export default ExpenseItem;
