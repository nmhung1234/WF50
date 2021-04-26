import React, { useState } from "react";
import styled from "styled-components";
import FormInput from "./FormInput";

function ExpenseForm(props) {
    const [date, setDate] = useState("");
    const [description, setDescription] = useState("");
    const [price, setPrice] = useState(0);
    const [filter, setFilter] = useState(0);
    const [formVisible, setFormVisible] = useState(false);

    const handleFrom = (e) => {
        e.preventDefault();
        onSubmit({
            description: description,
            date: new Date(date),
            price: price,
        });
        console.log("pushed");
    };

    const handleDateChange = (e) => {
        setDate(e.target.value);
        console.log(e.target.value);
    };

    const handleDescriptionChange = (e) => {
        setDescription(e.target.value);
        console.log(e.target.value);
    };

    const handlePriceChange = (e) => {
        setPrice(e.target.value);
        console.log(e.target.value);
    };
    const onChangeFilter = (e) => {
        setFilter(e.target.value);
        console.log(e.target.value);
    };
    const onHandelCancle = () => {
        setDate("");
        setDescription("");
        setFilter("");
        setPrice("");
        onShowForm();
    };

    const onShowForm = () => {
        setFormVisible(!formVisible);
        // console.log(formVisible);
    };
    const { onSubmit } = props;
    if (formVisible) {
        return (
            <div className="form">
                <form onSubmit={handleFrom}>
                    <div>
                        <FormInput
                            label="Description"
                            type="text"
                            placeholder="Enter Description"
                            value={description}
                            onchange={handleDescriptionChange}
                        />
                        <FormInput
                            label="Price"
                            type="number"
                            placeholder="Enter your price"
                            value={price}
                            onchange={handlePriceChange}
                        />
                        <FormInput
                            label="Date"
                            type="date"
                            placeholder=""
                            value={date}
                            onchange={handleDateChange}
                        />
                        <lable>
                            Filter
                            <select
                                onChange={onChangeFilter}
                                defaultValue={filter}
                            >
                                <option value="-1">Rẻ</option>
                                <option value="0">Vừa</option>
                                <option value="1">Đắt</option>
                            </select>
                        </lable>
                    </div>
                    <div>
                        <Button type="submit">Add</Button>
                        <Button type="button" onClick={onHandelCancle}>
                            Cancel
                        </Button>
                    </div>
                </form>
                <Button type="button" onClick={onShowForm}>
                    Hide Form
                </Button>
            </div>
        );
    } else {
        return (
            <>
                <Button type="button" onClick={onShowForm}>
                    Show Form
                </Button>
            </>
        );
    }
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
