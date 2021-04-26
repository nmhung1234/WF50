import React from "react";
import styled from "styled-components";

import DateForm from "./form/DateForm";
import DescriptionForm from "./form/DescriptionForm";
import FilterForm from "./form/FilterForm";
import PriceForm from "./form/PriceForm";


function ExpenseForm(props) {
    const handleFrom = (e) => {
        e.preventDefault();
    };

    return (
        <div className="form">
            <form onSubmit={handleFrom}>
                <div>
                    <lable>
                        Description
                        <DescriptionForm />
                    </lable>

                    <lable>
                        Price
                        <PriceForm />
                    </lable>

                    <lable>
                        Date
                        <DateForm />
                    </lable>

                    <lable>
                        Filter
                        <FilterForm />
                    </lable>
                </div>
                <div>
                    <Button type="submit">Add</Button>
                    <Button type="button">Cancel</Button>
                </div>
            </form>
        </div>
    );
}

const Button = styled.button`
    margin: 10px;
    padding: 10px;
    border-radius: 5px;
    border: 1px solid white;
    transition: all 0.3s;

    &:hover {
        background-color: orange;
        color: #fff;
    }
    &:active {
        background-color: rgb(0, 140, 255);
    }
`;




export default ExpenseForm;
