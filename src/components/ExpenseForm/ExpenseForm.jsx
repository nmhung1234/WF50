import React from "react";
import DateForm from "./form/DateForm";
import DescriptionForm from "./form/DescriptionForm";
import FilterForm from "./form/FilterForm";
import PriceForm from "./form/PriceForm";

function ExpenseForm(props) {
    const handleFrom = (e) => {
        e.preventDefault();
    };

    return (
        <div>
            <form onSubmit={handleFrom}>
                <div>
                    <lable>
                        Description
                        <DescriptionForm />
                    </lable>
                </div>
                <div>
                    <lable>
                        Price
                        <PriceForm />
                    </lable>
                </div>
                <div>
                    <lable>
                        Date
                        <DateForm />
                    </lable>
                </div>
                <div>
                    <lable>
                        Filter
                        <FilterForm />
                    </lable>
                </div>
                <div>
                    <button type="submit">Add</button>
                    <button type="button">Cancel</button>
                </div>
            </form>
        </div>
    );
}

export default ExpenseForm;
