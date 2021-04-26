import React from "react";

import './ExpanseDate.css'
function ExpanseDate(props) {
    const { date } = props;

    const year = date.getFullYear();
    const month2 = date.toLocaleDateString("en-US", { month: "2-digit" });
    const day = date.toLocaleDateString("en-US", { day: "2-digit" });

    return (
        <div className="exp_date">
            <p>{year}</p>
            <p>{month2}</p>
            <p>{day}</p>
        </div>
    );
}

export default ExpanseDate;
