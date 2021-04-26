import React, { useState } from "react";

import "./App.css";

import Card from "./components/Card/Card";
import ExpenseItem from "./components/Card/ExpenseItem/ExpenseItem";
import ExpenseForm from './components/ExpenseForm/ExpenseForm';


function App() {
    const [expanData, setExpandata] = useState([
        {
            id: 1,
            price: 20,
            description: 'New Shose',
            date: new Date(2020, 4, 22)
        },
        {
            id: 2,
            price: 200,
            description: 'Bike',
            date: new Date(2021, 3, 10)
        },
        {
            id: 3,
            price: 500,
            description: 'Phone',
            date: new Date(2019, 7, 20)
        },
        {
            id: 4,
            price: 1000,
            description: 'Laptop',
            date: new Date(2018, 12, 5)
        }
    ]);
    let items = expanData.map((item) => {
        return (
            <ExpenseItem key={item.id} date={item.date} price={item.price } title={item.description} />
        );
    });

    const handleAddItem = (item) => {
        setExpandata((prevExpanData) => {
            return ([...prevExpanData, item])
        });
    }

    return (
        <>
            <ExpenseForm onSubmit={handleAddItem} />
            <Card>{items}</Card>

        </>
    )
}

export default App;
