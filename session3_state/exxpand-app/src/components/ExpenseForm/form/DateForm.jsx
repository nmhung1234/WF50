import React, { useState } from "react";

function DateForm(props) {
    const [date, setDate] = useState();

    const onChangeDate = (e) => {
        setDate(e.target.value);
        console.log(e.target.value);
    };
    return (
        <>
            <input type="date" value={date} onChange={onChangeDate} />
        </>
    );
}

DateForm.propTypes = {};

export default DateForm;
