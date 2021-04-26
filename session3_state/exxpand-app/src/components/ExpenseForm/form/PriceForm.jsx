import React, { useState } from "react";

function PriceForm(props) {
    const [price, setPrice] = useState(0);

    const onChangePrice = (e) => {
        setPrice(e.target.value);
        console.log(e.target.value);
    };
    return (
        <>
            <input type="number" value={price} onChange={onChangePrice} />
        </>
    );
}

export default PriceForm;